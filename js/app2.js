//Problem: User when clicking on image goes to a dead end, poor UX
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"><div id="inner"></div></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//Keep track of image index for prev/next, we will use a list index
//position to determine where we are and what it means to move forward
//and backwards by 1.
var $index = 0;

//this is grabbing the list items from the imageGallery element and
//we are assigning the length total
//this makes it flexible to expand the gallery or take away
var $galleryLength = $("#thumbnail-photos li").length;

//2.1 An image
$overlay.children("div").append($image);


//2.2 add caption
$overlay.children("#inner").append($caption);

// Add some nav buttons and assign unique ids to them!
$overlay.children("#inner").append("<button id='btnPrev'> < </button>");
$overlay.children("#inner").append("<button id='btnNext'> > </button>");

//2. Add overlay
$("body").append($overlay);


// Update image overlay
// I moved the updating of the overlay to its own function
// since we use it three times in three differnet area, this makes code
// writting cleaner
var updateImage = function(imageLocation, imageCaption){

  //1.2 update the overlay with the image linked in the link
  $image.attr("src", imageLocation);

  //1.3 Get child <img> alt atrbute and set caption
  $caption.text(imageCaption);


};

//1. Click <a> event to an image
$("#thumbnail-photos a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  var imageCaption =  $(this).next("figcaption").text();

  //update index to current selected image
  $index = $(this).closest("li").index(); 

  //this is calling that new Update overlay function above
  updateImage(imageLocation, imageCaption);

  //1.1 Show the overlay
  $overlay.slideDown(imageLocation);
});


//Button prev next function
var prevNext = function(prev ) {
  //set prev to true to move backwards in the index

  //if flag set move backwards, if not move forwards
  if(!prev) { $index++; }
  else { $index--; }

  //if out of index reset
  if ($index < 0) { $index = $galleryLength-1;}
  if ($index >= 12) { $index = 0; }

  //Grab the element by index and then get the link
  var newImgSelected = $("#thumbnail-photos li").get($index).getElementsByTagName("a");

  //grab link information
  var imageLocation = $(newImgSelected).attr("href");
  var imageCaption =  $(newImgSelected).next("figcaption").text();

  //Update Overlay
  updateImage(imageLocation, imageCaption);
};

//Button events

$("#btnPrev").click(function(event){
  prevNext(true);
});

$("#btnNext").click(function(event){
  prevNext();
});

// Listen for arrow keys
		$(window).bind('keydown', function(e){

			if (e.keyCode == 37) {
				prevNext(true);
			}

			else if (e.keyCode==39) {
				prevNext();
			}

			else if (e.keyCode==27) { //esc
				$($overlay).hide("fast");
			}

		});


//3. When overlay is click
$overlay.click(function(event){
  //3.1 Hide the overlay  

    if(event.target.id == "overlay" || event.target.id == "inner" || event.target.id == "<img>")
    $(this).slideUp("fast");

});








