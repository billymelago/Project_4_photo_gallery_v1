//app.js
//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");


// An image
$overlay.append($image);
// A caption
$overlay.append($caption);
// Add overlay
$("body").append($overlay);
  
  




//1. Capture the click event on a link to an image
$("#thumbnail-photos a").click(function( event ){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    //1.2 Update overlay with the image linked in the link
    $image.attr("src", imageLocation);
    
    //Show the overlay
    $overlay.show(); 
    
  //1.3 Get child's alt attribute and set caption
    var captionText = $(this).next('figcaption').text();
    $caption.text(captionText);
    
});
  

//3. When overlay is clicked
$overlay.click(function(){
    //3.1 Hide the overlay
    $overlay.slideUp("fast");
});
  