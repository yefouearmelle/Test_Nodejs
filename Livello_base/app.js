var fetch = require("node-fetch");
var fs = require('fs');
var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');

var port = 8080;
connect().use(serveStatic(__dirname)).listen(port, function(){
    console.log('Server running on 8080...');
});

var albums = {}
var photos = {}
var Users = {}


//Extraction dei riferimenti degli album e savataggio su un file json "albums.json"

  fetch('https://jsonplaceholder.typicode.com/albums')
  .then(res => {
    return res.json();})
  .then(data => { 
    albums=data
    fs.writeFileSync('Albums.json', JSON.stringify(albums, null, 2));
  }
  )
//Extraction dei riferimenti relativi alle foto dell'album con albumId=1 e savataggio su un file json photos1.json

  fetch('http://jsonplaceholder.typicode.com/albums/1/photos?albumId=3')
  .then(res => {
    return res.json();})
  .then(data => { 
    photos=data
    fs.writeFileSync('photos3.json', JSON.stringify(photos, null, 2)); 
  }
  )



