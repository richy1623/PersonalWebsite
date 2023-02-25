const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.getElementById("name").onmouseover = event => {
    var i = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((letter, index) => {
            if (index<i) return event.target.dataset.original[index];
            return String.fromCharCode(Math.floor(Math.random()*44+47));
        }).join("");
        if(i>event.target.dataset.original.length){
            clearInterval(interval);
        }
        i+=1/2;
    }, 55);
}