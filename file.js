console.log("Welcome to Softy");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('128-Sanam Teri Kasam - Sanam Teri Kasam 128 Kbps (2).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Sanam teri kasam", filepath: "128-Sanam Teri Kasam - Sanam Teri Kasam 128 Kbps (2).mp3" , coverPath:"sanam-teri-kasam-review.avif"},
    { songName: "Sapanjahan 2014", filepath: "03sapnajahan1-12452.mp3", coverPath:"images.jpg" },
    { songName: "desi kalakar honeysing", filepath: " DaftarKi Girl Desi Kalakaar 128 Kbps.mp3",coverPath:"images.jpeg" },
    { songName: "Dheere Dheere Se meri zindagi ", filepath: "Dheere-Dheere-Se-Meri-Zindagi.mp3", coverPath:"maxresdefault.jpg" }
];

songItems.forEach((Element) =>{
    console.log(Element,i);
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;

});

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
});

// Listen to events
audioElement.addEventListener('timeupdate', () => {
    // Update the seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Handle seekbar change
myProgressBar.addEventListener('input', () => {
    audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
        Element.classList.remmove('fa-play-circle');
        Element.classList.add('fa-pause-circle');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element) => {
    Element.addEventListener('click',(e) => {
        makeAllPlays();
        console.log(e.target);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
    })
});
