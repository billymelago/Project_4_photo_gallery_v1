//imageLightboxCode

 $(function () {
             
        var activityIndicatorOn = function () {
                $('<div id="imagelightbox-loading"><div></div></div>').appendTo('body');
            },
            activityIndicatorOff = function () {
                $('#imagelightbox-loading').remove();
            },
            overlayOn = function () {
                $('<div id="imagelightbox-overlay"></div>').appendTo('body');
            },
            overlayOff = function () {
                $('#imagelightbox-overlay').remove();
            },
            closeButtonOn = function (instance) {
                $('<a href="#" id="imagelightbox-close"></a>').appendTo('body').on('click', function () {
                    $(this).remove();
                    instance.quitImageLightbox();
                    return false;
                });
            },
            closeButtonOff = function () {
                $('#imagelightbox-close').remove();
            },
            captionOn = function () {
                var description = $('a[href="' + $('#imagelightbox').attr('src') + '"] img').attr('alt');
                if (description && description.length > 0)
                    $('<div id="imagelightbox-caption">' + description + '</div>').appendTo('body');
            },
            captionOff = function () {
                $('#imagelightbox-caption').remove();
            },
            navigationOn = function (instance, selector) {
                var images = $(selector);
                if (images.length) {
                    var nav = $('<div id="imagelightbox-nav"></div>');
                    for (var i = 0; i < images.length; i++)
                        nav.append('<a href="#"></a>');
                    nav.appendTo('body');
                    nav.on('click touchend', function () {
                        return false;
                    });
                    var navItems = nav.find('a');
                    navItems.on('click touchend', function () {
                        var $this = $(this);
                        if (images.eq($this.index()).attr('href') != $('#imagelightbox').attr('src'))
                            instance.switchImageLightbox($this.index());
                        navItems.removeClass('active');
                        navItems.eq($this.index()).addClass('active');
                        return false;
                    })
                            .on('touchend', function () {
                                return false;
                            });
                }
            },
            navigationUpdate = function (selector) {
                var items = $('#imagelightbox-nav').find('a');
                items.removeClass('active');
                items.eq($(selector).filter('[href="' + $('#imagelightbox').attr('src') + '"]').index(selector)).addClass('active');
            },
            navigationOff = function () {
                $('#imagelightbox-nav').remove();
            },
            arrowsOn = function( instance, selector ) {
                var $arrows = $( '<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"></button>' +
                                 '<button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"></button>' );
                $arrows.appendTo( 'body' );
                $arrows.on( 'click touchend', function( e ) {
                    e.preventDefault();
                    var $this = $( this );
                    if( $this.hasClass('imagelightbox-arrow-left')) {
                        instance.loadPreviousImage();
                    } else {
                        instance.loadNextImage();
                    }
                    return false;
                });
            },
            arrowsOff = function() {
                $('.imagelightbox-arrow').remove();
            };
        //	WITH ACTIVITY INDICATION
        $('a[data-imagelightbox="a"]').imageLightbox(
            {
                onLoadStart: function () {
                    activityIndicatorOn();
                },
                onLoadEnd: function () {
                    activityIndicatorOff();
                },
                onEnd: function () {
                    activityIndicatorOff();
                }
            });
        //	WITH OVERLAY & ACTIVITY INDICATION
        $('a[data-imagelightbox="b"]').imageLightbox(
            {
                onStart: function () {
                    overlayOn();
                },
                onEnd: function () {
                    overlayOff();
                    activityIndicatorOff();
                },
                onLoadStart: function () {
                    activityIndicatorOn();
                },
                onLoadEnd: function () {
                    activityIndicatorOff();
                }
            });
        //	WITH "CLOSE" BUTTON & ACTIVITY INDICATION
        var instanceC = $('a[data-imagelightbox="c"]').imageLightbox(
            {
                quitOnDocClick: false,
                onStart: function () {
                    closeButtonOn(instanceC);
                },
                onEnd: function () {
                    closeButtonOff();
                    activityIndicatorOff();
                },
                onLoadStart: function () {
                    activityIndicatorOn();
                },
                onLoadEnd: function () {
                    activityIndicatorOff();
                }
            });
        //	WITH CAPTION & ACTIVITY INDICATION
        $('a[data-imagelightbox="d"]').imageLightbox(
            {
                onLoadStart: function () {
                    captionOff();
                    activityIndicatorOn();
                },
                onLoadEnd: function () {
                    captionOn();
                    activityIndicatorOff();
                },
                onEnd: function () {
                    captionOff();
                    activityIndicatorOff();
                }
            });
        //	WITH DIRECTION REFERENCE
        var selectorE = 'a[data-imagelightbox="e"]';
        var instanceE = $(selectorE).imageLightbox(
            {
                onStart: function () {
                    navigationOn(instanceE, selectorE);
                },
                onEnd: function () {
                    navigationOff();
                    activityIndicatorOff();
                },
                onLoadStart: function () {
                    activityIndicatorOn();
                },
                onLoadEnd: function () {
                    navigationUpdate(selectorE);
                    activityIndicatorOff();
                }
            });
        //	ALL COMBINED
        var instanceF = $('a[data-imagelightbox="f"]').imageLightbox(
            {
                onStart: function () {
                    overlayOn();
                    closeButtonOn(instanceF);
                },
                onEnd: function () {
                    overlayOff();
                    captionOff();
                    closeButtonOff();
                    activityIndicatorOff();
                },
                onLoadStart: function () {
                    captionOff();
                    activityIndicatorOn();
                },
                onLoadEnd: function () {
                    captionOn();
                    activityIndicatorOff();
                }
            });
        //  WITH MANUAL TRIGGER
        var gallery = $('a[data-imagelightbox="g"]').imageLightbox();
        $('.trigger-button').on('click', function () {
            gallery.startImageLightbox();
        });
        //	WITH ARROWS & ACTIVITY INDICATION
        var selectorG = 'a[data-imagelightbox="h"]';
        var instanceG = $( selectorG ).imageLightbox(
            {
                onStart:		function(){ arrowsOn( instanceG, selectorG );
                                            closeButtonOn(instanceG,selectorG );
                                            overlayOn();
                                          },
                onEnd:			function(){ arrowsOff(); activityIndicatorOff();
                                            closeButtonOff();
                                            navigationOff()
                                            captionOff();
                                            overlayOff()},
                onLoadStart: 	function(){ activityIndicatorOn(); 
                                            captionOff()},
                onLoadEnd:	 	function(){ $( '.imagelightbox-arrow' ).css( 'display', 'block' ); 
                                            activityIndicatorOff(); 
                                            captionOn();}
            });
        
        var selectorI = 'a[data-imagelightbox="i"]';
        var instanceI = $( selectorI ).imageLightbox(
        {
                quitOnDocClick: false,
                onStart: function () {
                    closeButtonOn(instanceI);
                },
                onEnd: function () {
                    closeButtonOff();
                    activityIndicatorOff();
                },
                onLoadStart: function () {
                    activityIndicatorOn();
                },
                onLoadEnd: function () {
                    activityIndicatorOff();
                }
        });
        $("#addimage").on('click', function(){
            var adding_ul = $("#dynamically_adding");
            var li = $('<li></li>').appendTo( adding_ul );
            var a = $("<a></a>")
                .attr('data-imagelightbox',"add")
                .attr('href', "http://osvaldas.info/examples/image-lightbox-responsive-touch-friendly/full/4.jpg")
                .appendTo( li );
            $("<img />")
                .attr("src", "images/4.jpg")
                .attr("alt", "Sun, grass and hydrant")
                .appendTo( a );
            li = $('<li></li>').appendTo( adding_ul );
            a = $("<a></a>")
                .attr('data-imagelightbox',"add")
                .attr('href', "http://osvaldas.info/examples/image-lightbox-responsive-touch-friendly/full/5.jpg")
                .appendTo( li );
            $("<img />")
                .attr("src", "images/5.jpg")
                .attr("alt", "Sun, grass and hydrant")
                .appendTo( a );
            a = $("<a></a>")
                .attr('data-imagelightbox',"add")
                .attr('href', "http://osvaldas.info/examples/image-lightbox-responsive-touch-friendly/full/6.jpg")
                .appendTo( li );
            $("<img />")
                .attr("src", "images/6.jpg")
                .attr("alt", "Sun, grass and hydrant")
                .appendTo( a );
            // dynamically adding
            instanceI.addImageLightbox( $("a[data-imagelightbox='add']") );
        });
    });