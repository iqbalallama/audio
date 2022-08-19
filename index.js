var len = document.querySelectorAll('button').length;
for(let i=0;i<len;i++){
    document.querySelectorAll('.music')[i].addEventListener("click",function (){
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text)
    })
}

function audioPlay(text){
    switch(text){
        case 'Ami-je-tomar':
            var audio = new Audio('sounds/Ami Je Tomar (Fan Edit)(PagalWorld.com.se).mp3');
            audio.play();
            break;
        case 'Zara':
            var audio = new Audio('sounds/01. Zara Sa.mp3');
            audio.play();
            break;
        case 'Kodom':
            var audio = new Audio('sounds/Kodom-Blue_Jeans(sumirbd.mobi).mp3');
            audio.play();
            break;
        case 'Tum-hi-ho':
            var audio = new Audio('sounds/Tum_Hi_Ho_(Aashiqui_2)-Arijit_Singh(sumirbd.mobi).mp3');
            audio.play();
            break;
        case 'Kya-mujhe-pyar hai':
            var audio = new Audio('sounds/Kya Mujhe Pyar Hai (Woh Lamhe) - K.K - 320Kbps.mp3');
            audio.play();
            break;
        case 'Meri-Aashiqui':
            var audio = new Audio('sounds/Meri_Aashiqui-Arijit_Singh_N_Palak_Muchhal(sumirbd.mobi).mp3');
            audio.play();
            break;
        case 'Sunn-raha-hai-female':
            var audio = new Audio('sounds/Sunn_Raha_Hai_(Female)-Shreya_Ghoshal(sumirbd.mobi).mp3');
            audio.play();
            break;
        case 'Sunn-raha-hai':
            var audio = new Audio('sounds/Sunn_Raha_Hai-Ankit_Tiwari(sumirbd.mobi).mp3');
            audio.play();
            break;
        case 'Tumi-mor-jiboner':
            var audio = new Audio('sounds/Tumi_Mor_Jiboner_Vabona-Andrew_Kishore_And_Kanak_Chapa-Movie-Anondo_Osru_FusionBD.Com.mp3');
            audio.play();
            break;
        case 'Tere-hoke-rehengay':
            var audio = new Audio('sounds/Tere_Hoke_Rehengay-Arijit_Singh(sumirbd.mobi).mp3');
            audio.play();
            break;
        case 'Main-Dhoondne-ko':
            var audio = new Audio('sounds/Main_Dhoondne_Ko_Zamaane_Mein-Arijit_Singh(sumirbd.mobi).mp3');
            audio.play();
            break;
        case 'Chiro-odhora':
            var audio = new Audio('sounds/Chiro_Odhora_By_Miftah(sumirbd.mobi).mp3');
            audio.play();
            break;
        case 'Baarish':
            var audio = new Audio('sounds/Baarish_(Yaariyan)(sumirbd.mobi).mp3');
            audio.play();
            break;
        case 'Chahun-main-ya-naa':
            var audio = new Audio('sounds/Chahun_Main_Ya_Naa-Arijit_Singh_N_Palak_Muchhal(sumirbd.mobi).mp3');
            audio.play();
            break;
        case 'Labon-ko':
            var audio = new Audio('sounds/02. Labon Ko.mp3');
            audio.play();
            break;
        case 'Tor-kotha':
            var audio = new Audio('sounds/Tor-Kotha--Tera-Zikr--Darshan-Raval.mp3');
            audio.play();
            break;
        case 'Pehla-nasha':
            var audio = new Audio('sounds/02. Pehla Nasha.mp3');
            audio.play();
            break;
        case 'Pehli-nazar':
            var audio = new Audio('sounds/Race 2008 - Pehli Nazar Mein.mp3');
            audio.play();
            break;
    }
}