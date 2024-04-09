// // Crea un semplice form di registrazione con un input field in cui l’utente possa inserire il proprio nome.
// // A fianco di questo input field crea due pulsanti: uno salverà il valore in localStorage, uno rimuoverà
// // il valore precedentemente salvato (se presente). Mostra sopra l’input field il valore precedentemente salvato,
// // se presente.

// const form = document.querySelector("form");
// const deleteBtn = document.getElementById("deleteBtn")
// const saveBtn = document.getElementById("saveBtn")
// const usernameField = document.getElementById("usernameField")

// const FORM_MEMORY = "form-memory";

// form.addEventListener("submit", (event) =>{
//     event.preventDefault()

//     const username = usernameField.value
//     localStorage.setItem(FORM_MEMORY, username);

//   console.log("SALVATO");
// })

// saveBtn.addEventListener("click", ()=>{
//     console.log("loading username...");

//     const savedUsername = localStorage.getItem(FORM_MEMORY);
//     if (savedUsername) {
//         usernameField.value = savedUsername;
//       } else {
//         alert("Please, insert a username and try again");
//       }
// })

const form = document.querySelector("form");
const deleteBtn = document.getElementById("deleteBtn");
const saveBtn = document.getElementById("saveBtn");
const usernameField = document.getElementById("usernameField");

const FORM_MEMORY = "form-memory";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameField.value;
  localStorage.setItem(FORM_MEMORY, username);
  console.log("Username saved:", username);
});

saveBtn.addEventListener("click", () => {
  console.log("Loading username...");
  const savedUsername = localStorage.getItem(FORM_MEMORY);
  if (savedUsername) {
    usernameField.value = savedUsername;
    console.log(usernameField.value);
  } else {
    alert("Please, insert a username and try again");
  }
  form.reset();
});

deleteBtn.addEventListener("click", () => {
  localStorage.removeItem(FORM_MEMORY);
  form.reset();
  console.log("Username deleted from localStorage");
});
