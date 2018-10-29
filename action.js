const imageLink = document.getElementById('image-link');
const topInput = document.getElementById('top-input');
const bottomInput = document.getElementById('bottom-input');
const addMeme = document.getElementById('add-meme');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');

//let topMeme1 = document.getElementById('top-meme-1');
let topMeme2 = document.getElementById('top-meme-2');
let topMeme3 = document.getElementById('top-meme-3');
let bottomMeme1 = document.getElementById('bottom-meme-1');
let bottomMeme2 = document.getElementById('bottom-meme-2');
let bottomMeme3 = document.getElementById('bottom-meme-3');

// adding EVENT LISTENERS
// add Meme button .... 
//      if topMeme1.innerHTML = ""


addMeme.addEventListener('click', ()=> {
    document.getElementById('top-meme-1').innerHTML = topInput.value;
    //meme1.style.background-color = 'red';
    alert('you made a change');
    //topInput.style.backgroundColor = "red";
});