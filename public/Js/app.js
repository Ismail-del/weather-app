

console.log("HEeeeeeeeeeeeeeello")



const weatherForm = document.querySelector('form')       
const search = document.querySelector('input')
const messageOne = document.querySelector('#message1');
const messageTwo = document.querySelector('#message2');
const messageThree = document.querySelector('#message3');
const messageFour = document.querySelector('#message4');



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const city = search.value;
    messageOne.textContent = "empty"
    fetch('/weather?address='+search.value)
        .then((response) => {
            response.json().then((data) => {
                if (data.address.error){
                     
                }else{
                    console.log(data)
                    messageTwo.textContent = "The weather is :" +data.address.name.weather;
                    messageOne.textContent = "Temperature : "+data.address.name.temperature;
                    messageThree.textContent = "Description :"+data.address.name.description;
                    messageFour.textContent = "City :"+data.address.name.city;
                    // messageOne.textContent = data.address.name;
                }
            })
        })
})