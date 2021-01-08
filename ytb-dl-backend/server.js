const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
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

  console.log(URL+' '+title+' '+quality);
  res.header('Content-Disposition', 'attachment; filename="'+title+ext+'"');

  if(filter === 'audioonly') {
    ytdl(URL, {
      format: 'mp3',
      filter: 'audioonly'
      }).pipe(res);
  }
  else {
    ytdl(URL, {
        filter: format => format.container === 'mp4' && format.itag === quality
        }).pipe(res);
  }
});
