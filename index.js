const currentURL = window.location.hostname;
const config = {
  DEBUT : "10:00",
  FIN : "19:30",
  banlist : [
    {
      name : "SNAPCHAT",
      URL : "www.snapchat.com",
    },
    {
      name : "Youtube",
      URL : "www.youtube.com",
    },
    {
      name : "FACEBOOK",
      URL : "www.facebook.com",
    },
    {
      name : "INSTAGRAM",
      URL : "www.instagram.com",
    },
    {
      name : "TIKTOK",
      URL : "www.tiktok.com",
    },
    {
      name : "1V1",
      URL : "www.1v1.lol",
    },
    {
      name : "NETFLIX",
      URL : "www.netflix.com",
    },
    {
      name : "ROBLOX",
      URL : "www.roblox.com",
    },
    {
      name : "DISCORD",
      URL : "www.discord.com",
    },
    {
      name : "SPOTIFY",
      URL : "www.spotify.com",
    },
  ]
}

const Semaine = {
  Lundi : 1, 
  Mardi : 2,
  Mercredi : 3,
  Jeudi : 4,
  Vendredi : 5, 
  Samedi : 6,
  Dimanche : 7
}

// GENERATE CSS / STYLE
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

// GENERATE HTML
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
        <div class='_404'>Ce site est interdit</div>
        <hr>
        <div class='_1'>Retour aux devoirs !</div>
        <div class='_2'>Les études sont supérieur à ${pageName}</div>
    </div>
    `;
    return template;
}

// CUT SOUND
const muteAudio = () => {
    console.log('mute tous les audios...');
    var video = document.getElementsByTagName('video'),
      i, len = video.length;
    for (i = 0; i < len; i++) {
      video[i].muted = true;
    } 
}

// GET Current Time
const getCurrentTime = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const currentTime = hours + ':' + minutes;
    return currentTime;
}

// SETUP ALL
const main = (pageName) => {
    const time = getCurrentTime();
    const date = new Date();
    let day = date.getDay();
    // Jours de surveillance
    const daysofwatch = [Semaine.Mercredi, Semaine.Vendredi];
    if (time < config.DEBUT || time > config.FIN){
        console.log("vous n'est pas dans l'interval du PAAD");
    }
    else{
      daysofwatch.forEach(dow => {
        if(dow == day){
          document.head.innerHTML = generateSTYLES();
          document.body.innerHTML = generateHTML(pageName);
          muteAudio(); 
        }
      })
    }
}

// START PROGRAMME
config.banlist.forEach(ban => {
  if(ban.URL == currentURL){
    main(ban.name)
  }
});