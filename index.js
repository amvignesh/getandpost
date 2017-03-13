var express    = require("express");
var mysql      = require('mysql');
var body       = require('body-parser');
var q          = require('q');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'training'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

app.get("/vignesh",function(req,res){
connection.query('SELECT * from userregister', function(err, rows, fields) {
connection.end();
  if (!err){
    // console.log('The solution is: ', fields);
    res.json(rows);
  }
  else{
    console.log('Error while performing Query.');
  }
  });
});
app.use(body.urlencoded({extended:true}));
app.use(body.json());



app.post('/api', function(req, res) {
    //var user_id = req.body.Name;
    //var token = req.body.Email;
    //res.send(user_id + ' ' + token );

   var post = {
        Name: req.body.Name,
        Email: req.body.Email
    };

  
  connection.query('INSERT INTO  userregister set?', post, function(error) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('success');    
        }
    });
  res.send('success')


});




app.post("/vigneshsave",function(req,res){
  console.log(req.body);
   var defered = q.defer();
connection.query('insert into userregister(req.body.Name,req.body.Email) values(?,?)', function(err, rows, fields) {
  query =  mysql.query(defered.makeNodeResolver());
connection.end();
  if (!err){
     console.log('The solution is: ', fields);
    res.json(rows);
  }
  else{
    console.log('Error while performing Query.');
  }
  });
});


app.listen(3000);

