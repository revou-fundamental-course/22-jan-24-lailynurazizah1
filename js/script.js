let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(displayImages, 2000);
}

function validateForm() {
    const name = document.forms["contact-us"]["name"].value;
    const email = document.forms["contact-us"]["email"].value;
    const items = document.forms["contact-us"]["items"].value;
    const messages = document.forms["contact-us"]["messages"].value;

    if (name == ""," "||email == ""," "||items == ""||messages == ""," ") {
        document.getElementById("error").innerHTML = "Tidak boleh ada yang kosong!"
        return false;
    }

    setContactUs(name, email, items, messages);

    return false;
}

function setContactUs(name, email, items, messages) {
    document.getElementById("error").innerHTML = " ";
}