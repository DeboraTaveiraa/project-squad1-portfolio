var imgFacebook = document.querySelector(".redes-sociais .facebook img");
var imgInstagram = document.querySelector(".redes-sociais .instagram img");
var imgGitHub = document.querySelector(".redes-sociais .github img");

function mouseEmCima (image) {
    switch (image) {
        case imgFacebook:
            image.src = "/public/images/face-hover.png";
            break;

        case imgInstagram:
            image.src = "/public/images/insta-hover.png";
            break;
        
        case imgGitHub:
            image.src = "/public/images/github-hover.png";
            break;
    }
}

function mouseFora (image) {
    switch (image) {
        case imgFacebook:
            image.src = "/public/images/facebook.png";
            break;
            
        case imgInstagram:
            image.src = "/public/images/instagram.png";
            break;
        
        case imgGitHub:
            image.src = "/public/images/github.png";
            break;
    }
}