var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// add graphql
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var mysql = require('mysql');

// import file routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogRouter = require('./routes/blog');
// end import file routes

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// add lib bootstrap and jQuery
app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
// end lib bootstrap and jQuery

// load routes
app.use('/', indexRouter);
app.use('/blog', blogRouter);
app.use('/blog/add', blogRouter);
app.use('/blog/delete', blogRouter);
app.use('/users', usersRouter);

app.use(function(req, res, next) {

  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use((req, res, next) => {

  req.mysqlDb = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'codeigniter_db'
  });
  req.mysqlDb.connect();
  next();
}); 

var schema = buildSchema(`
  type User {
    id: String
    fname: String
    email: String
  }
  type Query {
    getUsers: [User],
    getUserInfo(id: Int) : User
    updateUserInfo(id: Int, fname: String, email: String): Boolean
    createUser(fname: String, email: String): Boolean
    deleteUser(id: Int): Boolean
  }
`);

const queryDB = (req, sql, args) => new Promise((resolve, reject) => {
    req.mysqlDb.query(sql, args, (err, rows) => {
        if (err)
            return reject(err);
        rows.changedRows || rows.affectedRows || rows.insertId ? resolve(true) : resolve(rows);
    });
});

var root = {
  getUsers: (args, req) => queryDB(req, "select * from user").then(data => data),
  getUserInfo: (args, req) => queryDB(req, "select * from user where id = ?", [args.id]).then(data => data[0]),
  updateUserInfo: (args, req) => queryDB(req, "update user SET ? where id = ?", [args, args.id]).then(data => data),
  createUser: (args, req) => queryDB(req, "insert into user SET ?", args).then(data => data),
  deleteUser: (args, req) => queryDB(req, "delete from user where id = ?", [args.id]).then(data => data)
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
