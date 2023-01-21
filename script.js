console.log('Welcome to vocalify');
//initialize the variables:-
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Let me love you", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Sunny Sunny", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Tum mile Dil khile", filePath: "songs1/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Pathan", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Hawaon ne ye kaha", filePath: "songs1/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Lover", filePath: "songs/7.mp3", coverPath: "covers/6.jpg"},
    {songName: "Ila", filePath: "songs/8.mp3", coverPath: "covers/7.jpg"},
    {songName: "GooseBumb", filePath: "songs/9.mp3", coverPath: "covers/8.jpg"},
    {songName: "Abcd song", filePath: "songs1/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Amplifier", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i) => {
    
    element.getElementsByTagName("img")[0].innerText = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName; 
});

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');   
        gif.style.opacity=0;
        
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle')
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex-=1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle')
})



