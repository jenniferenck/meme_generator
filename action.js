
const topInput = document.getElementById('top-input');
const bottomInput = document.getElementById('bottom-input');
const addMeme = document.getElementById('add-meme');
const memeContainer = document.getElementById('meme-container')

var imgArr = [];

function createMeme (index){
    // create new element structure:
    var meme = document.createElement('div');
    meme.classList.add('meme');

    var topCaption = document.createElement('p');
    topCaption.innerHTML = topInput.value;
    topCaption.classList.add('top-meme');

    var bottomCaption = document.createElement('p');
    bottomCaption.innerHTML = bottomInput.value;
    bottomCaption.classList.add('bottom-meme');

    var imageURL = document.getElementById('image-link').value;
    var image = document.createElement('img');
    image.src = imageURL;
    
    // append children:
    memeContainer.appendChild(meme);
    meme.appendChild(image);
    meme.appendChild(topCaption);
    meme.appendChild(bottomCaption);
}

// adding EVENT LISTENERS

addMeme.addEventListener('click', function(event){
    imgArr.push(imageURL);
    
    // need conditions if URL isn't filled...
    
    createMeme(imgArr.length-1);
    event.preventDefault();
    document.querySelector('form').reset();
});

// need global meme variable before we can select them
// var meme = document.getElementsByClassName('meme');
// for (let i=0; i<meme.length; i++){
//     meme[i].addEventListener('click', ()=> {
//         alert('You clicked a meme');
//    })
// }

memeContainer.addEventListener("click", function (event) {
    if(event.target && event.target.matches('img') || event.target.matches('p')) {
		// List item found!  Output the ID!
        alert('a meme was clicked')
	}
})