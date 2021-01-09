const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const fs = require('fs');
const app = express();

app.use(cors());

app.listen(4000, () => {
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


  res.header('Content-Disposition', 'attachment; filename="'+title+ext+'"');

  if(filter === 'audioonly') {
    const command = 'youtube-dl -o \''+title+'.mp3\' -f bestaudio[ext=m4a]/mp3'+' \''+URL+'\'';
    console.log(command);
    const process = exec(command);
    
    process.on('exit', (code, signal) => {
      fs.createReadStream(title+'.mp3').pipe(res);
      exec('rm \''+title+'.mp3\'');
        
    })
  }
  else {
    const command = 'youtube-dl -o \''+title+'.mp4\' -f '+quality+'[ext=mp4]+bestaudio[ext=m4a]/mp4'+' \''+URL+'\'';
    console.log(command);
    const process = exec(command);
    
    process.on('exit', (code, signal) => {
      fs.createReadStream(title+'.mp4').pipe(res);
      exec('rm \''+title+'.mp4\'');
        
    })
  }
});