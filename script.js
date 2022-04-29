const form = document.getElementById("form")
const password1El = document.getElementById("password1")
const password2El = document.getElementById("password2")
const messageContainer = document.querySelector(".message-container")
const message = document.getElementById("message")

let isValid = false

function validateForm() {
  //Uso de la API Constraint
  isValid = form.checkValidity()

  //Estila el mensaje en caso de error
  if (!isValid) {
    message.textContent = "Por favor rellene todos los campos"
    message.style.color = "red"
    messageContainer.style.borderColor = "red"
    return
  }
  if (password1El.value === password2El.value) {
    passwordMatch = true
    password1El.style.borderColor = "green"
    password2El.style.borderColor = "green"
    console.log("manual waypoint")
  } else {
    passwordMatch = false
    message.textContent = "Verifique que las contraseñas coincidan"
    messageContainer.style.borderColor = "red"
    message.style.color = "red"
    password1El.style.borderColor = "red"
    password2El.style.borderColor = "red"
    return
  }
  if (isValid && passwordMatch) {
    message.textContent = "Satisfactoriamente registrado"
    message.style.color = "green"
    messageContainer.style.borderColor = "green"
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.celular.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  }
  console.log(user)
}

function processForm(event) {
  event.preventDefault()

  //Validates form
  validateForm()
  if (isValid && passwordMatch) {
    storeFormData()
  }
}

// Event listener

form.addEventListener("submit", processForm)
