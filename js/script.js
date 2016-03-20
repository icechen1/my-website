/* $(document).ready(function() {
//PHOTO SLIDESHOW
_500px.init({
    sdk_key: '7c2b5b1e3f4206225e41a2e4b44a5c6f0e305044'
});
}); */
Vue.transition('slide', {
  enterClass: 'slideInDown',
  leaveClass: 'slideOutUp'
})

new Vue({
  el: '#dynamic',
  ready: function () {
    var that = this;
    window.addEventListener('scroll', function () {
      scrollObject = {
        x: window.pageXOffset,
        y: window.pageYOffset
      };
      that.hasScrolled = scrollObject.y > 400;
    });
  },
  methods: {
    fullIconPath: function(icon) {
      return '/img/' + icon;
    }
  },
  data: {
    hasScrolled: false,
        
    initiatives:[{
        name: "Tech Retreat",
        description: "I co-founded and helped organize a hackathon and learnathon for 160 high school students in Southern Ontario, Canada.",
        icon:"tr-icon.jpg",
        url:{
            name:"Website",
            url: "http://techretreat.ca/"}
    }, {
        name: "TerribleHack",
        description: "I co-founded TerribleHack, a comedy hackathon every term at the University centered around making useless hacks. Now in its 3rd iteration.",
        icon:"th-icon.jpg",
        url:{
            name:"Website",
            url: "http://terriblehack.website/"}
    },],
    
    projects: [{
        name: "Rewind",
        description: "Rewind allows you to passively record your surroundings. This app continuously runs in the background and records everything your phone hears, allowing you to save recent recording when you hear something you would like to keep. ",
        url:{
            name:"Play",
            url: "https://play.google.com/store/apps/details?id=icechen1.com.blackbox&hl=en"},
        source_url: null,
        type: "android",
        tech: "Android",
        date:"February 2016"
    },{
        name: "l33t hax0r",
        description: "l33t hax0r is a multiplayer cooperative hacking simulator game.",
        url:{
            name:"Play",
            url: "http://playl33t.com/"},
        source_url: null,
        type: "web",
        tech: "Web",
        date:"February 2016"
    },{
        name: "TechTanks",
        description: "TechTanks is a programming game where you get to code your own tank and fight others! It's a great way to get started with programming and learn Ruby.",
        url:{
            name:"Play",
            url: "http://techtanks.techretreat.ca/"},
        source_url: null,
        type: "web",
        tech: "Ruby on Rails",
        date:"August 2015"
    }, {
        name: "Notable",
        description: "Notable allows you to create notification reminders on the go.",
        type: "android",
        date: "2013",
        tech: "Android",
        url:{
            name:"Play Store",
            url: "https://play.google.com/store/apps/details?id=com.icechen1.notable"}
    },{
        name: "SleepyTime",
        description: "SleepyTime is an app designed to help you wake up in-between sleep cycles and allows you to start the day with a clear mind. Android app on Google Play Inspired by sleepyti.me.",
        type: "android",
        date: "2013",
        tech: "Android",
        url:{
            name:"Play Store",
            url: "https://play.google.com/store/apps/details?id=com.icechen1.sleepytime"}
    }, {
        name: "SpeechJammer",
        description: "SpeechJammer inhibits speech on the user, thanks to the Delayed Auditory Feedback effect.",
        type: "android",
        tech: "Android",
        date: "2013",
        url:{
            name:"Play Store",
            url: "https://play.google.com/store/apps/details?id=com.icechen1.speechjammer"}
    }],
    
    experiments:[{
        name: "The Sound of Giving",
        description: "Listen to Kiva microloans in real time",
        url:{
            name:"Webapp",
            url: "/soundofgiving/"},
        source_url: null,
        type: "web",
        tech: "Web",
        date:"March 2016"
    }, {
        name: "BeerNow",
        description: "Find the cheapest beer in Ontario",
        url:{
            name:"Webapp",
            url: "http://beernow.ca/"},
        source_url: null,
        type: "web",
        tech: "Ruby on Rails",
        date:"July 2015"
    }, {
        name: "Ideagen",
        description: "Generate ideas like they do at Apple!",
        url:{
            name:"Webapp",
            url: "/ideagen"},
        source_url: null,
        type: "web",
        tech: "Vue.js",
        date:"February 2016"
    }, {
        name: "Roomi",
        description: "Roomi is a communication hub app for roomates built in 20 hours at UW EngHack W15. Won 2nd place at EngHack W15.",
        url:{
            name:"Webapp",
            url: "https://roomi.meteor.com/"},
        source_url: null,
        type: "web",
        tech: "Meteor",
        date:"March 2015"
    }, {
        name: "CommuniVoice",
        description: "A community issue reporting tool for Android. Won the Yelp best Community hack prize at HackIllinois 2015.",
        url:{
            name:"Webapp",
            url: "http://communivoice.azurewebsites.net/"},
        source_url: null,
        type: "android",
        tech: "Android",
        date:"March 2015"
    }, {
        name: "SpeedRun",
        description: "Won 2nd place software hack at UofTHacks for the SpeedRun Android/Pebble fitness game ",
        url:{
            name:"Landing Page",
            url: "http://yuchenhou.com/speedrun/"},
        source_url: null,
        type: "android",
        tech: "Android",
        date:"January 2015"
    }, {
        name: "Unsentletters",
        description: "A little website to display random letters from reddit.com/r/unsentletters.",
        url:{
            name:"Webapp",
            url: "http://Unsentletters.herokuapp.com/"},
        type: "web",
        tech: "Python Flask",
        date: "October 2014"
    }]
  }
});