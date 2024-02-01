let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
	{
		name: "One of the girls (with JENNIE, Lily Rose Depp)",
		path: "./music/one of the girls.mp3",
		img: "https://i.scdn.co/image/ab67616d0000b273b0dd6a5cd1dec96c4119c262",
		singer: "The Weeknd, JENNIE, Lily-Rose Depp"
	   },
   {
	name: "Sure thhing - Speed up",
	path: "./music/sure thing.mp3",
	img: "https://i.scdn.co/image/ab67616d0000b273f2a39a7b2f9b4eb6256d3787",
	singer: "Miguel"
   },
   {
	name: "Popular(with playboy carti &  madonna)",
	path: "./music/popular.mp3",
	img: "https://upload.wikimedia.org/wikipedia/en/f/fb/Popular_-_The_Weeknd%2C_Playboi_Carti_%26_Madonna.jpg",
	singer: "The Weeknd,Playboy Carti,Madonna"
  },
   {
	name: "Save yours tears",
	path: "./music/save your tears.mp3",
	img: "https://i.scdn.co/image/ab67616d00001e02b5097b81179824803664aaaf",
	singer: "The Weeknd"
   },
   {
	name: "I was never there",
	path: "./music/i was never there.mp3",
	img: "https://i.scdn.co/image/ab67616d0000b2731f6a2a40bb692936879db730",
	singer: "The Weeknd"
   },
   {
	name: "Reminder",
	path: "./music/reminder.mp3",
	img: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452",
	singer: "The Weeknd"
   },
];



function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


 function reset_slider(){
 	slider.value = 0;
 }


function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}


function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}



function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}



function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}



function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}


function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#148F77";
	}
}


function range_slider(){
	let position = 0;
        
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }