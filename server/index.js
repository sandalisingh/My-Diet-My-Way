//----------------------- I M P O R T S -----------------------
const express = require("express");
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const DB = require('./DATABASE/DB');
var cors = require('cors');

var app = module.exports = express();

//----------------------- ----------------------- -----------------------
app.use(cors());
app.engine('.html', require('ejs').__express);      //Register ejs as .html. If we did not call this, we would need to name our views foo.ejs instead of foo.html. The __express method is simply a function that engines use to hook into the Express view system by default, so if we want to change "foo.ejs" to "foo.html" we simply pass _any_ function, in this case `ejs.__express`.
app.set('views', path.join(__dirname, "client", "public"))   // since express defaults to CWD/views
app.use(express.static(path.join(__dirname, 'front', 'src')));  // Path to our public directory
app.set('view engine', 'html')  // Without this you would need to supply the extension to res.render() ex: res.render('users.html').
app.use( bodyParser.urlencoded({ extended : true }) );
app.use(bodyParser.json());

//----------------------- ----------------------- -----------------------

app.get("/", (req, res) => {
  // console.log("Haan bol");
  res.json("Working")
} );

//---------------------------------------- B L O G S-----------------------------------------------

app.get("/blogs", (req, res) => DB.BLOGS_DB.getBlogsList().then( (result) => res.json(result)) );

app.post("/addblog", (req, res) => DB.BLOGS_DB.addBlog( { Title: req.body.BlogTitle , Image: req.body.BlogImage, Content: req.body.BlogContent } ).then( () => res.redirect('/blogs')) );

app.get('/blogs/deletion', (req, res) => DB.BLOGS_DB.deleteBlog( req.query.delID ).then( () => res.redirect('/blogs')) );

//---------------------------------------- U S E R-----------------------------------------------

app.get("/users", (req, res) => DB.USERS_DB.getUsersList().then( (result) => res.json(result)) );

app.get("/login", (req, res) => DB.USERS_DB.loginUser().then( (result) => {
    console.log("\n\n/loginUser\n\n");
    let FinalData = { 
        isSuccessfullyLoggedIn : false,
        LoggedInUser : null,
        isError : false,
        ErrorMessage : null,
        isDietitian: false
    };

    //----------- CHECK LOG IN
    if( result === true ) {
      FinalData.isSuccessfullyLoggedIn = true;
      FinalData.LoggedInUser = req.Username;

      //------------------ CHECK DIETITIAN LOG IN
      if( DB.USERS_DB.LoggedInAsDietitian(req)) {
        console.log("\n\nDIETITIAN\n\n");
        FinalData.isDietitian = true;
      } 

    } 
    
    //----------- NOT LOGGED IN
    else {
      console.log("\n\nNOT LOGGED IN\n\n")
      FinalData.isError = true;
      FinalData.ErrorMessage = "ERROR!";
    }
    
    res.json(FinalData);
  }
));

//---------------------------------------- P O R T -----------------------------------------------

// And add a port the will expose the API when 
// the server is running. Here, we expose it to port 3001.

app.listen('3001',() => console.log('API is running on http://localhost:3001/'));






