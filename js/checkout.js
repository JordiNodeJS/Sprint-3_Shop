// Get the input fields
const name = document.querySelector("#fName");
const lastName = document.querySelector("#fLastN");
const email = document.querySelector("#fEmail");
const password = document.querySelector("#fPassword");
const address = document.querySelector("#fAddress");
const phone = document.querySelector("#fPhone");

// Get the error elements
const errorPassword = document.querySelector("#errorPassword");
const errorName = document.querySelector("#errorName");
const errorPhone = document.querySelector("#errorPhone");

// regular expression
const fNameRegex = /[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{3,48}/
const fEmailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const fLastNRegex = /[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{3,64}/
const fPasswordRegex = /[A-Za-z0-9!?-]{4,8}/
// Exercise 6
function validate() {
  // Validate fields entered by the user: name, phone, password, and email
}









// Example starter JavaScript for disabling form submissions if there are invalid fields
;(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()

        }

        form.classList.add('was-validated')
      },
      false
    )
  })
})()
