
var HP = document.getElementById("scoreHP");
var mana = document.getElementById("scoreMana");
var boutonPasserTour = document.getElementById("passerTour");
var HpBoss = document.getElementById("HpBoss");
var boutonAtq = document.getElementById("atq");
var boutonHeal = document.getElementById("heal");
var boutonShield = document.getElementById("shield");
var boss = document.getElementById("boss");
var textAction = document.getElementById("Dialogue");
var atqJoueur = 428;
var healJoueur = 100;
var dmgBoss = 200;
var manaHeal = 270;
var manaShield = 300;






// Caractéristiques Personnage //    
 
HP.value = 2483;
HP.innerHTML = HP.value;

mana.value = 853;
mana.innerHTML = mana.value;



// Caractéristiques Boss //

HpBoss.value = 4800;
HpBoss.innerHTML = HpBoss.value;


// Fonctions boutons //


function atq(){
		
	if (boutonAtq.disabled == false){
		
		HpBoss.value -= atqJoueur;
		HpBoss.innerHTML = HpBoss.value;
		boutonAtq.style.opacity = "0.5";
		boutonAtq.value = "Indisponible";
		boutonAtq.disabled = true;
		textAction.innerHTML = "Vous avez infligé "+atqJoueur+" points de dégats";
		boutonShield.disabled = true;
		boutonHeal.disabled = true;
		boutonPasserTour.disabled = false;
		
		boutonShield.style.opacity = "0.5";
		boutonHeal.style.opacity = "0.5";		
	}	
}

function shield (){
	
	if (boutonShield.disabled == false && mana.value >= manaShield){
		
		dmgBoss = dmgBoss/2;
		boutonShield.style.opacity = "0.5";
		boutonShield.value = "Indisponible";
		
		mana.value -= manaShield;
		mana.innerHTML = mana.value;
		
		textAction.innerHTML = "Votre sort vous protège de 50% des attaques du monstre. Vous avez conssomé "+manaShield+" points de Mana.";
		
		boutonShield.disabled = true;
		boutonAtq.disabled = true;
		boutonHeal.disabled = true;
		boutonPasserTour.disabled = false;
		
		boutonAtq.style.opacity = "0.5";
		boutonHeal.style.opacity = "0.5";}
	else{
		textAction.innerHTML = "Vous n'avez plus assez de Mana.";}
}

function heal (){
	
	if (boutonHeal.disabled == false && mana.value >= manaHeal){
		
		HP.value += healJoueur;
		HP.innerHTML = HP.value;
		
		mana.value -= manaHeal;
		mana.innerHTML = mana.value;
		
		boutonHeal.style.opacity = "0.5";
		boutonHeal.value = "Indisponible";
		boutonHeal.disabled = true;
		
		textAction.innerHTML = "Vos points de vie remontent de "+healJoueur+" points. Vous avez consommé "+manaHeal+" points de Mana";
		
		
		boutonAtq.disabled = true;
		boutonShield.disabled = true;
		boutonPasserTour.disabled = false;
		
		boutonAtq.style.opacity = "0.5";
		boutonShield.style.opacity = "0.5";}
		
	else{
		textAction.innerHTML = "Vous n'avez plus assez de Mana.";}
	
}

// Fonctions attaque boss //

function bossAtq (){
	
	HP.value -= dmgBoss;
	HP.innerHTML = HP.value;
	textAction.innerHTML = "Jean-Jack vous inflige "+dmgBoss+" points de dégats dans la mouille";
}


// Fonction reinitialise bouton //

function enableButton (){
	
	boutonAtq.disabled = false;
	boutonAtq.value = "Attaquer";
	boutonAtq.style.opacity = "1";
	
	boutonShield.disabled = false;
	boutonShield.value = "Sort de protection";
	boutonShield.style.opacity = "1";
	
	boutonHeal.disabled = false;
	boutonHeal.value = "Se soigner";
	boutonHeal.style.opacity = "1";	
	
	boutonPasserTour.disabled = true;		
}

function nombreTour (){
	
}

	boutonAtq.onclick = atq;
	boutonHeal.onclick = heal;
	boutonShield.onclick = shield;
	boutonPasserTour.addEventListener("click",bossAtq);
	boutonPasserTour.addEventListener("click",enableButton);
	



