# ReacTube
 An alternative React based interface for YouTube.
 
 This web app let's you search and stream youtube videos as well as download them in various qualities.
 
 ### Link:  https://reactubedl.web.app/
 
- Interface made with React.Js and ant design components.
- Uses [Invidious-api](https://github.com/iv-org/invidious) for fetching search and trending results from YouTube.
- Downloads are handled by a Node server.
- The node server uses [yt-dlp](https://github.com/yt-dlp/yt-dlp) as a child process to fetch and send back the file to user.
- Logo designed by [@GameGodS3](https://github.com/GameGodS3)

### Requirements to host backend on heroku
- Node buildpack
- Python buildpack for youtube-dl child process.
- ffmpeg buildpack (youtube-dl uses ffmpeg to combine audio and video during high res video downloads)

## Screenshots
 <img src="https://github.com/AJAYK-01/Reactube/blob/main/screenshots/reactube1.png" height="300" />
 <img src="https://github.com/AJAYK-01/Reactube/blob/main/screenshots/reactube3.png" height="300" />
 <img src="https://github.com/AJAYK-01/Reactube/blob/main/screenshots/reactube2.png" height="300" />

### Contributions are always Welcome!!
