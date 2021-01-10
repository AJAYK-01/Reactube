const express = require('express');
const path = require('path');
const cors = require('cors');
const { exec } = require('child_process');
const contentDisposition = require('content-disposition');
const fs = require('fs');
const app = express();

app.use(cors());

const publicPath = path.join('.', 'build');
const port = process.env.PORT || 4000;

app.use(express.static(publicPath));

// const prcs = exec('pip install --upgrade youtube-dl');

app.get('/', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server Works !!! At port 4000');
});
app.get('/download', (req,res) => {
  let URL = req.query.url;
  let title = req.query.title;
  let quality = parseInt(req.query.qty);
  var ext = '.mp4';
  var filter = 'audioandvideo';
  
  if(!quality) {
    ext = '.mp3';
    filter = 'audioonly'
  }

  res.header('Content-Disposition', contentDisposition(title)+ext+'"');

  title = URL.split('/').slice(-1);

  if(filter === 'audioonly') {
    const command = 'youtube-dl -o \''+'./cache/'+title+'.mp3\' -f \'bestaudio[ext=m4a]/mp3\''+' \''+URL+'\'';
    console.log(command);
    const process = exec(command);
    
    process.on('exit', (code, signal) => {
      fs.createReadStream('./cache/'+title+'.mp3').pipe(res);
      exec('rm \''+'./cache/'+title+'.mp3\'');
    })
    process.on('error', (code, signal) => {
      exec('rm -rf ./cache/');
    })
  }
  else {
    const command = 'youtube-dl -o \''+'./cache/'+title+'.mp4\' -f '+quality+'\'[ext=mp4]+bestaudio[ext=m4a]/mp4\''+' \''+URL+'\'';
    console.log(command);
    const process = exec(command);
    
    process.on('exit', (code, signal) => {
      fs.createReadStream('./cache/'+title+'.mp4').pipe(res);
      exec('rm \''+'./cache/'+title+'.mp4\'');
    })
    process.on('error', (code, signal) => {
      exec('rm -rf ./cache/');
    })
  }
});
