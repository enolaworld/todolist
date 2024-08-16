//selectionner les elements du formulaire
const form = document.querySelector("form");

// Fct pour stocker la liste TODO dans le localstorage
function storeList() {
  window.localStorage.todoList = list.innerHTML;
}

//fct pour récupérer les taches depuis le localstorage
function getTodos() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`;
  }
}

//harger les tâches depuis le localstorage lorsque la page est chargée
window.addEventListener("load", getTodos);

// Ajouter un éléments sur la TODO liste
form.addEventListener("submit", (e) => {
  //e.preventDefault( evite de recharger la page) qd tu valides le formulaire
  e.preventDefault();

  //en rajouter += on evite d'écraser les éléments qu'on rajoute
  list.innerHTML += `<li>${item.value}</li>`;
  //pour que l'input se vide à chaque qu'on a validé.
  item.value = "";
  storeList();
});

// Enlèver un élément sur la TODO liste
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
});
