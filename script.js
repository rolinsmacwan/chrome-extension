window.onload = startingMemes();

const images =[];
const memesId = document.getElementById('memesId');


document.getElementById("forword").addEventListener("click", forword);
document.getElementById("backword").addEventListener("click", backword);
// document.getElementById("memesId").addEventListener("onerror", errorSolve);
memesId.onerror = function() {errorSolve()};


function startingMemes() {
    fetch('https://meme-api.com/gimme/15')
        .then(response => response.json())
        .then(body => {
            var count = body.count;
            for (let i = 0; i < count; i++) {
                images[i] = body.memes[i].preview[2]
            }
        })
    }

let i = 0;

function forword(){
    i++;
    if(i>images.length - 1){
        i = 0;
    }
    memesId.src = images[i];
    console.log(memesId.src)
}

function backword(){
    i--;
    if(i<0){
        i = images.length-1;
    }
    memesId.src = images[i];
    console.log(memesId.src)
}

function errorSolve(){
    memesId.src=images[0];
}

const image = document.querySelectorAll("img");

image.forEach((image) => {
  let imgsrc = image.getAttribute("src");
  if (imgsrc === "") {
    image.src = images[0];
  }
});
