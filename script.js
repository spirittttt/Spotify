var songs = [
    {title:"Another Love",artist:"WYS",album:"1 Am. Study Session",time:"3:15", url:"./songs/another love.mp3"},
    {title:"Arcade",artist:"Less.people",album:"One Day It's Over",time:"2:18",url:"./songs/Arcade.mp3"},
    {title:"Let Me Down Slowly",artist:"Mila Coolness",album:"Silent River",time:"2:39",url:"./songs/let me down slowly.mp3"},
    {title:"Sweater Weather",artist:"Louk, Glimlip",album:"Can We Talk",time:"2:35",url:"./songs/sweater weather.mp3"},
    {title:"Runway",artist:"Bcalm,Banks",album:"Feelings",time:"2:15",url:"./songs/Runway.mp3"},
    {title:"Save Your Tears",artist:"After hours",album:"The Weeked",time:"2:15",url:"./songs/save your tears.mp3"},
    {title:"idfc",artist:"Blackbear",album:"dead",time:"2:15",url:"./songs/idfc.mp3"},
    {title:"Middle Of The Night",artist:"Elleys Duhe`",album:"Middle Of The Night",time:"2:15",url:"./songs/middle of the night.mp3"},
    {title:"Nothing Breaks Like a Heart",artist:"Mark Ronson",album:"Late Night Feelings",time:"2:15",url:"./songs/nothing breaks like a heart.mp3"},
]

var audio = new Audio()
var container = document.querySelector("#container")
var selectedSong = 0
var allsongs = document.querySelector("#container")
var play = document.querySelector("#play")
var forward = document.querySelector("#forward")
var backward = document.querySelector("#backward")

function mainFunction() {
    var clutter = ""
    songs.forEach(function(elem,idx){
    clutter += `<div class="songs" id="${idx}">
                            <div class="title">${elem.title}</div>
                            <div class="artist">${elem.artist}</div>
                            <div class="album">${elem.album}</div>
                            <div class="time">${elem.time}</div>
                        </div>`
})
audio.src = songs[selectedSong].url
allsongs.innerHTML  = clutter

}
mainFunction()


container.addEventListener("click",function(dets){
    selectedSong =dets.target.id
    mainFunction()
    audio.play()
    play.classList.remove("ri-play-circle-line")
    play.classList.add("ri-pause-circle-line")
    playPause = 0
})




var playPause = 1
play.addEventListener("click",function(){
    if(playPause == 1){
        play.classList.remove("ri-play-circle-line")
    play.classList.add("ri-pause-circle-line")
    mainFunction()
    audio.play()
    playPause = 0
    }
    else {
        play.classList.remove("ri-pause-circle-line")
        play.classList.add("ri-play-circle-line")
        mainFunction()
         audio.pause()
        playPause = 1
    }
})



forward.addEventListener("click",function(){
    if(selectedSong < songs.length - 1) {
        play.classList.remove("ri-play-circle-line")
    play.classList.add("ri-pause-circle-line")
    playPause = 0
    selectedSong++
    mainFunction()
    audio.play()
    }
    else {
        forward.style.opacity = 0.4
    }
})

backward.addEventListener("click",function(){
    if(selectedSong > 0) {
        play.classList.remove("ri-play-circle-line")
    play.classList.add("ri-pause-circle-line")
    playPause = 0
    selectedSong--
    mainFunction()
    audio.play()
    }
    else {
        backward.style.opacity = 0.4
    }
})
















































var heart = document.querySelector("#heart")
var flikker = 1
heart.addEventListener("click",function(){
    if(flikker == 1){
        heart.style.color = "lightCoral"
        flikker = 0
    }
    else {
        heart.style.color = "white"
        flikker = 1
    }
})
