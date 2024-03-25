const scriptURL = 'https://script.google.com/macros/s/AKfycbzfgLP7EB3gF_Q0yb6PxOeJZ1ZkQlMORA-4wi0RdPgcect7gtBL2k8aBSE5T_ovySZf/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById('msg')
      
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML='Thank you for Subscribing'
        setTimeout(function(){
            msg.innerHTML=''
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})