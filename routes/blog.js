var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET users listing. */
router.get('/', function(req, res, next) {
	const url = `http://localhost:3000/graphql`;
	const query = `
	  	query {
	    	getUsers {
	    		id,
			    fname,
			    email
			}
	  	}`;
	  	const opts = {
		  method: "POST",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify({ query })
		};

	fetch(url, opts)
	.then(response => response.json())
	.then(data => {
		res.render('blog', { title: data.data.getUsers });
		console.log('Here is the data: ', data.data); 
	});
});

router.post('/add',function(req,res){
	const url = `http://localhost:4000/graphql`;
	const student = {
        first : req.body.fname,
        last : req.body.lname
    }

	const query = 'query { createUser(fname: "'+student.first+'", email: "'+student.last+'")}';
	const opts = {
		  method: "POST",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify({ query })
		};
    
    fetch(url, opts)
	.then(response => response.json())
	.then(data => {
		res.render('blog', { title: [] });
		console.log('Here is the data:');
	});

    console.log(student);   
     // res.send('respond with a resource', student.first);     
});
router.post('/delete',function(req,res){
	const url = `http://localhost:4000/graphql`;
	const student = {
        id : req.body.id
    }
    const query = 'query { deleteUser(id:'+student.id+') }';
    const opts = {
		  method: "POST",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify({ query })
		};
    
    fetch(url, opts)
	.then(response => response.json())
	.then(data => {
		res.render('blog', { title: [] });
		console.log('Here is the data:', data);
	});
	console.log(student.id)
});

module.exports = router;