const changeImg = (e) => {
    let elem = document.querySelector(".bigImage");
    let source = e.target.getAttribute("src");
    let newSource = source.replace("Small","Big");
    elem.setAttribute("src", newSource);
    elem.onerror = function(){
        alert("error");
    }
}

const imgError = () => {
    alert("error");
}

let images = document.querySelectorAll(".smallImage");
console.log(images);
for (i = 0; i < images.length; i++) {
    console.log(images[i]);
    images[i].addEventListener('click', changeImg);
    images[i].addEventListener('error', imgError);
}