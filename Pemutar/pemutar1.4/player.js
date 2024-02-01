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
		name: "No role modelz",
		path: "./music/no role modelz.mp3",
		img: "https://i.scdn.co/image/ab67616d0000b2736aca031ccc27d2e4dd829d14",
		singer: "J. Cole"
	   },
	   {
		name: "Watch this-arizonatears",
		path: "./music/watch this.mp3",
		img: "https://i.scdn.co/image/ab67616d0000b273fd04fb8f2cc2ff93dee4e9d1",
		singer: "Lil Uzi Vert, sped up nightcore, ARIZONATEARS"
	   },
	   {
		name: "To comfortable",
		path: "./music/to comfort.mp3",
		img: "https://i.scdn.co/image/ab67616d0000b273935d8d5369bc55e74a39303e",
		singer: "Future"
	   },
   {
	name: "Father stretch my hands pt.1",
	path: "./music/father strecth.mp3",
	img: "https://i.scdn.co/image/ab67616d00001e02d93bcf515b2eb64dcc25463b",
	singer: "Kanye West"
   },
   {
	name: "Fukumean",
	path: "./music/fukumean.mp3",
	img: "https://i.scdn.co/image/ab67616d0000b273017d5e26552345c4b1575b6c",
	singer: "Gunna"
  },
   {
	name: "Glock in my lap",
	path: "./music/glock in my lap.mp3",
	img: "https://i.scdn.co/image/ab67616d0000b273aa57907bf0cb2ca0c8cc74bc",
	singer: "21 Savage, Metro Boomin"
   },
];


// All functions


// function load the track
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


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
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


// previous song
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


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
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
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }