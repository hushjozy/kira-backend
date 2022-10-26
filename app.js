require('dotenv').config();
const express=require("express");
const bodyParser=require("body-parser");
const https=require("https");
const path = require('path');

const app=express();
var productArry;
var password ;
var dbPassword = "admin1234";
var valid = 0;
var user;
var cart; 
var userPassArry=[
  {
    username : "benji",
    password: "benji1234",
    cart : 
    [
      {product : "armani shoe"},
      {product : " gucci shoe"}
    ] 
  },
  {
    username : "femi",
    password: "femi1234",
    cart : [
      {product : "versace shoe"},
      {product : " sweater"}
    ]  
    
  }

]

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDdX5_3R_a-0peB7OTBTDRgeQL8P7HpGcA",
//   authDomain: "testings-7fe73.firebaseapp.com",
//   projectId: "testings-7fe73",
//   storageBucket: "testings-7fe73.appspot.com",
//   messagingSenderId: "131523371872",
//   appId: "1:131523371872:web:7de8e4c7a47577cede7405",
//   measurementId: "G-QK7J1NLZHF"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
// app.use( bodyParser.json());

app.get("/", function (req, res) {
    res.render('index')
  });

  app.get("/login", function (req, res) {
    res.render('admin.ejs')
  });
  app.post("/put", function (req, res) {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    req.on('data', function (chunk) {
        var theId = req.headers._id;
        console.log(theId);
    });
    // res.end('callback(\'{\"msg\": \"OK\"}\')');

    var request = require("request");

    var options = {
       method: 'PUT',
      url: `https://kiradb-4408.restdb.io/rest/kiras/${theId}`,
      headers: 
       { 'cache-control': 'no-cache',
         'x-apikey': '6511b0c6c35f829dd107dc7a932f9b0148659',
         'content-type': 'application/json' } };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
    });
    res.send('Edited successfully')
  });

  app.post("/delete", function (req, res) {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    req.on('data', function (chunk) {
        console.log(req.headers._id);
        var theId = req.headers._id;
        var request = require("request");

        var options = { method: 'DELETE',
          url: `https://kiradb-4408.restdb.io/rest/kiras/${theId}`,
          headers: 
           { 'cache-control': 'no-cache',
             'x-apikey': '6511b0c6c35f829dd107dc7a932f9b0148659',
             'content-type': 'application/json' } };
        
        request(options, function (error, response, body) {
          if (error) throw new Error(error);
        
          console.log(body);
        });
        res.status(200)
    
    });
  });

  app.post("/login", function (req, res) {
    // var request = require("request");
    password = req.body.password
    console.log( password);
// var options = { method: 'GET',
//   url: 'https://kiradb-4408.restdb.io/rest/log',
//   headers: 
//    { 'cache-control': 'no-cache',
//      'x-apikey': '6511b0c6c35f829dd107dc7a932f9b0148659' } };

// request(options, function (error, response, dbData) {
//   if (error) throw new Error(error);

  // dbPassword = dbData
  // dbData.map((item) => console.log(item))
  // console.log(dbData);

  // var success;
  for (let index = 0; index < userPassArry.length; index++) {
    const element = userPassArry[index];
  console.log(element.password, password);  
    if(password == element.password) {
     user = element.username
        valid = 1;
        cart = element.cart
    }
    else if (password == dbPassword ){
       valid = 2
  }
  }
  console.log(cart , "this cart");
  if (valid === 1) { 
    res.send("<h1> Welcome </h1>"+ user+ "<p> here is your cart </p>"+ `<p> ${cart[0].product}</p>` + `<p> ${cart[1].product}</p>`
   )
  }
  else if (valid === 2 ){
    res.render('dashboard.ejs')
}
else{
  res.send(" User does not exist")
}
});
  // });
  /// delete products


  app.get("/delete", function (req, res) {
    var request = require("request");

    var options = { method: 'DELETE',
      url: 'https://kiradb-4408.restdb.io/rest/kiras/634fc7945057d14f0006e351',
      headers: 
       { 'cache-control': 'no-cache',
         'x-apikey': '6511b0c6c35f829dd107dc7a932f9b0148659',
         'content-type': 'application/json' } };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
    });
    res.send('Deleted successfully')
  });
  app.get("/put", function (req, res) {
      var request = require("request");

var options = { method: 'PUT',
  url: 'https://kiradb-4408.restdb.io/rest/kiras/634fc8695057d14f0006e353',
  headers: 
   { 'cache-control': 'no-cache',
     'x-apikey': '6511b0c6c35f829dd107dc7a932f9b0148659',
     'content-type': 'application/json' },
  body:   {
    "product_name": "Versace jacket",
    "price": "80",
    "img_url": "https://wpbingosite.com/wordpress/favita/wp-content/uploads/2018/10/Image-2-720x960.jpg"
  },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
    res.send('Updated')
  });
  app.get("/addcollection", function (req, res) {
    var request = require("request");

    var options = { method: 'GET',
      url: 'https://kiradb-4408.restdb.io/rest/kiras',
      headers: 
       { 'cache-control': 'no-cache',
         'x-apikey': '6511b0c6c35f829dd107dc7a932f9b0148659' } };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
       productArry = body
    });
    console.log(productArry);
    res.render('postStore',{productArry:productArry})
  });
app.post("/addcollection", function (req, res) {
    // console.log();
    var name = req.body.prod_name
    var price = req.body.price
    var image = req.body.img_url
    var request = require("request");

var options = { method: 'POST',
  url: 'https://kiradb-4408.restdb.io/rest/kiras',
  headers: 
   { 'cache-control': 'no-cache',
     'x-apikey': '6511b0c6c35f829dd107dc7a932f9b0148659',
     'content-type': 'application/json' },
  body: {
      product_name : name,
      price : price,
      img_url : image
  },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
res.status(200)
// if(res.status == 200){
//     res.send("Uploaded Product successfully")

// }
  });
  var port = process.env.PORT || 3000;
app.listen(port,function(){
  console.log("server started ");
})