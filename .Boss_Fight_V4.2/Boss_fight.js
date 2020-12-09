

// -------- Stats perso -------- //
var Hp_perso1 = document.getElementById("Hp_perso1");
var Mana_perso1 = document.getElementById("Mana_perso1");
var Def_perso1 = document.getElementById("Def_perso1");
var image_perso1 = document.getElementById("image_perso1");
var nom_perso1 = document.getElementById("nom_perso1");

var Hp_perso2 = document.getElementById("Hp_perso2").style.visibility="hidden";
var Mana_perso2 = document.getElementById("Mana_perso2").style.visibility="hidden";
var Def_perso2 = document.getElementById("Def_perso2").style.visibility="hidden";
var image_perso2 = document.getElementById("image_perso2").style.visibility="hidden";
var nom_perso2 = document.getElementById("nom_perso2").style.visibility="hidden";


// -------- Boutons -------- //

var bouton_atq_perso1 = document.getElementById("atq_perso1");
var bouton_shield_perso1 = document.getElementById("shield_perso1");
var bouton_spe_perso1 = document.getElementById("spe_perso1");
var bouton_passer_tour_perso1 = document.getElementById("passer_tour_perso1");



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

var tour_atq = 0;
var tour_def = 0;
var tour_spe = 0;

// Caractéristiques Personnage //    
 
Hp_perso1.value = 2437;
Hp_perso1.innerHTML = Hp_perso1.value;

Mana_perso1.value = 1489;
Mana_perso1.innerHTML = Mana_perso1.value;

Def_perso1.value = 10;
Def_perso1.innerHTML = Def_perso1.value;

var atq_perso1 = 428;
var spe_perso1 = 200;
var mana_spe = 300;


// Caractéristiques Boss //

Hp_boss.value = 2000;
var dmg_boss = 200;

// Etat bouton initial //

bouton_passer_tour_perso1.disabled = true;
bouton_passer_tour_perso1.style.opacity = "0.5";

// Fonctions boutons //


function atq(){
		
	if (bouton_atq_perso1.disabled == false && tour_atq == 0){
		
		Hp_boss.value -= atq_perso1;
		bouton_atq_perso1.style.opacity = "0.5";
		bouton_atq_perso1.value = "Indisponible";
		bouton_atq_perso1.disabled = true;
		textAction.innerHTML = "Vous avez infligé "+atq_perso1+" points de dégats";
		
		bouton_shield_perso1.disabled = true;
		bouton_spe_perso1.disabled = true;
		bouton_passer_tour_perso1.disabled = false;
		
		bouton_shield_perso1.style.opacity = "0.5";
		bouton_spe_perso1.style.opacity = "0.5";
		bouton_passer_tour_perso1.style.opacity = "1";
		
		tour_atq = 1;
	}	
}

function shield (){
	
	if (bouton_shield_perso1.disabled == false && tour_def == 0){
		
		dmg_boss = dmg_boss * 0.8;
		Def_perso1.value += 10;
		Def_perso1.innerHTML = Def_perso1.value;
		bouton_shield_perso1.style.opacity = "0.5";
		bouton_shield_perso1.value = "Indisponible";
		bouton_shield_perso1.disabled = true;
		
		textAction.innerHTML = "Votre sort vous protège de 20% des attaques du monstre.";
		
		
		bouton_atq_perso1.disabled = true;
		bouton_spe_perso1.disabled = true;
		bouton_passer_tour_perso1.disabled = false;
		
		bouton_passer_tour_perso1.style.opacity = "1";
		bouton_atq_perso1.style.opacity = "0.5";
		bouton_spe_perso1.style.opacity = "0.5";
		
		tour_def = 1;
	}	
}


function coup_Special_perso1 (){
	
	if (bouton_spe_perso1.disabled == false && Hp_perso1.value <= 2237 && tour_spe == 0){

		Hp_perso1.value += spe_perso1;
		Hp_perso1.innerHTML = Hp_perso1.value;
		
		Mana_perso1.value -= mana_spe;
		Mana_perso1.innerHTML = Mana_perso1.value;
		
		bouton_spe_perso1.style.opacity = "0.5";
		bouton_spe_perso1.value = "Indisponible";
		bouton_spe_perso1.disabled = true;
		
		textAction.innerHTML = "Vos points de vie remontent de "+spe_perso1+" points. Vous avez utilisé "+mana_spe+" points de Mana";
		
		
		bouton_atq_perso1.disabled = true;
		bouton_shield_perso1.disabled = true;
		bouton_passer_tour_perso1.disabled = false;
		
		bouton_passer_tour_perso1.style.opacity = "1";
		bouton_atq_perso1.style.opacity = "0.5";
		bouton_shield_perso1.style.opacity = "0.5";
		
		tour_spe = 1;
	}	
	else{
		textAction.innerHTML = "Vous ne pouvez pas encore vous soigner";}
	
}

// Fonction check mana //

function check_mana_spe(){
	if (Mana_perso1.value < mana_spe){
		bouton_spe_perso1.style.opacity = "0.5";
		bouton_spe_perso1.value = "Indisponible";
		bouton_spe_perso1.disabled = true;
		textAction.innerHTML = "Vous n'avez plus assez de Mana.";
	}
}

// Fonctions attaque boss //

function bossAtq (){
	
	Hp_perso1.value -= dmg_boss;
	Hp_perso1.innerHTML = Hp_perso1.value;
	textAction.innerHTML = "Le gardien vous inflige "+dmg_boss+" points de dégats.";
}


// Fonction reinitialise bouton //

function enableButton (){
	if (tour_atq == 0){
		bouton_atq_perso1.disabled = false;
		bouton_atq_perso1.value = "Attaquer";
		bouton_atq_perso1.style.opacity = "1";}
	else{
		bouton_atq_perso1.style.opacity = "0.5";
		bouton_atq_perso1.value = "Indisponible";
		bouton_atq_perso1.disabled = true;}
		
	if (tour_def == 0){
		bouton_shield_perso1.disabled = false;
		bouton_shield_perso1.value = "Sort de protection";
		bouton_shield_perso1.style.opacity = "1";}
	else{
		bouton_shield_perso1.style.opacity = "0.5";
		bouton_shield_perso1.value = "Indisponible";
		bouton_shield_perso1.disabled = true;}
		
	if(tour_spe == 0){
		bouton_spe_perso1disabled = false;
		bouton_spe_perso1.value = "Coup spécial";
		bouton_spe_perso1.style.opacity = "1";}
	else{
		bouton_spe_perso1.style.opacity = "0.5";
		bouton_spe_perso1.value = "Indisponible";
		bouton_spe_perso1.disabled = true;}
	
	bouton_passer_tour_perso1.disabled = true;
	bouton_passer_tour_perso1.style.opacity = "0.5";
}

// Fonction compte tour //

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
	
	
	bouton_atq_perso1.disabled = true;
	bouton_shield_perso1.disabled = true;
	bouton_spe_perso1disabled = true;
	bouton_passer_tour_perso1.disabled = true;
	bouton_passer_tour_perso1.style.opacity = "0.5";
	}
}

function mort_joueur (){
	if (Hp_perso1.value <= 0){
	Hp_perso1.innerHTML= "0";
	window.alert("Malheuresement vos efforts n'ont pas suffis à tuer Le gardien... Recommencez !");
	textAction.innerHTML = "Vous venez de succomber à vos blessures.";
	
	
	bouton_atq_perso1.disabled = true;
	bouton_atq_perso1.style.opacity = "0.5";
	bouton_shield_perso1.disabled = true;
	bouton_shield_perso1.style.opacity = "0.5";
	bouton_spe_perso1disabled = true;
	bouton_spe_perso1.style.opacity = "0.5";
	bouton_passer_tour_perso1.disabled = true;
	bouton_passer_tour_perso1.style.opacity = "0.5";	
	}
}

// Interaction boutons //




bouton_atq_perso1.addEventListener("click",atq);
bouton_atq_perso1.addEventListener("click",mort_boss);

bouton_shield_perso1.addEventListener("click",shield);

bouton_spe_perso1.addEventListener("click",coup_Special_perso1);

bouton_passer_tour_perso1.addEventListener("click",bossAtq);
bouton_passer_tour_perso1.addEventListener("click",enableButton);
bouton_passer_tour_perso1.addEventListener("click",mort_joueur);
bouton_passer_tour_perso1.addEventListener("click",compte_tour);
bouton_passer_tour_perso1.addEventListener("click",check_mana_spe);
	

