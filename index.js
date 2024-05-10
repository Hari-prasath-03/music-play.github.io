const progress = document.getElementById('progress');
const song = document.getElementById('song');
const ctrIcon = document.getElementById('ctrlIcon');

song.onloadedmetadata = ()=>{
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrIcon.classList.contains('fa-pause')) {
        song.pause();
        ctrIcon.classList.remove('fa-pause');
        ctrIcon.classList.add('fa-play');

    }else {
        song.play();
        ctrIcon.classList.add('fa-pause');
        ctrIcon.classList.remove('fa-play');
    }
}

if(song.play()) {
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = ()=>{
    song.play();
    song.currentTime = progress.value;
    ctrIcon.classList.add('fa-pause');
    ctrIcon.classList.remove('fa-play');
}