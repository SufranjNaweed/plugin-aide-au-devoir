// Definir la plage horaire ici :)

const DEBUT = "18:00";
const FIN = "19:30";

const generateSTYLES = () => {
    return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
    body {
      background: #33cc99;
      color: #fff;
      font-family: "Open Sans", sans-serif;
      max-height: 700px;
      overflow: hidden;
    }
    .c {
      text-align: center;
      display: block;
      position: relative;
      width: 80%;
      margin: 100px auto;
    }
    ._404 {
      font-size: 48px;
      position: relative;
      display: inline-block;
      z-index: 2;
      height: 250px;
      letter-spacing: 15px;
    }
    ._1 {
      text-align: center;
      display: block;
      position: relative;
      letter-spacing: 12px;
      font-size: 4em;
      line-height: 80%;
      margin-bottom : 2em;
    }
    ._2 {
      text-align: center;
      display: block;
      position: relative;
      font-size: 28px;
      margin-bottom : 2em;
    }
    .text {
      font-size: 70px;
      text-align: center;
      position: relative;
      display: inline-block;
      margin: 19px 0px 0px 0px;
      /* top: 256.301px; */
      z-index: 3;
      width: 100%;
      line-height: 1.2em;
      display: inline-block;
    }
    
   
    .right {
      float: right;
      width: 60%;
    }
    
    hr {
      padding: 0;
      border: none;
      border-top: 5px solid #fff;
      color: #fff;
      text-align: center;
      margin: 0px auto;
      width: 420px;
      height: 10px;
      z-index: -10;
      margin-bottom : 2em;
    }
    
    hr:after {
      display: inline-block;
      position: relative;
      top: -0.75em;
      font-size: 2em;
      padding: 0 0.2em;
      background: #33cc99;
      
    }
    
    .cloud {
      width: 350px;
      height: 120px;
    
      background: #fff;
      background: linear-gradient(top, #fff 100%);
      background: -webkit-linear-gradient(top, #fff 100%);
      background: -moz-linear-gradient(top, #fff 100%);
      background: -ms-linear-gradient(top, #fff 100%);
      background: -o-linear-gradient(top, #fff 100%);
    
      border-radius: 100px;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
    
      position: absolute;
      margin: 120px auto 20px;
      z-index: -1;
      transition: ease 1s;
    }
    
    .cloud:after,
    .cloud:before {
      content: "";
      position: absolute;
      background: #fff;
      z-index: -1;
    }
    
    .cloud:after {
      width: 100px;
      height: 100px;
      top: -50px;
      left: 50px;
    
      border-radius: 100px;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
    }
    
    .cloud:before {
      width: 180px;
      height: 180px;
      top: -90px;
      right: 50px;
    
      border-radius: 200px;
      -webkit-border-radius: 200px;
      -moz-border-radius: 200px;
    }
    
    .x1 {
      top: -50px;
      left: 100px;
      -webkit-transform: scale(0.3);
      -moz-transform: scale(0.3);
      transform: scale(0.3);
      opacity: 0.9;
      -webkit-animation: moveclouds 15s linear inFINite;
      -moz-animation: moveclouds 15s linear inFINite;
      -o-animation: moveclouds 15s linear inFINite;
    }
    
    .x1_5 {
      top: -80px;
      left: 250px;
      -webkit-transform: scale(0.3);
      -moz-transform: scale(0.3);
      transform: scale(0.3);
      -webkit-animation: moveclouds 17s linear inFINite;
      -moz-animation: moveclouds 17s linear inFINite;
      -o-animation: moveclouds 17s linear inFINite;
    }
    
    .x2 {
      left: 250px;
      top: 30px;
      -webkit-transform: scale(0.6);
      -moz-transform: scale(0.6);
      transform: scale(0.6);
      opacity: 0.6;
      -webkit-animation: moveclouds 25s linear inFINite;
      -moz-animation: moveclouds 25s linear inFINite;
      -o-animation: moveclouds 25s linear inFINite;
    }
    
    .x3 {
      left: 250px;
      bottom: -70px;
    
      -webkit-transform: scale(0.6);
      -moz-transform: scale(0.6);
      transform: scale(0.6);
      opacity: 0.8;
    
      -webkit-animation: moveclouds 25s linear inFINite;
      -moz-animation: moveclouds 25s linear inFINite;
      -o-animation: moveclouds 25s linear inFINite;
    }
    
    .x4 {
      left: 470px;
      botttom: 20px;
    
      -webkit-transform: scale(0.75);
      -moz-transform: scale(0.75);
      transform: scale(0.75);
      opacity: 0.75;
    
      -webkit-animation: moveclouds 18s linear inFINite;
      -moz-animation: moveclouds 18s linear inFINite;
      -o-animation: moveclouds 18s linear inFINite;
    }
    
    .x5 {
      left: 200px;
      top: 300px;
    
      -webkit-transform: scale(0.5);
      -moz-transform: scale(0.5);
      transform: scale(0.5);
      opacity: 0.8;
    
      -webkit-animation: moveclouds 20s linear inFINite;
      -moz-animation: moveclouds 20s linear inFINite;
      -o-animation: moveclouds 20s linear inFINite;
    }
    
    @-webkit-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
    @-moz-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
    @-o-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
     </style>`;
}

const generateHTML = (pageName) => {
    const template = `
    <div id="clouds">
        <div class="cloud x1"></div>
        <div class="cloud x1_5"></div>
        <div class="cloud x2"></div>
        <div class="cloud x3"></div>
        <div class="cloud x4"></div>
        <div class="cloud x5"></div>
    </div>
    <div class='c'>
        <div class='_404'>Ce site est interdit pendant l'aide aux devoirs</div>
        <hr>
        <div class='_1'>Retour aux devoirs !</div>
        <div class='_2'>Les études sont supérieur à ${pageName}</div>
    </div>
    `;
    return template;
}

const muteAudio = () => {
    console.log('mute tous les audios...');
    var video = document.getElementsByTagName('video'),
      i, len = video.length;
    for (i = 0; i < len; i++) {
      video[i].muted = true;
    } 
}

const getCurrentTime = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const currentTime = hours + ':' + minutes;
    console.log("🚀 ~ file: index.js:273 ~ setIntervalTime ~ currentTime:", currentTime);
    return currentTime;
}

const main = (pageName) => {
    const time = getCurrentTime();
    if (time < DEBUT || time > FIN){
        console.log("vous n'est pas dans l'interval du PAAD");
    }
    else{
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML(pageName);
        muteAudio(); 
    }
}
  
switch(window.location.hostname){
    case "www.youtube.com":
        main("YOUTUBE");
    break;
    case "www.facebook.com":
        main("FACEBOOK");
    break;
    case "www.instagram.com":
        main("INSTAGRAM");
        break;
    case "www.tiktok.com":
        main("TIKTOK");
        break;
    case "www.1v1.lol":
        main("1V1");
    break;
    case "www.netflix.com":
        main("NETFLIX");
    break;
    case "www.roblox.com":
        main("ROBLOX");
    break;
    case "discord.com":
        main("DISCORD");
    break;
    case "www.spotify.com":
        main("SPOTIFY")
    break;
}