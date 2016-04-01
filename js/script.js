//this script places thumbnail pics on a page

var path = 'img/Thumbnails/';
var video = '<figure class="video-fig"> <a href="img/12.jpg"><img src="img/videoCover.jpg" width= "100%" alt="Batman Trailor"></a><figcaption class="video-figCap">Helmed by Phil Lord and Chris Miller, The Lego Batman Movie is the spiritual sequel to The Lego Movie. It stars Arnett and Fiennes alongside Michael Cera (Robin), Rosario Dawson (Batgirl) and Zach Galifianakis (the Joker). It hits theaters Feb. 10, 2017..</figcaption></figure>';

var thumbs = [
    {
    href: 'img/01.jpg" data-imagelightbox="h',    
    src: 'img/Thumbnails/01.jpg" title="Click to view" alt="Hay Bales. <strong>I love hay bales</strong>. Took this snap on a drive through the countryside past some straw fields.',
    figcaption: 'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'    
        },
    {
    href: 'img/02.jpg" data-imagelightbox="h',    
    src: 'img/Thumbnails/02.jpg" title="Click to view" alt="Lake. The lake was so calm today. We had a great view of the snow on the mountains from here.',
    figcaption: 'The lake was so calm today. We had a great view of the snow on the mountains from here.' 
        },
    {
    href: 'img/03.jpg" data-imagelightbox="h',    
    src: 'img/Thumbnails/03.jpg" title="Click to view" alt="Canyon. I hiked to the top of the mountain and got this picture of the canyon and trees below.',
    figcaption: 'I hiked to the top of the mountain and got this picture of the canyon and trees below.' 
        },
    {
    href: 'img/04.jpg" data-imagelightbox="h',    
    src: 'img/Thumbnails/04.jpg" title="Click to view" alt="Iceberg. It was amazing to see an iceberg up close, it was so cold but didn’t snow today.',
    figcaption: 'It was amazing to see an iceberg up close, it was so cold but didn’t snow today.' 
        },
    {
    href: 'img/05.jpg" data-imagelightbox="h',    
    src: 'img/Thumbnails/05.jpg" title="Click to view" alt="Desert. The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.',
    figcaption: 'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.' 
        },
    {
    href: 'img/06.jpg" data-imagelightbox="h',    
    src: 'img/Thumbnails/06.jpg" title="Click to view" alt="Fall. Fall is coming, I love when the leaves on the trees start to change color.',
    figcaption: 'Fall is coming, I love when the leaves on the trees start to change color.' 
        },
    {
    href: 'img/07.jpg" data-imagelightbox="h',    
    src: 'img/Thumbnails/07.jpg" title="Click to view" alt="Plantation. I drove past this plantation yesterday, everything is so green!',
    figcaption: 'I drove past this plantation yesterday, everything is so green!' 
        },
    {
    href: 'img/08.jpg" data-imagelightbox="h',    
    src: 'img/Thumbnails/08.jpg" title="Click to view" alt="Dunes. My summer vacation to the Oregon Coast. I love the sandy dunes!',
    figcaption: 'My summer vacation to the Oregon Coast. I love the sandy dunes!' 
        },
    {
    href: 'img/09.jpg" data-imagelightbox="h',    
    src: 'img/Thumbnails/09.jpg" title="Click to view" alt="Countryside Lane. We enjoyed a quiet stroll down this countryside lane.',
    figcaption: 'We enjoyed a quiet stroll down this countryside lane.' 
        },
    {
    href: 'img/10.jpg" data-imagelightbox="h',    
    src: 'img/Thumbnails/10.jpg" title="Click to view" alt="Sunset. Sunset at the coast! The sky turned a lovely shade of orange.',
    figcaption: 'Sunset at the coast! The sky turned a lovely shade of orange.' 
        },
    {
    href: 'img/11.jpg" data-imagelightbox="h',    
    src: 'img/Thumbnails/11.jpg" title="Click to view" alt="Cave. I did a tour of a cave today and the view of the landscape below was breathtaking.',
    figcaption: 'I did a tour of a cave today and the view of the landscape below was breathtaking.' 
        },
    {
    href: 'img/12.jpg" data-imagelightbox="h',    
    src: 'img/Thumbnails/12.jpg" title="Click to view" alt="Bluebells. I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.',
    figcaption: 'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.' 
        }
                   
];

var images;

function print(message) {
  document.write(message);
}

function getImages( prices ) {
  var listHTML = '<ul id="thumbnail-photos">';
    
  for ( var i = 0; i < prices.length; i += 1) {
      link = thumbs[i].href;
      images = thumbs[i].src;
      caption = thumbs[i].figcaption;
      
      
      
    listHTML += '<li><figure><a href="' + link + '">';
    listHTML += '<img src="' + images + '"/></a>'; 
    listHTML += '<figcaption>' + caption + '</figcaption>';
    listHTML += '</figure></li>'; 
     
  }
    
    listHTML += '</ul>';
    document.getElementById('photo-gallery').innerHTML = listHTML;
 
}

getImages(thumbs);
document.getElementById('video-gallery').innerHTML = video;
