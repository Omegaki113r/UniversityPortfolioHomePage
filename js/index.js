const facebook_link = "https://facebook.com";
const twitter_link = "https://twitter.com";
const instagram_link = "https://instagram.com";
const youtube_link = "https://youtube.com";
const linkedin_link = "https://linkedin.com";

var SCREEN_WIDTH = screen.width;
var slideIndex = 0;
var isSearchExpanded = false;
var inputChanged = false;

var RunningTimer = null;

showSlides();

function timer(callback, delay) {
    var id, started, remaining = delay, running
    this.start = function() {
        running = true
        started = new Date()
        id = setTimeout(callback, remaining)
    }
    this.pause = function() {
        running = false
        clearTimeout(id)
        remaining -= new Date() - started
    }
    this.getTimeLeft = function() {
        if (running) {
            this.pause()
            this.start()
        }
        return remaining
    }
    this.getStateRunning = function() {
        return running
    }
    this.stop = function(){
        clearTimeout(id);
    }

    this.start()
}

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

function openNewTab(link){
    var newTab = window.open(link, '_blank');
        newTab.location;
}

function handleInputChanged(){
    collapseSearch();
}

$(document).ready(function(){
    console.log("document ready");
    $(".logo_container").click(function () {
        console.log("logo container pressed");
        alert("jquery works");
    });
    $(".search_input").focusout(function(){
        console.log("focus is out");
        SCREEN_WIDTH = screen.width;
        if(SCREEN_WIDTH >= 768){
        }else{
            var inputText = $(".search_input").val();
            if(inputText == ""){
                $(".search_input").val("");
                collapseSearch();
            }else{

            }
            
            
        }
    });
    $(".search_input").on('input',function(){
        console.log("change event");
        SCREEN_WIDTH = screen.width;
        if(SCREEN_WIDTH >= 768){

        }else{
            inputChanged = true;
            if(RunningTimer == null){
                RunningTimer = new timer(handleInputChanged,8000);
            }else{
                RunningTimer.stop();
                RunningTimer = null;
                RunningTimer = new timer(handleInputChanged,8000);
            }
            
        }
        
    });
    $(".image_button_container").click(function(event){
        SCREEN_WIDTH = screen.width;
        if(SCREEN_WIDTH >= 768){
            //this means website is running either on tablet or PC
            console.log("search button on tablet or PC");
            var searchText = $(".search_input").val().trim();
            if(searchText == ""){
                // user hasn't inserted any text
                console.log("no values entered");
            }else{
                // move user to the requested page
                switch(searchText.toLowerCase()){
                    case "home":
                        $(".search_input").val("");
                        window.location = "index.html";
                        break;
                    case "gallery":
                        $(".search_input").val("");
                        window.location = "gallery.html";
                        break;
                    case "about":
                        $(".search_input").val("");
                        window.location = "about.html"
                        break;
                    default:
                        console.log("User entered a unknown value.. handle it here");
                        alert("Page Not Found");
                        break;
                }
            }
            console.log(searchText);

        }else{
            // this means website is running on mobile
            console.log("search button on mobile");
            if(isSearchExpanded){
                var searchText = $(".search_input").val().trim();
                if(searchText == ""){
                    // user hasn't inserted any text
                    console.log("no values entered");
                    $(".search_input").val("");
                    collapseSearch();
                }else{
                    // move user to the requested page
                    switch(searchText.toLowerCase()){
                        case "home":
                            $(".search_input").val("");
                            window.location = "index.html";
                            break;
                        case "gallery":
                            $(".search_input").val("");
                            window.location = "gallery.html";
                            break;
                        case "about":
                            $(".search_input").val("");
                            window.location = "about.html"
                            break;
                        default:
                            console.log("User entered a unknown value.. handle it here");
                            alert("Page Not Found");
                            break;
                    }
                }
            }else{
                expandSearch();
                if(RunningTimer == null){
                    //RunningTimer = new timer(handleInputChanged,8000);
                }else{
                    RunningTimer.stop();
                    RunningTimer = null;
                    //RunningTimer = new timer(handleInputChanged,8000);
                }
            }
        }
        
    });

    $(".fashion_design").click(function(){
        alert("fashion design pressed");
    });
    $(".visual_communication").click(function(){
        alert("visual communication pressed");
    });
    $(".interior_architecture").click(function(){
        alert("interior architecture pressed");
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
    $(".facebook").click(function(){
        openNewTab(facebook_link);
    });
    $(".twitter").click(function(){
        openNewTab(twitter_link);
    });
    $(".instagram").click(function(){
        openNewTab(instagram_link);
    });
    $(".youtube").click(function(){
        openNewTab(youtube_link)
    });
    $(".linkedin").click(function(){
        openNewTab(linkedin_link)
    });
});

