var slideIndex = 0;
showSlides();

var isSearchExpanded = false;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].className = slides[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].className += " active";
    setTimeout(showSlides, 6000); // Change image every 5 seconds
}

function expandSearch(){
    isSearchExpanded = true;
    var navigation_container_element = $(".navigation_container")[0];
    navigation_container_element.style.display = "none";

    var input_container_element = $(".search_container")[0];

    var input_element = $(".search_input_container")[0];
    input_element.style.display = "flex";
}

function collapseSearch(){
    isSearchExpanded = false;
    var navigation_container_element = $(".navigation_container")[0];
    navigation_container_element.style.display = "flex";

    var input_container_element = $(".search_container")[0];

    var input_element = $(".search_input_container")[0];
    input_element.style.display = "none";
}

$(document).ready(function(){
    console.log("document ready");
    $(".logo_container").click(function () {
        console.log("logo container pressed");
        alert("jquery works");
    });

    $(".search_input").focusout(function(){
        console.log("focus is out");
        collapseSearch();
    });
    
    $(".image_button_container").click(function(event){
        console.log("search button pressed");
        if(isSearchExpanded){
            collapseSearch();
        }else{
            expandSearch();
        }
    });

    $(".home_item").click(function(){
        console.log("home pressed");
        window.location = "index.html"
    });
    $(".gallery_item").click(function(){
        console.log("gallery pressed");
        window.location = "gallery.html"
    });
    $(".about_item").click(function(){
        console.log("about pressed");
        window.location = "about.html"
    });
});

