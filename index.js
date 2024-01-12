console.log("hello world");

const boca = document.querySelector("#boca")

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Your response is sent");
}

function mouseover(){
	alert("One day I'll be here!")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

boca.addEventListener('mouseover', mouseover);