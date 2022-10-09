document.querySelector('form').addEventListener('submit', function(event) {
  console.log('Formulário enviado!')
  event.preventDefault()
})

const fields = document.querySelectorAll('[required]')


function customValidation(event) {

  const field = event.target

  function verifyErrors() {
    let foundError = false;

    for (let error in field.validity) {
      //se nao for customError
      //então verifisa se tem outro erro

      if (error != "customError" && field.validity[error]) {
        foundError = error
      }
    }
    
    return foundError;
  }
  
  const error = verifyErrors()
  console.log(error)
  
  if(error) {
    field.setCustomValidity('Esse campo é obrigatório')
  } else {
    field.setCustomValidity('')
  }

}

for (let field of fields) {
  field.addEventListener('invalid', customValidation)
}