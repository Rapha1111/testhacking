function Check(){
	var code=document.code.code.value;
	if (code=="JeSuisInvisible") {
	    alert("Bravo, vous avez réussi cette mission retournez au menu et choisissez la mission suivante");
      document.cookie = 'niveau=5; path=/;'
	} else { 
	    alert("Mauvais mot de passe"); 
	}
}