const express = require('express');
const exphbs = require('express-handlebars');
const connectDb = require('./config/db');
const bodyPhaser = require('body-parser');
const methodOverride = require("method-override");

const posts = require('./routers/posts');

const app = express();

app.engine("handlebars" , exphbs());
app.set("view engine" , 'handlebars');

app.use(bodyPhaser.urlencoded({ extended : false}));
app.use(bodyPhaser.json());

app.use(methodOverride('_method'));
app.use(express.json());

app.use('/posts' , posts);

connectDb();
app.get("/" , (req , res) => res.render("index"))
app.get("/about" , (req , res) => res.render("about"))

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => console.log("server khoi dong 123"));

// 