

// -------- Stats perso -------- //
var Hp_perso1 = document.getElementById("Hp_perso1");
var Mana_perso1 = document.getElementById("Mana_perso1");
var Def_perso1 = document.getElementById("Def_perso1");
var image_perso1 = document.getElementById("image_perso1");
var nom_perso1 = document.getElementById("nom_perso1");


var image_perso2 = document.getElementById("image_perso2").style.visibility="visible";
var nom_perso2 = document.getElementById("nom_perso2").style.visibility="visible";


// -------- Boutons -------- //

var bouton_atq = document.getElementById("atq");
var bouton_shield = document.getElementById("shield");
var bouton_spe = document.getElementById("spe");
var bouton_passer_tour = document.getElementById("passer_tour");



// -------- Boss interface -------- //
var Image_boss = document.getElementById("Image_boss");
var Nom_boss = document.getElementById("Nom_boss");
var Hp_boss = document.getElementById("Hp_boss");
var Info_boss = document.getElementById("Info_boss");
var Partie_centre = document.getElementById("Partie_centre");
var Image_tresor = document.getElementById("Image_tresor");

// -------- Boite dialogue -------- //
var textAction = document.getElementById("Boite_dialogue");

// Tour //
var tour_perso = 0;
var tour_atq = 0;
var tour_def = 0;
var tour_spe = 0;

// Caractéristiques Personnage //    

    // PERSO 1 //
Hp_perso1.value = 2437;
Hp_perso1.innerHTML = Hp_perso1.value;

Mana_perso1.value = 1489;
Mana_perso1.innerHTML = Mana_perso1.value;

Def_perso1.value = 10;
Def_perso1.innerHTML = Def_perso1.value;

var atq_perso1 = 428;
var spe_perso1 = 200;
var mana_spe = 300;

	// PERSO 2 //

var Hp_perso2 = 1426;

var Mana_perso2 = 927;

var Def_perso2 = 30;


var atq_perso2 = 386;
var spe_perso2 = atq_perso2 * 2;
var mana_spe_perso2 = 250;

// Caractéristiques Boss //

Hp_boss.value = 2000;
var dmg_boss = 200;

// Etat bouton initial //

bouton_passer_tour.disabled = true;
bouton_passer_tour.style.opacity = "0.5";

// Fonctions boutons //


function atq(){
		
	if (bouton_atq.disabled == false && tour_atq == 0 && tour_perso == 0){
		
		Hp_boss.value -= atq_perso1;
		bouton_atq.style.opacity = "0.5";
		bouton_atq.value = "Indisponible";
		bouton_atq.disabled = true;
		textAction.innerHTML = "Vous avez infligé "+atq_perso1+" points de dégats";
		
		bouton_shield.disabled = true;
		bouton_spe.disabled = true;
		bouton_passer_tour.disabled = false;
		
		bouton_shield.style.opacity = "0.5";
		bouton_spe.style.opacity = "0.5";
		bouton_passer_tour.style.opacity = "1";
		
		tour_atq = 1;
		tour_perso = 1;}
		
	if (bouton_atq.disabled == false && tour_atq == 0 && tour_perso == 1){	
	
		Hp_boss.value -= atq_perso2;
		bouton_atq.style.opacity = "0.5";
		bouton_atq.value = "Indisponible";
		bouton_atq.disabled = true;
		textAction.innerHTML = "Vous avez infligé "+atq_perso2+" points de dégats";
		
		bouton_shield.disabled = true;
		bouton_spe.disabled = true;
		bouton_passer_tour.disabled = false;
		
		bouton_shield.style.opacity = "0.5";
		bouton_spe.style.opacity = "0.5";
		bouton_passer_tour.style.opacity = "1";
		
		tour_atq = 1;
		
	}	
}

function shield (){
	
	if (bouton_shield.disabled == false && tour_def == 0 && tour_perso == 0){
		
		dmg_boss = dmg_boss * 0.8;
		Def_perso1.value += 10;
		Def_perso1.innerHTML = Def_perso1.value;
		bouton_shield.style.opacity = "0.5";
		bouton_shield.value = "Indisponible";
		bouton_shield.disabled = true;
		
		textAction.innerHTML = "Votre sort vous protège de 20% des attaques du monstre.";
		
		
		bouton_atq.disabled = true;
		bouton_spe.disabled = true;
		bouton_passer_tour.disabled = false;
		
		bouton_passer_tour.style.opacity = "1";
		bouton_atq.style.opacity = "0.5";
		bouton_spe.style.opacity = "0.5";
		
		tour_def = 1;}
		
	if (bouton_shield.disabled == false && tour_def == 0 && tour_perso == 1){
		
		dmg_boss = dmg_boss * 0.5;
		Def_perso2.value += 20;
		Def_perso2.innerHTML = Def_perso2.value;
		bouton_shield.style.opacity = "0.5";
		bouton_shield.value = "Indisponible";
		bouton_shield.disabled = true;
		
		textAction.innerHTML = "Votre sort vous protège de 20% des attaques du monstre.";
		
		
		bouton_atq.disabled = true;
		bouton_spe.disabled = true;
		bouton_passer_tour.disabled = false;
		
		bouton_passer_tour.style.opacity = "1";
		bouton_atq.style.opacity = "0.5";
		bouton_spe.style.opacity = "0.5";
		
		tour_def = 1;
		
	}	
}


function coup_Special(){
	
	if (bouton_spe.disabled == false && Hp_perso1.value <= 2237 && tour_spe == 0 && tour_perso == 0){

		Hp_perso1.value += spe_perso1;
		Hp_perso1.innerHTML = Hp_perso1.value;
		
		Mana_perso1.value -= mana_spe;
		Mana_perso1.innerHTML = Mana_perso1.value;
		
		bouton_spe.style.opacity = "0.5";
		bouton_spe.value = "Indisponible";
		bouton_spe.disabled = true;
		
		textAction.innerHTML = "Vos points de vie remontent de "+spe_perso1+" points. Vous avez utilisé "+mana_spe+" points de Mana";
		
		
		bouton_atq.disabled = true;
		bouton_shield.disabled = true;
		bouton_passer_tour.disabled = false;
		
		bouton_passer_tour.style.opacity = "1";
		bouton_atq_perso1.style.opacity = "0.5";
		bouton_shield_perso1.style.opacity = "0.5";
		
		tour_spe = 1;
	}	
	else{
		textAction.innerHTML = "Vous ne pouvez pas encore vous soigner";}
	
	if (bouton_spe.disabled == false && tour_spe == 0 && tour_perso == 1){

		Hp_boss.value -= spe_perso2;
		bouton_atq.style.opacity = "0.5";
		textAction.innerHTML = "Vous avez infligé "+spe_perso2+" points de dégats";
		
		Mana_perso2.value -= mana_spe_perso2;
		Mana_perso2.innerHTML = Mana_perso2.value;
		
		bouton_spe.style.opacity = "0.5";
		bouton_spe.value = "Indisponible";
		bouton_spe.disabled = true;
		
		bouton_atq.disabled = true;
		bouton_shield.disabled = true;
		bouton_passer_tour.disabled = false;
		
		bouton_passer_tour.style.opacity = "1";
		bouton_atq_perso1.style.opacity = "0.5";
		bouton_shield_perso1.style.opacity = "0.5";
		
		tour_spe = 1;
	}
}

// Fonction check mana //

function check_mana_spe(){
	if (Mana_perso1.value < mana_spe){
		bouton_spe.style.opacity = "0.5";
		bouton_spe.value = "Indisponible";
		bouton_spe.disabled = true;
		textAction.innerHTML = "Vous n'avez plus assez de Mana.";
	}
}

// Fonctions attaque boss //

function bossAtq (){
	if (tour_perso >2){
	Hp_perso1.value -= dmg_boss;
	Hp_perso1.innerHTML = Hp_perso1.value;
	textAction.innerHTML = "Le gardien vous inflige "+dmg_boss+" points de dégats.";}
}


// Fonction reinitialise bouton //

function enableButton (){
	if (tour_atq == 0){
		bouton_atq.disabled = false;
		bouton_atq.value = "Attaquer";
		bouton_atq.style.opacity = "1";}
	else{
		bouton_atq.style.opacity = "0.5";
		bouton_atq.value = "Indisponible";
		bouton_atq.disabled = true;}
		
	if (tour_def == 0){
		bouton_shield.disabled = false;
		bouton_shield.value = "Sort de protection";
		bouton_shield.style.opacity = "1";}
	else{
		bouton_shield.style.opacity = "0.5";
		bouton_shield.value = "Indisponible";
		bouton_shield.disabled = true;}
		
	if(tour_spe == 0){
		bouton_spe.disabled = false;
		bouton_spe.value = "Coup spécial";
		bouton_spe.style.opacity = "1";}
	else{
		bouton_spe.style.opacity = "0.5";
		bouton_spe.value = "Indisponible";
		bouton_spe.disabled = true;}
	
	bouton_passer_tour.disabled = true;
	bouton_passer_tour.style.opacity = "0.5";
	textAction.innerHTML=tour_perso;
	
}

// Fonctions compte tour //

function compte_tour(){
	if (tour_atq > 0){
		tour_atq += 1;
		if (tour_atq == 2){
			tour_atq = 0;
		}
	}		
	if(tour_def > 0){
		tour_def += 1;
		if(tour_def == 2){
			tour_def = 0;
			Def_perso1.value = 10;
			Def_perso1.innerHTML = 10;
			dmg_boss = 200;
			
		}
	}
	if(tour_spe > 0){
		tour_spe +=1;
		if(tour_spe == 2){
			tour_spe = 0;
		}	
	}
}

function roulement_perso(){
	
	if (tour_perso == 1){
		

		image_perso1.style.visibility="hidden";
		nom_perso1.style.visibility="hidden";
		
		Hp_perso1.innerHTML = Hp_perso2;
		Mana_perso1.innerHTML = Mana_perso2;
		Def_perso1.innerHTML = Def_perso2;
		
	}
}


// Infobulle boss //

Image_boss.onmouseover = function(){
	Nom_boss.innerHTML = "Le gardien";
	Hp_boss.innerHTML="HP = "+Hp_boss.value;
	Info_boss.style.border ="2px solid black";
	Info_boss.style.backgroundColor="#6a2020";
	Info_boss.style.opacity="0.9";
	Image_boss.onmouseout = function(){
		Nom_boss.innerHTML = "";
		Hp_boss.innerHTML="";
		Info_boss.style.border ="";
		Info_boss.style.backgroundColor="";
		Info_boss.style.opacity="";			
		}
}

// Mort boss ou joueur //

function mort_boss (){
	if (Hp_boss.value <= 0){
	Image_boss.style.opacity="0";
	Image_tresor.style.visibility="visible";
	window.alert("Félicitation vous venez de tuer Le gardien.");
	textAction.innerHTML = "Le gardien a succombé à ses blessures.";
	
	
	bouton_atq.disabled = true;
	bouton_shield.disabled = true;
	bouton_spe.disabled = true;
	bouton_passer_tour.disabled = true;
	bouton_passer_tour.style.opacity = "0.5";
	}
}

function mort_joueur (){
	if (Hp_perso1.value <= 0){
	Hp_perso1.innerHTML= "0";
	window.alert("Malheuresement vos efforts n'ont pas suffis à tuer Le gardien... Recommencez !");
	textAction.innerHTML = "Vous venez de succomber à vos blessures.";
	
	
	bouton_atq.disabled = true;
	bouton_atq.style.opacity = "0.5";
	bouton_shield.disabled = true;
	bouton_shield.style.opacity = "0.5";
	bouton_spe.disabled = true;
	bouton_spe.style.opacity = "0.5";
	bouton_passer_tour.disabled = true;
	bouton_passer_tour.style.opacity = "0.5";	
	}
}

// Interaction boutons //




bouton_atq.addEventListener("click",atq);
bouton_atq.addEventListener("click",mort_boss);

bouton_shield.addEventListener("click",shield);

bouton_spe.addEventListener("click",coup_Special);



bouton_passer_tour.addEventListener("click",bossAtq);
bouton_passer_tour.addEventListener("click",roulement_perso);
bouton_passer_tour.addEventListener("click",enableButton);
bouton_passer_tour.addEventListener("click",mort_joueur);
bouton_passer_tour.addEventListener("click",compte_tour);
bouton_passer_tour.addEventListener("click",check_mana_spe);

	

