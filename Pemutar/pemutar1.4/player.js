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
		img: "https://lh3.googleusercontent.com/pw/ABLVV87i_QCuWaSk7FECqQ8hdFv83FRB9nEC2PaZnEAEC1B3IDhvobvnzTMchSWs2Z4WCSz6Oq23xikQYNmWV6XjRgvIZOhoPAQU6Y1xo8asMWVr55zQuna1s8EHGiMbjKio-IuZgeMscTHwvCFvs1YtBsZbJz0JCuFhZ5O4T6TRpzqGYlow4dKcoPhfsNUQVDLn7wb9W3c-7N61L-l4j5Nxp_-UiE5mr9Dwa_RnP_aCH_ee_062SBMKLxKRq0TH8Qb0xMVtxmjaapKkakMAKIdkqQff5X7PI6NRuDUFSw_FAG3zRqrXkkprDNmZ6RWnkPSdZAFZHLWV_iTNVkVNmmWucBY3-EIJmsv-7h9gOK-VrHNvvKDXL9QJU0Au-Rq6jCKVLE09GqoAwgCwfBllVBNf-gwJpHp3THm14jLcr8WxZQ1X8G0dAPabZYvTSyA2VvaTt7hGg3NsxX_lC_x173_oih3Vu9r5bUX2DeHI6xYQVioXOdYeyA2WeHROMEg3TRyTGzRImjq7A8eUkvdaiS_NBRnJbXJ1MlZUVQLRpc8usGwIJBg2aqIYTTOENW8TVfRnoGeE_8ThNiXLjylp28pARtG4QBNkTQtAc0rVwC_rkZb2F0QCpRxjJrjAiSYMV53jQfhh9EM0MP5ksFHUVaG5vWm_hF36YevEKOFr2zqTXfEGbdJCfVoQeQ6lRLS3LR8pmKeqs9TDyUsRrbhjJjWVr8psLaSB1lhTC1qhip9O9i-YI-YW4gHpDhxThALpllG7wK4hClYYJuEW2qn-aXOwx47Mfa1Uyk0go6IpEHsYmtURQBWPd3-2Lzwaf0NQ88PZraM8eR4GwbQqdRE2_mqtygCWsLv5ISv_QyaPz-kaqq0xtf2aSTb-sj0i9Xj8yr5SCj98X4pEdyJW_o2M9YgRGqPSOwC4w3ubC37PlMQosgeR5caGApRIaFWI8c9WBLU3LX-SbLa2QUQohKMh7gC6EDQP4mYxs81e2YxBZ0CxmSUKcjNsQK1wJ__jLwj5K5vxQ3V_gwe78_HkG1kUWIiUOrmKZZsuxyAgr7jz-rjyzo48NQ3AF1QaTp_MrN1wNNX3TOHY4_9__w=w500-h500-s-no-gm?authuser=5",
		singer: "J. Cole"
	   },
	   {
		name: "Watch this-arizonatears",
		path: "./music/watch this.mp3",
		img: "https://lh3.googleusercontent.com/pw/ABLVV84ZRypJ89Iw6N_r6wq4NMETWE3CrzMwDuCBTxOQE_KpJzGyzE_rhSnsq1oxNoXKxsbhvPL12M26vwZzVqrvOMaqCgiqT11tsVCEULWMDZVZHnC9wFPHNKS-HLMG_Slkb3fsHwEjj6uSYuZ8pkY4AHAANBVvox6ogsbvGMLX7YWvHbKK7-LxGm_Inzn5GdQ5VH0fvc3b2vuwiqSDA46FiiJYASh2bqLIMP_cFBehFifexQ7XgttntZNrMiGCo8v7I_dHh9CVk4Ojyj8GDdd1woe0OXoT7g_30Da8Lt1DeSCdA4kvjDdpoakq74uX3VT1TamWM76gQISoHh6hdFw4b3q2gjTWRKe2msuypNVlHGnGTM53nNNRWD6LkJcJBPzzl68ZvEE6qABh1N2AK3E4tOhJ_25H65W1EnOKW2W9V7MLCzUQBAXwUIbY6W7HQcdYjvZegHZfD8u73PfcEHazXWWBxJsc9TgnJ-L5TaYYTVU0uuoJey5V2z4YBgqvkd8mOZfTRv_WP05JWnAu0GTY9OElIHx9tCltlbI9an-ElhC9lqdYIIQlvCeAo7y8v2Px7IxKAs8oooRNGYj6qZ98e-jH0wKiLuQNp3D2lAcolumm7vANH_1Nodq141F1eg3MigyDDRLnD0doxODBqwHOVXieI0NzGewiEjGsAyCNZANdVqdI9FoTD_CqE16KFeV3V9PjvsdOMky5hw1raHDGGRa6Vgs0x6RtDyRBBLyT47Ai9DOYRhJ5gP4jYUMfUucl0Hm6uTf_Gw1SywEQ2rnWmqmzwoSQon--V28RlTvyrPpEffTZy-yCy-SmZoxPLCJjRAoEVpOr_uFJyIEtC52pwF1jlu1HuxaSD5z_yr_fGeeTyTV5Q3p84tNI2fzdPvWWMuVMxl8PwXZ9S_F0fknjcF_5I0ZUb8Xzld0ZXUjip-wPuhZQ2DnVTFUvOrXGSDjD4bSCu_IP5zdwV6vc7nObtS3SpVeSSzMRDIqf5oz7EP9FNwii5Aq6qpvWxbOatyVpEK4fJVGa8iFOk-_I4V5dreEzjCm6gmUCiEOYRKZBh8xZg6TaBqvRnwZKfcKV6VEPwS887PgQyQ=w640-h640-s-no-gm?authuser=5",
		singer: "Lil Uzi Vert, sped up nightcore, ARIZONATEARS"
	   },
	   {
		name: "To comfortable",
		path: "./music/to comfort.mp3",
		img: "https://lh3.googleusercontent.com/pw/ABLVV84RIXe9s46sXHtiCdufLJrgCWYysKb8pZLM-j4XIsCr52qwoGnm3M_Sgg4VWLjokBdShres7W5rS7K4C3S8WiQvqC3oJ4X5XEdw5JfO4QYEiIvoe6Cyre8tEjZJFkovjFGAaE6SY4C2f_u6c3Gi8PvEV3AZ3a0ZDKDkJWU71eTxr3efBaZrnG1JGt_pYcVSOVvVTic9KG2z_TcST1CmuXFxjbBuAJnemXVH78XJDm-jJtBPwwJL_mdppgp2sf730T7wtus7G4stYKJjuqxW0Ir3SaYyUYwaLgYMM6qnf7Kyty4YGryTIxKT4MeI2fFG4s8gs23SEF7e1q3KFQ7RPwnsfw9HPh1rHMn4LdbROstBo_UOh2INsRXGE3vqkwF9SxwplauETWxu1brJOMcYG0ObAVqi_JW-YV7jrKCshP3cyVXpcLXsOXDu03ogMJT-6p7v5vWnxNuGZS_ooruSI2qhpG_dvwma3L41NB9CDilzz5_CIeccN_O38eG-OuyJZ1Lev8Y9jLTahR6v49kl6K7g3i0k-7ejH0ZgbnzqqlsdlbCEhfaL1IXweP1HauRSESQYCbBkDL7sO2atjOf2mMgbPOp4vkhzjuTktcjJW5ZlCSW8DqnV2CuTL9Et4AIgY4E-aOEYgiKDsZ7dZMkds3ZVB0y13cm0VBOThZg-J_rw-KBiLloFhFd2vTCC_rz2GksWuNbK-EQOBLg2knzjCqvzRRhMzmaU25mpdxrx-nhgWmMthXeAHQhyEztNTQZ_zgbfPT38v7oEE9AZMGDER-qPZPd5jgA6Mn8GdXxLePRleh7vJpLoTN_bZudBgb3CMGiY4DOZQsBf5JzZKNSUM8vPjcFv4dEEs3toFm8yt7yQ0BBExndna_aFi4Ew3AdIyr7r6J4o4AOjvbvWyL6rXMUpCidI3EI4Y6XjizQXxMR-V_TFumcqsYUSIjLyhNBKVrfovKZuh-tdKF1gHB_nry4GPX3fYMgIlUrDUIB8XKx_62oS6-iPr9roUaL0WCOYMrkFpIxOZxxSOsirW9_GC1I95J0hPEsbsJFwxKMYMG4IX5L90cz2xbCb0ucMU4OG5NGvTEWftQ=w350-h350-s-no-gm?authuser=5",
		singer: "Future"
	   },
   {
	name: "Father stretch my hands pt.1",
	path: "./music/father strecth.mp3",
	img: "https://lh3.googleusercontent.com/pw/ABLVV85yc9FEJEwASnVXSEravGmsVpRrUppkSAelcIAfdoPidtk4_uwpSrKfO9bq6PjRxF5R1loKCV5_hn25jBV-A4B4r567SaisxwERxCrnrcGB45Sk9oyiIFsUe17RsLhw6wC5aPWL50Xa2xWEysb_o9G4-jUi7NDF_wc8I1REspBwK8vwtNb37eafUPgyyK-F5kzy11BrdfUlNG5UcS2gTRjtq6a1b2WwzHVaY6rPBg0OWduygpbPmJpc2T5t9gahMu9_1Dvx9p9UE0Xsp2hk62HorueZlqFSO6Enzfh8GMiuu7gJtGuIXc-JlNv_JfrfyI0MS3IO__AtTKRIkehQLil7mM2MNZE9cEmZaXG2QAKfdezQPSE8WNjvM_8g9KjsJXV_UpocwJR0BB75e_ipufJ_GKOTFR8VhhSMKo8OVslkII3rHnDcPp4G_dIzExf_bSOv6oMAXt7tebKKUdpLeXavUqjGGtOCRJVqfCGFrCCqu2D1YbC00n9TUOmmpdh6DIzpOOctOnC9TQkHGcRMWQX9pXaI7ySXuLvA6zJDqQ_7i_JHwZlA_Up3Iz_XBzKBrxOHoSeGMGdD8GIFQrnkv0ED4iwOT-56a2i458o8p67a7SWSFO_biBAa1Onm77aSq0Tn6PRxtZ-kVCHTESkoo9gwd2sygRTmlhDrReafmaDy6uU_UxFHipXwciZMGPwyUggOydEeVTodOihEj-6DmraLfpHKffZTI9WxViWMKg4eC5Ny6J1oWaGkApCgNS98-Rq4dPZa8C8g11qlRnqxbvH7f52XDrTC5D5I7qtDXpeLQpWpEWZgeItbIgDsUe2FJM4QUIdHgdM5-jc-cXmcWdUTk2tr9hzGRCnsGUbcr5EXfgyXDf2TCVGcPsJ44b_8pgbMdneXL7Rfceebd-5GUMM5iqRtrmne4ppgrzmX8V71UiP6KpVZQUiFPXEgeO53XyWrfeS8-K3QkQ7bgMV6Q51GuG9mUKxXJcVSSH63QyjerpxFHS2bU2mW0s7JAqqE75JIVwX25jubyzg_qXhudQDkoduuyhd4h0xBBYm6_5qwPF-dvRVKVDeEPmY129WcIEGEDN8Qkg=w668-h668-s-no-gm?authuser=5",
	singer: "Kanye West"
   },
   {
	name: "Fukumean",
	path: "./music/fukumean.mp3",
	img: "https://lh3.googleusercontent.com/pw/ABLVV87ICgqcIaEEN5rVY7AnS8n9hc-9j3D1r8B5Aif1CRoxBxuMBoZmaUGQcpdKk4YiLfQOjOK_N5ZOE4v4gPMVUs30FaPwunJHcBh_UBL9WRctpPJKdRquyjbDgJc04mzGM_9teGaEzp_-ebGxtoAn8gdtgS_MXrsMWWnSQulqV-fokl8qpyYBpBv80YHffnKt0Kln1H1zoC5WUwEKXkkHvA2q-tZLLST9KxmPOYUvSk8J_W_Tzw1kc0hK5A8ayL4N2jKtCFNPi05ST1BEN0ESt9i919FCZv8AkBuw2Ix7Pn_rVMXni2sAr5n5_Dq1lEYIzO8EgZAFX295RrJlUBU_ZygZ6DpuiRsjrMrGAIokireJlsf-8udP6RT3PvZCsvYf6JF_c-VbigC-NxSK3V7ZgQpxskD5iBqC74Zjoiz_Hx58h9pUr71Vh17NDWe5yAtW3mLATbTdcSFWdrs7wkmnddUTJ3khO4cQc4fSe5wnIkRXDdZSTaoxtpy2jA6MnAuZC5q5RlseiynJB0ROAehSlSSw11W5ULrCRyIcTMa6VZvjrFbsMSjcS5HQBE5-_kEwtximFun0OnwoS7vMEolUXRJcUCN3q4ChZ4OkZ1uk65TPC5HvgnlxmDhNmtT3lHmPvEoPPMFQZZsqs8bL4ZCHYwuts0egwkfNjojErdBfSOuWo7Zpr6DUeR0xTDocTYZlHezhrbnOoxwVn78QlgW9y4LG44BaHDB7N2dl60L0-G0JM5qa7aXzwZcHiWycZmCRTbLbZb2bBuS8-gYZgPXCZNNur5GMhnaGjQIJdae5LBTb-QJeIvUHWUl7jWBPqw6PGD6iRGCgpUjGCMS3dx7_Og0EQk7eMY84xF0f5iaoHmEuWMYq-XOLEcv5YRTx6QVsgfIdBeSe_3w0zBYpl833CB3xBDRA6_wSHSAeGYyLmAKMUcrqoJOFSq6_1EWdXlSdeipW4s8a0G1LFVzUPtjyu1DIL4zuNrS_VbI7uNfPJwrDqZX1Efq84x9cnnbZAc4D-lh2TfsEDUTlcFgGGZ6spjwg-vxT0lgAvzFxMDYudl62bzU4yeRfbyTKHMOmekMlpi1s6rFoOQ=w623-h640-s-no-gm?authuser=5",
	singer: "Gunna"
  },
   {
	name: "Glock in my lap",
	path: "./music/glock in my lap.mp3",
	img: "https://lh3.googleusercontent.com/pw/ABLVV860h3XbGbG3WQJJB12fhKX_BpjqwYuxHbP4Cj8DO2_B6cZCUZd11_7mqtKX3NO_KrMhjDao3EG-j5fzIP0vS4N9CKZyKG6JE_X-umn-dnxDzwIDT-G9KCoFxjBCkQL3ysCxlV0VjYTFc8KNGCY6vnnQW9xdc33kNbdrGCTPsqP8YthOrnXkyfZ8tJB5YRVfmaTe2p06X9ZovzNcyRAHbCwZqst0_-GrHvkfezK8hZgXcFMUNr1mqeo3Fc5X2ReYfmon9Yh_-CV1B91H-KF7GkRCAfFEgRXyZReY6nJR8XxlvEZ-iJimyIKGMJriLm57QgmrM7clhvskUB9CFF_4NfKdsG7gLVc_GXS9spJ-kfc4AnsTTPSZFhs6DkqVErZflsitPyNpinl2pddEelianaAr7gjFb4FYCYL0qppWhQvHHAonj1C4FzCsTowWBY1JA2S9OjJVuvVmH_3-d_yviBRCAb1_dpZctasPBXTbMEnkOoCH756AkuBkIVukXUn52D3jzb9sPY_rkWaX9u8U_LkBMTlS0Hi-NAN1CPUj4-TfmQ61e4UR9XRBJpecajA3m03l8_EFr6K4LESmiVxeSpppFdEfHhpra76BgqfkJsB7xUuhorwB2MdyVdr9AHr3r5_RA8RmCqC-KvD9KYcK5DHAv7xjfCQepO3nYeNrNwJl4sQwIgA5l-x6tpvlUL8XXLK6Rtjo2U_w03IchSFznyrUKaAtVG7XSVhyc1KB2csg-4xIGP5XfVSwWs9UnJGtjtEfGZflzAjocp-WgMHkii23cYmf0S-DHdC_bOVEPXvRfJ56eORg_6FdWHJieFa6fImFUsjN1BDyIExPCdOc75jDjKgBTymHbF81BCK_KmZrhUSvXcrgn_bzSCyqo4Ij0zKBjIH8BU22mc-cAr1_PxHXj2iImb42UqBi7jPfn6Wz5U7dALqV2S6ACfvS9E4RT2BIWJwKpfV7dEsHzruB5Ev1Hj10Sb-baV0NH8gFg0ONcozh6eqhULbsWf2heSrdnNJvFlb9kK4vUTCvre4tWbAsSG4-fMryX9uxZwYdot4wW2_4gfQM9Ov95rOIETl_qKnSeVMQOQ=w400-h400-s-no-gm?authuser=5",
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