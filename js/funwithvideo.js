

//fun with video

var $videoOverlay = $('<div id="video-overlay"><div id="video-wrapper"></div></div>');
var $video = $('<iframe width="560" height="315" src="https://www.youtube.com/embed/X9ZoKKQsxis" frameborder="0" allowfullscreen></iframe>');
//var $videocaption = $('<p></p>');

$videoOverlay.children("#video-wrapper").append($video);
//$videoOverlay.children("div").append($videocaption);
$("body").append($videoOverlay);

//var updateVideo = function(videoLocation, videoCaption){
   // $video.attr("src", videoLocation);
   // $caption.text(videoCaption);
//}

$("#video-gallery a").click(function(event){
    event.preventDefault();
    
    $videoOverlay.slideDown();
});

$videoOverlay.click(function(event){
  //3.1 Hide the overlay  

  
    $(this).slideUp("fast");

});

$(window).bind('keydown', function(e){ 
    if (e.keyCode==27) { //esc
				$($videoOverlay).hide("fast");
			}

		});


