// Obtenez la modale
const modal = document.getElementById("myModal");

// Obtenez l'image et insérez-la dans la modale - utilisez son attribut "alt" comme légende
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

// Obtenez tous les éléments avec la classe 'modal-trigger' et attachez l'ouverture de la modale à un clic
const images = document.getElementsByClassName('modal-trigger');
for (let i = 0; i < images.length; i++) {
  let img = images[i];
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

// Obtenez l'élément <span> qui ferme la modale
const span = document.getElementsByClassName("close")[0];

// Lorsque l'utilisateur clique sur <span> (x), fermez la modale
span.onclick = function() {
  modal.style.display = "none";
}