const topInput = document.getElementById('top-input');
const bottomInput = document.getElementById('bottom-input');
const addMeme = document.getElementById('add-meme');
const memeContainer = document.getElementById('meme-container')

var imgArr = [];

function createMeme (imageURL){
    // create new element structure:
    var meme = document.createElement('div');
    meme.classList.add('meme');

    var topCaption = document.createElement('p');
    topCaption.innerHTML = topInput.value;
    topCaption.classList.add('top-meme');

    var bottomCaption = document.createElement('p');
    bottomCaption.innerHTML = bottomInput.value;
    bottomCaption.classList.add('bottom-meme');

    var image = document.createElement('img');
    image.src = imageURL;
    
    // append children:
    memeContainer.appendChild(meme);
    meme.appendChild(image);
    meme.appendChild(topCaption);
    meme.appendChild(bottomCaption);
}

// EVENT LISTENERS

addMeme.addEventListener('click', function(event){
    event.preventDefault();  
    
    // capture image link and pass into createMeme function
    var imageURL = document.getElementById('image-link').value;
    //imgArr.push(imageURL);
    createMeme(imageURL);
    document.querySelector('form').reset();
});

memeContainer.addEventListener("click", function (event) {
    if(event.target && event.target.matches('img') || event.target.matches('p')) {
		// List item found!  Output the ID!
        alert('a meme was clicked')
	}
})

