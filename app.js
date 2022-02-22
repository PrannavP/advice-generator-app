var idDisplay = document.getElementById('id_no');
var quoteDisplay = document.getElementById('quote-display');
const button = document.querySelector('button');

function getAdvice(api){
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
            // console.log(data);
            console.log(data.slip.advice);
          
            //displaying data
            idDisplay.innerHTML = `A D V I C E  # ${data.slip.id}`;;
            quoteDisplay.innerHTML = `<center>${data.slip.advice}</center>`;
      });
};

button.addEventListener('click', getAdvice);