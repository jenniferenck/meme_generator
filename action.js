var imageURL = document.getElementById('image-link').value;
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
    
    createMeme(imgArr.length-1);
    event.preventDefault();
    document.querySelector('form').reset();
});

//OLD CODE... to remove

// createMeme();
    //document.querySelector('form').reset();

// addMeme.addEventListener('click', function(event) {
//     if (topMeme1.innerHTML === "TOP CAPTION"){
//         var img = document.createElement('img');
//         img.src = imageInput.value;
//         meme1.appendChild(img);

//         topMeme1.innerHTML = topInput.value;
//         bottomMeme1.innerHTML = bottomInput.value; 
//         alert('you just clicked: ' + event.target.innerText);
//         event.preventDefault();
//         document.querySelector('form').reset();
//     } else if (topMeme2.innerHTML === "TOP CAPTION") {
//         topMeme2.innerHTML = topInput.value;
//         bottomMeme2.innerHTML = bottomInput.value; 
//         alert('you just clicked: ' + event.target.innerText);
//         event.preventDefault();
//         document.querySelector('form').reset();
//     } else if (topMeme3.innerHTML === "TOP CAPTION"){
//         topMeme3.innerHTML = topInput.value;
//         bottomMeme3.innerHTML = bottomInput.value; 
//         alert('you just clicked: ' + event.target.innerText);
//         event.preventDefault();
//         document.querySelector('form').reset();
//     } else {
//         alert("You need to clear one of your saved memes below to add a new one")
//     }
// });

// clearMeme1.addEventListener('click', ()=> {
//     topMeme1.innerHTML = "TOP CAPTION";
//     bottomMeme1.innerHTML = "BOTTOM CAPTION";
// });


// const clearMeme1 = document.getElementById('clear-meme-1');
// const clearMeme2 = document.getElementById('clear-meme-2');
// const clearMeme3 = document.getElementById('clear-meme-3');

// const meme1 = document.getElementById('meme-1');
// const meme2 = document.getElementById('meme-2');
// const meme3 = document.getElementById('meme-3');

// const topMeme1 = document.getElementById('top-meme-1');
// const topMeme2 = document.getElementById('top-meme-2');
// const topMeme3 = document.getElementById('top-meme-3');

// const bottomMeme1 = document.getElementById('bottom-meme-1');
// const bottomMeme2 = document.getElementById('bottom-meme-2');
// const bottomMeme3 = document.getElementById('bottom-meme-3');