


function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

   
    const formData = new FormData(event.target);
    for (let entry of formData.entries()) {
        console.log(entry[0] + ": " + entry[1]);
    }
}

const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', handleFormSubmit);
}


console.log('This is the script.js file for the sewage detection website.');
