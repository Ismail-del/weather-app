

console.log("HEeeeeeeeeeeeeeello")



const weatherForm = document.querySelector('form')       
const search = document.querySelector('input')
const messageOne = document.querySelector('#message1');
const messageTwo = document.querySelector('#message2');




weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const city = search.value;
    messageOne.textContent = "empty"
    fetch('/weather?address='+search.value)
        .then((response) => {
            response.json().then((data) => {
                if (data.address.error){
                     
                }else{
                    console.log(data.address)
                    messageTwo.textContent = data.address.name.weather
                    messageOne.textContent = data.address.name.temperature
                    
                    // messageOne.textContent = data.address.name;
                }
            })
        })
})