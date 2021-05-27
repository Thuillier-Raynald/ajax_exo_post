var form = document.getElementById('formId');
form.addEventListener('submit', valider);

function valider(event) {
	event.preventDefault();	// bloque le comportement par défaut du navigateur (qui est de recharger la page)
	
	var elt = document.getElementById('reponse');
	
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status == 200) {
			elt.innerHTML = xhr.response ;
		} else if (xhr.status == 404) {
			elt.innerHTML = "PAGE INTROUVABLE" ;
		}
	}

	// récupération des données du formulaire
	var nom = document.getElementById('nom').value ;
	var prenom = document.getElementById('prenom').value ;
	var age = document.getElementById('age').value ;
	
	var data = 'nom=' + encodeURIComponent(nom) + '&prenom=' + encodeURIComponent(prenom) + '&age=' + encodeURIComponent(age) ;
	// POST
	xhr.open('POST', './xhr_POST.php');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send(data)
}
