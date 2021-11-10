// --- CONTACT --- //

const subject_input = document.querySelector("#subject");
const message_input = document.querySelector("#message");
const contact_submit = document.querySelector("#contactSubmit");


function contact_function(){
  if(subject_input.value != "" && message_input.value != ""){
    contact_submit.style.color = "black";
    contact_submit.style.cursor = "pointer";
    contact_submit.setAttribute("onclick", `window.open("mailto:contact@nala.com?&subject=${subject_input.value}&body=${message_input.value}","mail")`);
  } else {
    contact_submit.style.color = "#A6A6A6";
    contact_submit.style.cursor = "not-allowed";
    contact_submit.innerHTML = `SEND MAIL`;
    contact_submit.removeAttribute("onclick");
  }
}

// --- FAQ --- //

const faqDiv = document.querySelector('#faqDiv');

//Add questions here: 
//['Question', 'Answer']
const faqContent = {
    1: ['What is Nalas favourite food?', 'Nala generally loves all types of food, but her absolute favourite type of food is cooked chicken. However, she only gets to eat cooked chicken on special occasions. She is also very fond eating leftovers from her family. Nala also eats a lot of dog-food in order to get the micronutrients that she needs.'], 
    2: ['What to do when your dog eats chocolate?', 'If you believe your dog ate chocolate, call your veterinarian immediately or call the Pet Poison Helpline for advice. Based on your dog’s size and the amount and type of chocolate consumed, your veterinarian may recommend that you monitor your dog for the clinical signs listed above and call back if his condition worsens.'],
    3: ['Why do dogs like being pet?', 'The reasons dogs like being pet likely come down to the reasons that they like spending so much time with humans in the first place.     Over the 20,000 to 40,000 years or so since dogs first became domesticated, they’ve become pros at communicating with us—and us with them. Unlike lots of other species of animals, dogs seem more than happy to communicate with us on our own terms, accepting things that they might not accept from peers of their own species, such as hugs and sustained direct eye contact.     At the same time, dogs have also formed a chemical bond with us. When we pet, snuggle, or otherwise interact with them, both of us experience a surge in oxytocin, also known as the love hormone.'],
    4: ['Why do dogs roll around in grass?', "The first explanation: they’re trying to mask their scent. Grass is covered in smells, from humans, other animals, and from the environment around it. Rolling around in the grass is a way to rub those scents into their fur, which, for a dog’s ancestors, was a great way to conceal their own natural scent and be more unassuming while on the hunt for prey. Rolling in the grass also might just feel good. If your dog is happy and relaxed as they roll, there's a good chance they're enjoying the sensation and that there's nothing problematic behind it"]
};

//Creating the FAQ "boxes"
for(const idx in faqContent){
    const div = document.createElement('div');
    div.classList.add('faqChild');
    div.id = idx; //Assigning an ID with a unique value to each element that we create so that we can access specific elements later
    
    const h3 = document.createElement('h3');
    h3.innerText = faqContent[idx][0];
    h3.id = `h3_${idx}`;
    const img = document.createElement('img');
    img.src = 'images/contact/arrow-down.png';
    img.id = `img_${idx}`;

    const hiddenParagraph = document.createElement('p');
    hiddenParagraph.innerText = faqContent[idx][1];
    hiddenParagraph.id = `p${idx}`;
    hiddenParagraph.style.display = 'none';

    div.append(h3, img, hiddenParagraph);
    faqDiv.append(div);
}

faqDiv.addEventListener('click', function(e){
    let currentId = e.target.id.slice(-1); //gets the id of the element that we click on if it is inside faqDiv - we only want the number at the end of the id "slice(-1)"
    if (currentId == 'v'){ //currentId will have a value of 'v' if you click outside of the faqDiv children elements, but still inside of faqDiv's margin. Therefore we have to return the function to prevent error if this happens
        return;
    }
    //Selecting relevant elements based on the id we are looking for
    const paragraphToBeChanged = document.querySelector(`#p${currentId}`);
    const paragraphState = paragraphToBeChanged.style.display;
    const imageToBeChanged = document.querySelector(`#img_${currentId}`);

    //gives the selected element a display state of none/block depending on its previous state
    if (paragraphState == 'block'){
        paragraphToBeChanged.style.display = "none";
        imageToBeChanged.style.transform = "rotate(0deg)"; //rotates the image back to its default position
    } else{
        paragraphToBeChanged.style.display = "block";
        imageToBeChanged.style.transform = "rotate(180deg)"; //flips the image upside down (rotates 180 degrees)
    }
});


