const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



function letterEffect(event){
    console.log(nameDiv.childNodes)
    var i = 0;

    nameDiv.childNodes.forEach(child => {
        if(child instanceof Text) return;
        let interval = null;
        clearInterval(interval);
    
        interval = setInterval(() => {
            child.innerText = child.innerText.split("").map((letter, index) => {
                // if (event.target.dataset.original.charCodeAt(index)==13) return "\n";
                if (index<i) return child.dataset.original[index];
                return String.fromCharCode(Math.floor(Math.random()*44+47));
            }).join("");
            if(i>child.dataset.original.length){
                clearInterval(interval);
            }
            i+=1/5;
        }, 80);
        
    });
}

document.getElementById("name").onmouseover = event => letterEffect(event);
let nameDiv = document.getElementById("name");
document.querySelector("body").addEventListener("touchstart", event => letterEffect(event));

console.log(document.getElementById("name"))