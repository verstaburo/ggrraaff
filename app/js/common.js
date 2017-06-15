$(function () {

    $(window).scroll(function () {
        // if($(this).width() < 992) {
        if (!$('.toggle-mobile-menu').hasClass('active')) {
            if ($(this).scrollTop() > 0) {
                $('.main-header').addClass('fixed');
                $('.wrapper').addClass('fixed-menu');
            } else {
                $('.main-header').removeClass('fixed').css({
                    'top': ''
                });
                $('.wrapper').removeClass('fixed-menu');
            }
        }
        // }
    });

    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('.has-animate').addClass('block-hidden').viewportChecker({
        classToAdd: 'block-visible animated fadeIn',
        offset: 100
    });

    var accordionWidth,
        accordionHeight,
        lg = 0,
        md = 0,
        sm = 0,
        xs = 0;

    if ($(window).width() > 1201) {
        accordionWidth = 1152;
        accordionHeight = 329;
        lg++;
    } else if ($(window).width() < 1201 && $(window).width() > 993) {
        accordionWidth = 952;
        accordionHeight = 496;
        md++;
    }

    if ($(window).width() > 993) {
        $('.advantages__accordion').liteAccordion({
            headerWidth: 84,
            containerHeight: accordionHeight,
            containerWidth: accordionWidth,
            slideSpeed: 400
        });
    } else if ($(window).width() < 993) {
        $('.advantages__accordion li:first-child').find('.advantages__visible-block').addClass('selected').next().slideDown(200);
    }

    $(window).resize(function () {
        if ($(window).width() > 1201 && lg < 1) {
            accordionWidth = 1152;
            accordionHeight = 329;

            if (sm < 1) {
                $('.advantages__accordion').liteAccordion('destroy');
            }

            $('.advantages__accordion').liteAccordion({
                headerWidth: 84,
                containerHeight: accordionHeight,
                containerWidth: accordionWidth,
                slideSpeed: 400
            });

            lg++;
            md = 0;
            sm = 0;
            xs = 0;
        } else if ($(window).width() < 1201 && $(window).width() > 993 && md < 1) {
            accordionWidth = 952;
            accordionHeight = 496;

            if (sm < 1) {
                $('.advantages__accordion').liteAccordion('destroy');
            }

            $('.advantages__accordion').liteAccordion({
                headerWidth: 84,
                containerHeight: accordionHeight,
                containerWidth: accordionWidth,
                slideSpeed: 400
            });

            md++;
            lg = 0;
            sm = 0;
            xs = 0;
        } else if ($(window).width() < 993 && sm < 1) {
            if (md > 0 || lg > 0) {
                $('.advantages__accordion').liteAccordion('destroy');
            }
            sm++;
            lg = 0;
            md = 0;
            xs = 0;

            $('.advantages__accordion li:first-child').find('.advantages__visible-block').addClass('selected').next().slideDown(200);
        }
    });

    $('.main-header .toggle-mobile-menu__button').click(function () {
        var headerPosition = $('.main-header').offset().top;
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
            $('.navbar--mobile').slideUp(200);
            $('.main-wrapper').css({
                'height': '',
                'overflow': ''
            });
            $('.main-header').css({
                'top': ''
            });
        } else {
            $(this).parent().addClass('active');
            $('.navbar--mobile').slideDown(200, function () {
                $('.main-wrapper').css({
                    'height': ($('.navbar--mobile').height() + 60 + 30) + 'px',
                    'overflow': 'hidden'
                }).scrollTop(headerPosition);
            });
            $('.main-header').removeClass('fixed').css({
                'top': headerPosition + 'px'
            });
            $('.wrapper').removeClass('fixed-menu');
        }
    });

    $('.footer-top-block .toggle-mobile-menu__button').click(function () {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
            $('.navbar-footer').slideUp(200);
        } else {
            $(this).parent().addClass('active');
            $('.navbar-footer').slideDown(200);
        }
    });

    $('.select-office__selected').click(function () {
        $(this).parent().find('.select-office__dropdown-block').slideToggle(200);
    });

    $('.lecturers__show-contacts').click(function () {
        $(this).fadeOut(200, function () {
            $('.lecturers__contacts-hidden').fadeIn(200);
        });
    });

    // $('.advantages__visible-block').click(function() {
    //     var contentTitle = $(this).find('span').text(),
    //         contentText = $(this).next().find('.advantages__text').text();

    //     $('.advantages__content-text').find('.advantages__title').text(contentTitle);
    //     $('.advantages__content-text').find('.advantages__text').text(contentText);
    // });

    $('.navbar__nav, .navbar-footer__nav').superfish({
        delay: 200,
        // animation: {height:'show'}
    });

    $('.fixed-info__toggle-button').click(function () {
        if ($(window).width() < 992) {
            $('.overlay').fadeIn(200);
            $('.fixed-info-popup').css({
                'top': $(window).scrollTop() + 20 + 'px'
            }).fadeIn(200);
        } else {
            $('.fixed-info').toggleClass('open');
        }
    });

    $('.fixed-info__content .close-btn').click(function () {
        if ($(window).width() < 992) {
            $('.overlay').fadeOut(200);
            $('.fixed-info-popup').fadeOut(200, function () {
                $('.fixed-info-popup').css({
                    'top': ''
                });
            });
        } else {
            $('.fixed-info').removeClass('open');
        }
    });

    $('.advantages__visible-block').click(function () {
        if ($(window).width() < 992) {
            if ($(this).hasClass('selected')) {
                $(this).stop().removeClass('selected').parent().find('.advantages__text-wrap').slideUp(200);
            } else {
                $('.advantages__visible-block').removeClass('selected').parent().find('.advantages__text-wrap').slideUp(200);
                $(this).stop().addClass('selected').parent().find('.advantages__text-wrap').slideDown(200);
            }
        }
    });

    $('.fixed-info-popup .fixed-info__item').click(function (e) {
        var container = $("fixed-info__item__radio-btn");
        if (container.has(e.target).length === 0) {
            return;
        }
        $('.fixed-info-popup .fixed-info__wrap').css({
            'height': ''
        });
    });

    $('.fixed-info-popup .fixed-info__item__label-text').click(function () {
        var radioToggle = $(this).attr('data-radio-toggle'),
            radioContentActive = $(this).parents('.fixed-info__item__hidden-block').find('div[data-radio-content="' + radioToggle + '"]');

        if ($(window) > 767) {
            if (radioToggle == 'radio-cont2') {
                $('.fixed-info-popup .fixed-info__wrap').css({
                    'height': radioContentActive.height() + 125 + 'px'
                });
            } else {
                $('.fixed-info-popup .fixed-info__wrap').css({
                    'height': ''
                });
            }
        } else {
            $('.fixed-info-popup .fixed-info__wrap').css({
                'height': radioContentActive.height() + 62 + 'px'
            });
        }
    });

    $('.fixed-info__item__radio-btn').click(function () {
        $(this).parent().find('.fixed-info__item__radio-btn').removeClass('selected');
        $(this).addClass('selected');
    });

    $('.fixed-info__item').click(function (e) {
        var block = e.target;

        if (block.className == 'fixed-info__item__success-send__button green-border-btn') {
            return;
        }
        $('.fixed-info__item').removeClass('active').parent().find('.fixed-info__item__hidden-block').removeClass('open');
        $(this).addClass('active').parent().find('.fixed-info__item__hidden-block').addClass('open');
    });

    $('.fixed-info__item__label-text').click(function () {
        var radioContentSelect = $(this).attr('data-radio-toggle');

        if ($(window).width() > 992) {
            if (radioContentSelect == 'radio-cont2') {
                $('.fixed-info').css({
                    'width': '805px'
                });
            } else {
                $('.fixed-info').css({
                    'width': ''
                });
            }
        }

        $(this)
            .parents('.fixed-info__item__hidden-block')
            .find('.radio-content').removeClass('active');

        $(this)
            .parents('.fixed-info__item__hidden-block')
            .find('.radio-content[data-radio-content="' + radioContentSelect + '"]')
            .addClass('active');
    });

    // --------------------------------------------------------------
    // Google maps init
    // --------------------------------------------------------------

    var map1, map2;

    var myLatLng = {lat: 51.81710488, lng: 7.99255371};


    map1 = new google.maps.Map(document.getElementById('mapG'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 8,
        scaleControl: false,
        streetViewControl: false,
        // zoomControl: false,
        mapTypeControl: false
    });

    var image = 'img/icons/map-label.png';

    var marker1 = new google.maps.Marker({
        position: {lat: 51.5089057, lng: 7.50314311},
        map: map1,
        title: 'Dortmund',
        icon: image
    });

    var marker2 = new google.maps.Marker({
        position: {lat: 52.02254031, lng: 8.5683101},
        map: map1,
        title: 'Bielefeld',
        icon: image
    });

    if ($('#mapMini').length) {
        map2 = new google.maps.Map(document.getElementById('mapMini'), {
            center: {lat: 51.56710488, lng: 7.59255371},
            scrollwheel: false,
            zoom: 8,
            scaleControl: false,
            streetViewControl: false,
            // zoomControl: false,
            mapTypeControl: false
        });

        var markerOnMapMini = new google.maps.Marker({
            position: {lat: 51.5089057, lng: 7.50314311},
            map: map2,
            title: 'Dortmund',
            icon: image
        });

        markerOnMapMini.setMap(map2);
    }

    var markers = [marker1, marker2];
    var bounds = new google.maps.LatLngBounds();

    for (var i = 0; i < markers.length; i++) {
        bounds.extend(markers[i].getPosition());
    }

    map1.fitBounds(bounds);

    // marker2.setMap(map);

    window.onresize = function () {
        map1.setCenter(bounds.getCenter());
    };

    // --------------------------------------------------------------
    // End Google maps
    // --------------------------------------------------------------

    var st = 0;

    $(window).scroll(function () {
        if ($(this).scrollTop() > ($('#mapG').offset().top - $('.two-columns__left-column').height() - 1) && st < 1) {
            $('.two-columns__left-column').removeClass('fixed').addClass('relative').css({
                'top': ($('#mapG').offset().top - $('.two-columns__left-column').height()) + 'px'
            });
            st++;
        }
        if ($(this).scrollTop() > 0 && $(this).scrollTop() < ($('#mapG').offset().top - $('.two-columns__left-column').height())) {
            $('.two-columns__left-column').removeClass('relative').addClass('fixed').css({
                'top': ''
            });
            st = 0;
        } else {
            $('.two-columns__left-column').removeClass('fixed');
        }
    });

    $('.level__line').each(function () {
        var percent = $(this).find('.inner-block').attr('data-percent');

        $(this).find('.inner-block').css({
            'width': 100 - percent + '%'
        });
    });

    $('.two-columns__slider').slick({
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon icon-arrow-right"><linearGradient id="linear-gradient-fixed"><stop offset="0%" stop-color="#76d222"/><stop offset="100%" stop-color="#519623"/></linearGradient><use fill="url(#linear-gradient-fixed)" xlink:href="svg/sprite/sprite.svg#slider-arrow"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon icon-arrow-right"><linearGradient id="linear-gradient-fixed"><stop offset="0%" stop-color="#76d222"/><stop offset="100%" stop-color="#519623"/></linearGradient><use fill="url(#linear-gradient-fixed)" xlink:href="svg/sprite/sprite.svg#slider-arrow"></use></svg></button>',
    });

    window.addEventListener('load', function () {
        $('.img-bg').each(function () {
            var srcImg = $(this).attr('src'),
                heightImg = $(this).height();


            $(this).parent().css({
                'background-image': 'url("' + srcImg + '")'
            });

            if ($(window).width() > 767) {
                $(this).parent().css({
                    'height': heightImg + 'px'
                });
            }
        });

        // $('img').css({
        //     'opacity': '1'
        // });
    });

    $('.two-columns--profession .two-columns__table__title').click(function () {
        var th = $(this);

        if ($(this).parent().hasClass('active')) {
            $(this).next().slideUp(200, function () {
                th.parent().removeClass('active');
            });
        } else {
            $(this).parent().addClass('active').find('.two-columns__table__wrap').slideDown(200);
        }
    });

    $('.tabs__toggles__item').first().addClass('active first');
    $('.tabs__toggles__item').last().addClass('last');
    $('.tabs__content__item').first().show();

    $('.tabs__toggles__item').click(function () {
        if ($(this).hasClass('active')) {
            return;
        }

        var numberTab = $(this).attr('data-toggle'),
            activeTab = $(this).parents('.tabs').find('.tabs__content__item[data-tab="' + numberTab + '"]');

        $('.tabs__toggles__item').removeClass('active');
        $('.tabs__content__item').hide();
        $(this).addClass('active');
        activeTab.show();
    });

    $('.reviews__slider').slick({
        dots: true,
        arrows: false
    });

    $('.tabs__toggles__prev-tab').click(function () {
        if ($('.tabs__toggles__item.active').hasClass('first')) {
            return;
        }

        var numberTab = $('.tabs__toggles__item.active').prev().attr('data-toggle');

        $('.tabs__content__item').hide();
        $('.tabs__content__item[data-tab="' + numberTab + '"]').show();
        $('.tabs__toggles__item.active').removeClass('active').hide().prev().addClass('active').show();
    });

    $('.tabs__toggles__next-tab').click(function () {
        if ($('.tabs__toggles__item.active').hasClass('last')) {
            return;
        }

        var numberTab = $('.tabs__toggles__item.active').next().attr('data-toggle');

        $('.tabs__content__item').hide();
        $('.tabs__content__item[data-tab="' + numberTab + '"]').show();
        $('.tabs__toggles__item.active').removeClass('active').hide().next().addClass('active').show();
    });

    $('#mix-container').mixItUp();

    $('.filter').click(function () {
        $('.filter').removeClass('active');
        $(this).addClass('active');
    });

    $('.application__item__title').click(function () {
        $(this).toggleClass('active').parent().find('.application__wrap').slideToggle(200);
    });

    $('select').styler();

    // ====================================================================
    // Для теста блока, этот блок кода потом убрать нужно будет
    $('.fixed-info__item__input-submit').click(function () {
        $(this).parents('.fixed-info__item__hidden-block').removeClass('open').parents('.fixed-info__wrap').addClass('success-send');
        $('.fixed-info').css({
            'width': ''
        });

        $('.fixed-info-popup .fixed-info__wrap').css({
            'height': ''
        });

        return false;
    });

    $('.fixed-info__item__success-send__button').click(function () {
        $(this)
            .parents('.fixed-info__wrap')
            .removeClass('success-send')
            .find('.fixed-info__item')
            .removeClass('active');
    });
    // ====================================================================

    // Cache selectors
    var lastId,
        topMenu = $(".nav-blocks"),
        // topMenuHeight = topMenu.outerHeight() + 15,
        topMenuHeight = 0,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;

        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);

        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });

        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });


    (function () {
        var initPhotoSwipeFromDOM = function (gallerySelector) {
            var parseThumbnailElements = function (el) {
                var thumbElements = el.childNodes,
                    numNodes = thumbElements.length,
                    items = [],
                    figureEl,
                    linkEl,
                    size,
                    item;

                for (var i = 0; i < numNodes; i++) {

                    figureEl = thumbElements[i]; // <figure> element

                    // include only element nodes 
                    if (figureEl.nodeType !== 1) {
                        continue;
                    }

                    linkEl = figureEl.children[0]; // <a> element

                    size = linkEl.getAttribute('data-size').split('x');

                    // create slide object
                    item = {
                        src: linkEl.getAttribute('href'),
                        w: parseInt(size[0], 10),
                        h: parseInt(size[1], 10)
                    };


                    if (figureEl.children.length > 1) {
                        // <figcaption> content
                        item.title = figureEl.children[1].innerHTML;
                    }

                    if (linkEl.children.length > 0) {
                        // <img> thumbnail element, retrieving thumbnail url
                        item.msrc = linkEl.children[0].getAttribute('src');
                    }

                    item.el = figureEl; // save link to element for getThumbBoundsFn
                    items.push(item);
                }

                return items;
            };

            // find nearest parent element
            var closest = function closest(el, fn) {
                return el && ( fn(el) ? el : closest(el.parentNode, fn) );
            };

            // triggers when user clicks on thumbnail
            var onThumbnailsClick = function (e) {
                e = e || window.event;
                e.preventDefault ? e.preventDefault() : e.returnValue = false;

                var eTarget = e.target || e.srcElement;

                // find root element of slide
                var clickedListItem = closest(eTarget, function (el) {
                    return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
                });

                if (!clickedListItem) {
                    return;
                }

                // find index of clicked item by looping through all child nodes
                // alternatively, you may define index via data- attribute
                var clickedGallery = clickedListItem.parentNode,
                    childNodes = clickedListItem.parentNode.childNodes,
                    numChildNodes = childNodes.length,
                    nodeIndex = 0,
                    index;

                for (var i = 0; i < numChildNodes; i++) {
                    if (childNodes[i].nodeType !== 1) {
                        continue;
                    }

                    if (childNodes[i] === clickedListItem) {
                        index = nodeIndex;
                        break;
                    }
                    nodeIndex++;
                }


                if (index >= 0) {
                    // open PhotoSwipe if valid index found
                    openPhotoSwipe(index, clickedGallery);
                }
                return false;
            };

            // parse picture index and gallery index from URL (#&pid=1&gid=2)
            var photoswipeParseHash = function () {
                var hash = window.location.hash.substring(1),
                    params = {};

                if (hash.length < 5) {
                    return params;
                }

                var vars = hash.split('&');
                for (var i = 0; i < vars.length; i++) {
                    if (!vars[i]) {
                        continue;
                    }
                    var pair = vars[i].split('=');
                    if (pair.length < 2) {
                        continue;
                    }
                    params[pair[0]] = pair[1];
                }

                if (params.gid) {
                    params.gid = parseInt(params.gid, 10);
                }

                return params;
            };

            var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
                var pswpElement = document.querySelectorAll('.pswp')[0],
                    gallery,
                    options,
                    items;

                items = parseThumbnailElements(galleryElement);

                // define options (if needed)
                options = {

                    // define gallery index (for URL)
                    galleryUID: galleryElement.getAttribute('data-pswp-uid'),

                    getThumbBoundsFn: function (index) {
                        // See Options -> getThumbBoundsFn section of documentation for more info
                        var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                            rect = thumbnail.getBoundingClientRect();

                        return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
                    }

                };

                // PhotoSwipe opened from URL
                if (fromURL) {
                    if (options.galleryPIDs) {
                        // parse real index when custom PIDs are used 
                        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                        for (var j = 0; j < items.length; j++) {
                            if (items[j].pid == index) {
                                options.index = j;
                                break;
                            }
                        }
                    } else {
                        // in URL indexes start from 1
                        options.index = parseInt(index, 10) - 1;
                    }
                } else {
                    options.index = parseInt(index, 10);
                }

                // exit if index not found
                if (isNaN(options.index)) {
                    return;
                }

                if (disableAnimation) {
                    options.showAnimationDuration = 0;
                }

                // Pass data to PhotoSwipe and initialize it
                gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
                gallery.init();
            };

            // loop through all gallery elements and bind events
            var galleryElements = document.querySelectorAll(gallerySelector);

            for (var i = 0, l = galleryElements.length; i < l; i++) {
                galleryElements[i].setAttribute('data-pswp-uid', i + 1);
                galleryElements[i].onclick = onThumbnailsClick;
            }

            // Parse URL and open gallery if it contains #&pid=3&gid=1
            var hashData = photoswipeParseHash();
            if (hashData.pid && hashData.gid) {
                openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
            }
        };
        initPhotoSwipeFromDOM('.two-columns__gallery');
    })();

    if ($(window).width() < 768) {
        $('.navbar__nav').swipe({
            allowPageScroll: 'vertical',
            swipeStatus: function (event, phase, direction, distance, duration, fingers) {
                if (phase == "move" && direction == "right") {
                    $(".navbar").addClass("move-right");
                    $('.toggle-mobile-menu').removeClass('active');
                    setTimeout(function () {
                        $(".navbar").hide().removeClass('move-right');
                        $('.main-header').css({
                            'top': ''
                        });
                    }, 250);
                    $('.main-wrapper').css({
                        'height': '',
                        'overflow': ''
                    });
                    return false;
                }
            }
        });
    }


});


$(window).resize(function () {
    if ($(window).width() > 1200) {
        $('.navbar--mobile').hide();
        $('.toggle-mobile-menu').removeClass('active');
    }
});


$(document).ready(function () {
    $("[data-col]").each(function () {
        if ($(this).data("col") === "left") {
            $(this).appendTo('.news__left-column');
        } else {
            $(this).appendTo('.news__right-column');
        }
    });
});











