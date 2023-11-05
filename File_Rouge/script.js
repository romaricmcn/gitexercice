// Obtenez la modale
var modal = document.getElementById("myModal");

// Obtenez l'image et insérez-la dans la modale - utilisez son attribut "alt" comme légende
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Obtenez tous les éléments avec la classe 'modal-trigger' et attachez l'ouverture de la modale à un clic
var images = document.getElementsByClassName('modal-trigger');
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

// Obtenez l'élément <span> qui ferme la modale
var span = document.getElementsByClassName("close")[0];

// Lorsque l'utilisateur clique sur <span> (x), fermez la modale
span.onclick = function() {
  modal.style.display = "none";
}