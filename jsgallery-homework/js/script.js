/*Name this external file gallery.js*/

function upDate(preview) {
    let x = document.getElementById("image");
    x.innerHTML = preview.alt;
    x.style.backgroundImage = `url(${preview.src})`;
}
function unDo() {
    let x = document.getElementById("image");
    x.style.backgroundImage = "";
    x.innerHTML = "Hover over an image below to display here.";
}

        
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */