const imageInput = document.getElementById('image-link');
const topInput = document.getElementById('top-input');
const bottomInput = document.getElementById('bottom-input');
const addMeme = document.getElementById('add-meme');
const clearMeme1 = document.getElementById('clear-meme-1');
const clearMeme2 = document.getElementById('clear-meme-2');
const clearMeme3 = document.getElementById('clear-meme-3');

const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');

const topMeme1 = document.getElementById('top-meme-1');
const topMeme2 = document.getElementById('top-meme-2');
const topMeme3 = document.getElementById('top-meme-3');
const bottomMeme1 = document.getElementById('bottom-meme-1');
const bottomMeme2 = document.getElementById('bottom-meme-2');
const bottomMeme3 = document.getElementById('bottom-meme-3');

// adding EVENT LISTENERS

addMeme.addEventListener('click', function(event) {
    if (topMeme1.innerHTML === "TOP CAPTION"){
        img.src = imageInput.value;
        topMeme1.innerHTML = topInput.value;
        bottomMeme1.innerHTML = bottomInput.value; 
        alert('you just clicked: ' + event.target.innerText);
        event.preventDefault();
        document.querySelector('form').reset();
    } else if (topMeme2.innerHTML === "TOP CAPTION") {
        topMeme2.innerHTML = topInput.value;
        bottomMeme2.innerHTML = bottomInput.value; 
        alert('you just clicked: ' + event.target.innerText);
        event.preventDefault();
        document.querySelector('form').reset();
    } else if (topMeme3.innerHTML === "TOP CAPTION"){
        topMeme3.innerHTML = topInput.value;
        bottomMeme3.innerHTML = bottomInput.value; 
        alert('you just clicked: ' + event.target.innerText);
        event.preventDefault();
        document.querySelector('form').reset();
    } else {
        alert("You need to clear one of your saved memes below to add a new one")
    }
});

clearMeme1.addEventListener('click', ()=> {
    topMeme1.innerHTML = "";
    bottomMeme1.innerHTML = "";
});

/*
let imageReader = new fileReader(); // example was fileReader()
imageReader.onload = function () {
    let img = new Image;
    img.src = ImageReader.result;
}
*/