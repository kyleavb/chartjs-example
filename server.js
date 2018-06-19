var express = require('express');
require('dotenv').config()
var db = require('./models');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 1000;

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
    console.log('GET - /');
    db.poll.aggregate('survey', 'DISTINCT', {plain: false}).then(function(data){
        console.log(data);
        res.render('index', {surveys: data});
    })
});

app.post('/', function(req, res){
    console.log('POST - /');
    db.poll.create({
        name: req.body.name,
        answer: req.body.answer,
        survey: req.body.survey
    }).then(function(data){
        res.redirect('/');
    })
})

app.get('/new', function(req, res){
    console.log('GET - /new');
    res.render('new');
});

app.get('/detail/:id', function(req, res){
    db.poll.findAll({
        where:{ survey: req.params.id}
    }).then(function(data){
        res.render('show', {data: data});
    })
})

app.listen(port, function(){
    console.log('Running on Port: ' + port);
})