let previous = document.querySelector('#pre');
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
	 name: "Save yours tears",
	 path: "./music/save your tears.mp3",
	 img: "https://lh3.googleusercontent.com/pw/ABLVV87jmLEnldikYJsFtx9rk1H1ZQmOHsEDaup3fKZ8flWAZVzQFSSVRg4sMg87sf0lUzteN3zdPul9Nu2_AMyx6vzmYvp28LET5_xpKbGmNX2lSL2OYdLSGeer7AadRNrUjdPPmELduF_sBE5agTQVAqPidIGdqk2Rw4Pvjd875BVjwI4V4w9jHHYEcE4qS_YGp8KiP3C2arn25EQ3ZQhIXBTbU1Fl5B8i1KErIHBqhiCzrWdezIeBX2IqXcRr0zwCbc3qcwUQA-VOyGXKHEYYsvCLn5sLhuy5_HIa93uBYscZQgtiektipIw1foFdQlEnFK9CUbYs0e363j7Pklcrp52Gjtsxc7QFKgRUCB77kwRIaUk2rdgdnF_O9sTW_6NdCGz-JdxWEzUuAU00FEwLjVs_94wtG0MECzWLlw948F5TPvpcl9vqPUds6KU57FFDkWyDOHoBgZ-eHpX1B2bMH1KuHf40ySJckm55Z911veMkShuAdeTkp8_uP6F9CoYyVhqp7K2X25ef_GFtRGRKn_3PJn9757WeNYn51yIH6Pz9YkmLlvyhhuoMJONdMnSormGOFfn8QXJan3xmDHw2PBkC3gQmNvjP4qO_CB9rCjzgNqj5X5aocIjqI0atl-OR2FXWsoFdOMm8WoBNI_EK8mknQzYnCMGNuWd0aU_rbLcF0Rapb0p7ElflkhW88eh9UEgyTt2jOZoD1tBYhP9vvHdpBGxk386eACuXSn4Yt0qPhA_Q5E6B6VJK0noVccacDCHzYspk5HEPmgvhbNlu2Z-fxz77B7Xt2UBlpAq-8c_ZLBaUvQPVYx9J7iSnMcdUAhf0xxwIoY9ucsmZDxtiSYnMICIY2CnYnLj-xOovclHD33gCgThHPIUDsDTWUv5CW4NlUZdDSqEg8AYY2_MLgrmtbMzxPEp7Y2ESL5k8We9EH-7I2aJI83xJhSFkm18y2R53FD8FRwNR8xuBhCjP0ZRXhfyVtQAuHl_JPBE3LSMNTohZzGHU5M5EvJlXQHzQT3kKvyTPNIFXf1bX9CgwozNqc7SzUpfIo0lVaq-8EBKpHwAJDkpI2fecWi3brKb2TN7pdmMMuvs=w640-h640-s-no-gm?authuser=5",
	 singer: "The Weeknd"
	},
	{
	 name: "I was never there",
	 path: "./music/i was never there.mp3",
	 img: "https://lh3.googleusercontent.com/pw/ABLVV84hUW3VA_Eu85VUaGUAvVLHf2qEEIBKUJWnGk6dDQVs-WREwGMMHZJWOP900WEziSOXxFUGL0vpQM1TYckOCA4K0s9u9Xs_SGii6lmE1hDfh_2tuhwsWjOxImAxfmJ0MDCm36C9yRieBpP0y1cTyTtwBxoS67ao2VCTFd3ApFhTdSRf9e10z5IqDO46tmfm5ox6X_18_dNUFT5mhuVEKV9XMgF5qHo-6Z4DL-8_l-kepQKRgO3jacthwWGqjbmEoyBt1mZVo1x-uDK7gKZSrpZPDTGzJJ27Y-aBQxmWhTEKH0Fzpo1Avw9TumfX8DByE7ar_QhVfi45EGgAyind-PmBn6F7GvAhkL3V81tqbKAxmKsLsxwnjX7rwK-hJqw_jBnaggfxFBcKWC4wyHRe9S2h36pjADMPSDiyO_UeAipqvcqtaADgVHktSECPeqhvttOMJ3w7T76U22LZAUFoR_ZmFj1r0kSLOhUKNXfzHBv7-D2ho0QY4NAyGWzjW_-WpdbTImHu44_R6KEgQOkbi8qhyqriiDbSpU0X_GmQq4R83ZHjj6LXrlEahL328ghP2Fawce-v-5qCdr8Z4jislnq5Gbt-tc9aJVTzf-34JWitY3bK3qlhS0ACjWWxHNbyBHI8cZy0ijzS1TjuKX_kP13nSLBTELsKrpt01ihtrO1ksgoPKDEWpaVd8JpQwHrZggUUcNHcaTYvoMZWDL1FVoOwdutNbbTLduHA1BrrlFCXXIzQRsnlAkMv0p2LUnsvOtijlu8e_8VgdG1JFei0YA0pD6mkbhWX6q5KjJoUWAel3eEg9h6EWk_lyZDEgZL9EcagN_I1VtKTek8ywUDHu1zUmnBfxaDb3X28wFbNA11_TYi4wgmBlQls3n74r3WdoyYqOgPY_P-SwMiGw5S1sWXGcsJQ173AMs2To9ubEX6deUbHTuGfZoKgR6qgv90rPvOG2qTSiymAl13xjFQHQtlo4TFr7OxVWwwXjKoqj2zWjNfhvYfKmwknLQH6t81cIKnHifmvwsptM-HtG2OmLWMCB7-t62LuLn5QLiJnaS8oWZzdKuPv7uVWr5u3ic9DDtE_qLeI5g=w640-h640-s-no-gm?authuser=5",
	 singer: "The Weeknd"
	},
	{
	 name: "Reminder",
	 path: "./music/reminder.mp3",
	 img: "https://lh3.googleusercontent.com/pw/ABLVV854n9KNxqum5XkNgUjDDfHiIoUwAB_wVcYxUbYQY-MnwEjseQCeQ543gfHF0u-Xvf3RYq1LT6MDI1B9mRG14LiT0-Knc9tOS1I6vtAChckA-PfSOfXhzF-h5tK3AvHvPyGmOb9YYtjPzT_Srg7gU541aiCP-m7x5nCm9yUe9zQoE1DlFTMTXRYzJreQt7YYSFWbeNg6VZ8-S7Kif8i3kAFwvOPd2NVOHiDFsmtUkQ5JQXV5Jot4_naO_cnnQvn6im4Q9ZcFoVXnL5xsxgakOwgo0BoiLgmXtdvekO2uEYz0kgOjarcRG32mFxUZ5MzgZ_KVNkQ3Ig79p4uEZJJJTMseYu-v6yJm_rn5se4bVjmJ1nye_7oi9xs-XSbeH_ta6fjzOWn4PgvXwmgg5FMNXgRGcmKrYir3Wqo07ioxdQ7MGC5UJ7ZShg4QALZO1o4NM10mmlocllLWjOl8Dv1ftQW0PsROcilC2LxoK8k0wdWjdXistCZeEsx-fTHJSOCKEhaPf79zUh56xaHggyIMAwkEBifw5t4xPbDHZ6LOkSixSjP8lh7nOsTtYAHecxtKjGqcGyfrRWbs213L97f_ypvIJ1GikkexuU_otbycM8KH7TM35uRhZDjTEhKCXZ9-_je5xlRNI-NzB5ll1j7C6RvfuAXoxG6IcITxvCCQ_asGrQNAYDLeuUWUyp6kcBzdwEdasLkM3g7p5f5pvUkze0aGWPaXqNu-X4ZJU_Lgo-jxJ6XrOARiD7wUcVLwHDWcKAiHmE-0s01Ny9U-4SOlkYCfcPkzyVglQDj4PEBWiwSaUiwjj6q4deTSOqgC_-4iXqVtFlhtnzStA62H2ZXUl6k6jyphpEyVo-xqoI-MHtdfhhJwBHIZDMrvfiCNIVP3zxM94Zy36bo5Vo3cIGtg8Up72URrkAChvzrOK3jsXCFjURmN1f8mO8ETqj3SpU9MGjAofHg9DEGP4PJkyfkVkcFKv-ROY9-GDJ9J8atTUfHIr1GWMPq7ckZ3G8TL4C5XH7LnW6L_jPDun2900ctGPwJO813nUYOGnmOrrcXRzQE5jm-TDpaMzs0M5IpvtrGQCLy5Pawypfc=w300-h300-s-no-gm?authuser=5",
	 singer: "The Weeknd"
	},
	{
	 name: "One of the girls (with JENNIE, Lily Rose Depp)",
	 path: "./music/one of the girls.mp3",
	 img: "https://lh3.googleusercontent.com/pw/ABLVV87WKzsbBFxWKQ88uxRSscGWGTtmUDpBVR1_0A6qUbJlfAVAzul95GA5ZWzCLYOa_kViHzXLYMExfVlPtgir-BY0ZN3POHfkdLO7QbMvkc6SESdfnLTDAiklidofI1EDI-xQgvTSXNgj6Rx_7WNooylY3-fIlFydL2oLd0nMFCFgJbioDAhTV1-wOVe2F5YF0VQHUqaCjo8JtsLmkaN_6uu4slHIAR4JnhiHKRJSMieepH8Xils1D13hnQ6aOq5I6VfI5VLp5bBHTODx8INQqCSwiAFy22Wi8dNOXXxarlm0_a7Pu9i2eO4LKa64gLZBmyb6j81z9UFlyF_CO2Zzs4ROlbe78Rz_IEqPus1FpQHVF4x-WJ1mHOFQzQB-IvAfM-2jVyegIhQtx4dIl80fmX5X7FxJZHr_5Wa2yYrXoOj69_lvp_iMd5TMg0dR4axcLHC0C0MbFriZ4iu8wis1uF6yI610mNOiv0E9zzLXieGZe9So6OrEdpenv-DhiKqoDzw2HqPEW2Y1xc66f_9W4v4ZlN5Vcts6-qdoY7ghbM0PdAErDJMkqHfrEicRRVhKOcfwf3jFhz9vLrTZbFua5fd5ObpdSBG9MMAa7BXxJVdF1-DoBG_QMl03_bkE63-1zxu_y3LS8lY83kvGHSt7bUypXDRjHIynQLpAWMMgiHJHiehfbCNG2MU_R0-zBnyupTQMOZH00qdocpkSpmswYGJidDmMMqb8KQl6Beb54jowOjkznjOhsGJY0PndlLrzSE-o5O1rhqwQS7EvZszvMRGCfZQLakFBUfhQUn-BB1MlR67-Yog5QRYrFoSZhRortc6ZF0UxJvoN8hO7wPQcJTVyQe5_yF06lEa1R_Zw-yuKgPIrxvY7WBie5O2nstRmYFQa3M9GHLV8lKEsEZlsT5G34dCxIdA5i26Xv_HaUosvIyQy_R8_PPXsnrlM47YKhkmT5IIqWNEroCpYxIX_HKYuohnFDQeQEhKUiBW-6dKIaJmrpGFKTeJzt4RUBJft7CI4w23ICIiirJ-utev4fzX2dYZ5TfoV3d2fwA6_RN5MGYw8zc5XInBTPHxoxWb5tgFnaQxDKqw=w640-h640-s-no-gm?authuser=5",
	 singer: "The Weeknd, JENNIE, Lily-Rose Depp"
	},
	{
	 name: "Sure thhing - Speed up",
	 path: "./music/sure thing.mp3",
	 img: "https://lh3.googleusercontent.com/pw/ABLVV87vN1Dr7e-DH7iOLyvOH1P6Sn6AFzQ8reSH3b5QJGqK2BOX-SzSEyjlAotPvkqkCpGrQ_TctoaKt9Cg7MMOqSYl328LtoVbqHrqhm_HFQYDYQ2wXxXHds9Qe_JqpqyQNIyMeMBSiHh3-DlhyZtQ3FSF2XKhWIOCLUW4wCzlVPsAq3Hqm5KrZYjGDU5yM6yrtCRjimREzYlYryQaXMiTEOav4Bb3QECaGscU-1Tvq8QbnHbWvqNlON4pM9JivtfCmeQF_BNnk8SH9T63DRMSulJS6PoRXGTKkYlxBUTv5iv58_7i0jUtoTjbqkVzSHkSf27NVbc_qN0y4ocnpxo8436rp-2ZfquP-5vHG8saM9DMqu8sLYHgZ6Uogh4j_ywLVWNp7JfWR1XeDeGqbRoWs6W_xuKLtwshRxQHrWAfsYD831pQ7TRTRAoorrSkp_5yoPo2JiWEAaIQbcD98JZ8AnOsoTHbSm8kG1kO99xWHTZ72MT_CC8KpbAbRwW4vEKxOuDQxCGHw_u3EEq0-IHkxoRwJdp4W6WAdctasmRt2OEbNiOFt8PYFN4abx-PGKZlttcTq9zkDRa574SCPScMInve_n4ngfxcyJX56stqMh0EAX56hwfITbVc1oN80YHYtC9JH79kae3ftmLuafXbu_MKbgb7x2wKoQZBm7GQ1u24z4eYY8LyHTWe9BV_pD_WCV5ZxJl4h23xHs5m1Jc9rHYrRNviq1v6APslb_kNlbuXShv2egH26w7sX-eksC3QzBEVqBG8WSijGCGGypoaI2XUMsAuBcVJGk2mCrvanPvq5k3EzPV9pNHiWoaQtE0w94zuNCn-sA_Z3NMSpU2NHxyksRntPj7wzR8huAQ-mXIxyf7cEX_VVkEDTFC_OTC9ep7ACF-O3pkVUlgCelYIHAMnqakAvgORDTzMKMgKcyOLVvK0-TMv3v22mAnF-bU9tXT2KwblAaXnPHXlpCVRy7azOVU2SdfHajJqfj-VLqrVmiMd0ZmYoCrNKiseIeyRoS2tkV10DGtFgEfRIBji4sjVCEydAzROX31lrVYd8pGtkst46RN8Qbq4oNGoWOegtXsxGhSxPWU=w640-h640-s-no-gm?authuser=5",
	 singer: "Miguel"
   },
   {
	 name: "Popular(with playboy carti &  madonna)",
	 path: "./music/popular.mp3",
	 img: "https://lh3.googleusercontent.com/pw/ABLVV87i0EBnR_z38NvmyycHd8TqjtBt2FwowfioXy8QjkHziveVwYHRyDgwB-gF8ZvpBinablP4MJqu0JOpKz_lEKRvRF-ITk9T3a1ZB44gNqXDBDbH9dJZyN8hzR3jLHSXUGkTszav30N935ko1sX7m5gJ0tvstiOVktf43AbFPIZyA482Wx9SsmjyktMEXYpeYFSGwo8GAX1AJuRujfeXZoGfNfvrmEwlpreQWO5yH3_MaB_lP54-XNs-T7P-hI4MfsOAG0ClpNGn5PiC_c8AWBcNpJoaPnJoUyAM7X9NUY_ZeAV2sd8UA6MFywFt_9_SjnGFneSHUx2VyGF5bp6JtWJbyAVTZs0zki5aNsH1Lbzoh-8Fa8lbQxH-olKZaOqaJ6rS-vr9w5K6Vbgu2YoWXRbq6f1sqF9mojIQqHpAErIgic20xNlmowISVyMN2_SxEpSxUVWDlZjCaP4mM25ea0WXCm0-h3kZiTWHEOBoRQOvGAm5f7ofvBeGythYy8LZutn6TMnQLytq0amj2fp6LC1atT1viQ27BPAGWOB0YJlECzIL13q7v-maz22vtTCju_gNy3ZdFtSJ1W8_byJBObuwaV2oqMxwdTJZiUjZr38kKvRHUfiYEtuu6yrw3bwjkqgh6DRgW6ceyKRux8cxMlaNrAUQbW0k2BZ61bryImfO0tFXZPA5EQsj7ynl05hxXI2NdKOxi4O3mXyuLju2v-V4IkHrSzdYUp61XB3AjH54n6z5XcyBrSkYnvQOYOQ-Zc7lOImsZGNiorWIWHjdSJLdk9knK1QJPJ-b8kkjupY8Ms1qxJBj8D9mcPJjJaZzaY3SnER4HQY3n5atWBT-ISjraD4eF08_9iQklq4O8UlmGsN14Eb6Lv_AAX4WutCiuFvILzcTP6W8OE25spjiNFdZFu5vSTtJC1xCVQiAhDAeaFoOmFXKZ13lCdgnh4tyXVcpwhQ_l0s84jUEmSFevYWdS5IbB6Kp2cb9qWu8m4UNUPXNeUSbJoCPlszzqf9bYS5KYKVdKBPk5mkLSdKpQ3t0OcGv3IKeNAlEIHOVB0djbJ0gwgg_hylPJ4BSLbV_iIcQZmFX-w=w316-h316-s-no-gm?authuser=5",
	 singer: "The Weeknd,Playboy Carti,Madonna"
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