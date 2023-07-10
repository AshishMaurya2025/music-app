
let song = document.getElementById("music");
let image = document.getElementById("image");
let play = document.getElementById("play");
let progress = document.getElementById("progress");
let progressBar = document.querySelector(".progressBar");
let title = document.getElementById("title");

let prve = document.getElementById("prve");
let next = document.getElementById("next");


 const songs = [
      
      {
          name:"music-01",
          image:"img-1",
          song:"music-1"
      },
      {
          name:"music-02",
          image:"img-2",
          song:"music-2"
      },
      {
          name:"music-03",
          image:"img-3",
          song:"music-3"
      },
      {
          name:"music-04",
          image:"img-4",
          song:"music-4"
      },
      {
          name:"music-05",
          image:"img-5",
          song:"music-5",
      },

 ]

let isPlaySong = false;

play.addEventListener("click",function(){
     if(isPlaySong){
        pauseSong()
     }else{
        playSong()
     }
})


const playSong = () =>{
    isPlaySong = true;
     song.play()
     play.classList.replace('fa-play','fa-pause')
     image.classList.add('animate')
    
    
}
const pauseSong = () =>{
    isPlaySong = false;
     song.pause()
     play.classList.replace('fa-pause','fa-play');
     image.classList.remove('animate')

     
}

song.addEventListener("timeupdate",function(e){
    let currentTime = e.target.currentTime;
    let duration = e.target.duration;
    let currentTimeWidth = (currentTime / duration)*100;
    progress.style.width = `${currentTimeWidth}%` ;  
    
    
     let currentTimes = document.querySelector(".currentTime")
     let currentDuration = document.querySelector(".duration")
     song.addEventListener("loadeddata",function(){
         let currentDurationval = song.duration
         let timeMin = Math.floor(currentDurationval / 60); 
         let timeSec = Math.floor(currentDurationval % 60);
         if(timeSec < 10){
            timeSec = `0${timeSec}`
         }
         currentDuration.innerText = `${timeMin}:${timeSec}`;
     })
    //  let currentTimeval = song.currentTime
     let timeMin = Math.floor(currentTime / 60); 
     let timeSec = Math.floor(currentTime % 60);
     if(timeSec < 10){
        timeSec = `0${timeSec}`
     }
     currentTimes.innerText = `${timeMin}:${timeSec}`;
});

progressBar.addEventListener("click",function(e){
     let progressBarVal = progressBar.clientWidth;
     let clicked = e.offsetX;
     let songDuration = song.duration;
     song.currentTime = (clicked / progressBarVal) * songDuration;
     song.play()

})

 let songIndex = 0
 const loadSong = (songs) =>{
 title.textContent = songs.name;
 image.src = "img/" + songs.image +".jpg";
 song.src = "music/" + songs.song + ".mp3";
      
 }



 
 const nextSong = () =>{
     songIndex = (songIndex + 1)% songs.length;
     loadSong(songs[songIndex]);
     song.play()
}
 const prveSong = () =>{
     songIndex = (songIndex - 1 + songs.length)% songs.length;
     loadSong(songs[songIndex]);
     song.play()

}

prve.addEventListener("click", prveSong);
next.addEventListener("click", nextSong);