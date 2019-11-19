var fetch = require("node-fetch")
var fs = require('fs')
var albums = {}
var photos = {}

//Extraction dei riferimenti degli album e savataggio su un file json "albums.json"

  fetch('http://jsonplaceholder.typicode.com/albums')
  .then(res => {
    return res.json();})
  .then(data => { 
    albums=data
    fs.writeFileSync('albums.json', JSON.stringify(albums, null, 2));
  }
  )
//Extraction dei riferimenti relativi alle foto dell'album con albumId=1 e savataggio su un file json photos1.json

  fetch('http://jsonplaceholder.typicode.com/albums/1/photos?albumId=1')
  .then(res => {
    return res.json();})
  .then(data => { 
    photos=data
    fs.writeFileSync('photos1.json', JSON.stringify(photos, null, 2)); 
  }
  )



