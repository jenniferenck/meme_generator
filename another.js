const imageInput = document.getElementById('image-link');
const topInput = document.getElementById('top-input');
const bottomInput = document.getElementById('bottom-input');
const addMeme = document.getElementById('add-meme');
let canvas = document.getElementById('canvas');

canvas.width = canvas.height = 0; 

function generateMeme (img, topInput, bottomInput){
    canvas.width = img.width; 
    canvas.height = img.height;
}

addMeme.addEventListener('click', function(event) {
    let imageReader = new fileReader(); // example was fileReader()
    imageReader.onload = function () {
        let img = new Image;
        img.src = reader.result;
    }
    //bottomMeme1.innerHTML = bottomInput.value; 
    alert('you just clicked: ' + event.target.innerText);
    event.preventDefault();
    document.querySelector('form').reset();
});

// adding a photo: 



imageReader.readAsDataURL(imageLink.files[0])