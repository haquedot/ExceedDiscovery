$(document).ready(function () {
    
    function updateImage(dayContentId) {
        $(".img-campAgenda img").attr('src', 'images/' + dayContentId + '.webp');
    }

    $(".day-content").click(function () {
        $(".agenda-table .day-content").removeClass("active-img");
        $(this).addClass("active-img");
        var dayContent = $(this).attr("id");
        updateImage(dayContent);
    });

    $('.btnag').click(function () {
        var index = $(this).index(); 
        $(".agenda-nav button").removeClass("active");
        $(this).addClass("active");
        $('.agenda-ul').eq(index).show().siblings('.agenda-ul').hide();

        var $activeDayContent = $('.agenda-ul').eq(index).find('.day-content.active-img');
        if ($activeDayContent.length === 0) {
            $activeDayContent = $('.agenda-ul').eq(index).find('.day-content').first();
            $activeDayContent.addClass('active-img');
        }
        var activeDayContentId = $activeDayContent.attr('id');
        updateImage(activeDayContentId);
    });

});



$(document).ready(function () {
    $('.carousel1').owlCarousel({
        loop: true,
        margin: 0,
        responsive: {
            0: {
                items: 1,
                nav: false,
                mouseDrag: true,
                stagePadding: 20,
            },
            600: {
                items: 1,
                nav: true,
                mouseDrag: true,
                stagePadding: 50,
                navText: ["<div class='nav-button owl-prev'><i class='bi bi-chevron-left'></i></div>", "<div class='nav-button owl-next'><i class='bi bi-chevron-right'></i></div>"],
            },
            1000: {
                items: 1,
                nav: true,
                mouseDrag: true,
                stagePadding: 50,
                navText: ["<div class='nav-button owl-prev'><i class='bi bi-chevron-left'></i></div>", "<div class='nav-button owl-next'><i class='bi bi-chevron-right'></i></div>"],
            }
        }
    });
});



$(document).ready(function () {
    $('.carousel2').owlCarousel({
        loop: true,
        margin: 12,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true,

            },
            768: {
                items: 2,
                nav: true,

            },
            992: {
                items: 4,
                nav: true,

            }
        }
    });


    // $('.carousel1').owlCarousel({
    //     loop: true,
    //     margin: 0,
    //     responsive: {
    //         0: {
    //             items: 1,
    //             nav: false,
    //             mouseDrag: true,
    //             stagePadding: 20,
    //         },
    //         600: {
    //             items: 3,
    //             nav: true,
    //             mouseDrag: true,
    //             stagePadding: 50,
    //             navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    //         },
    //         1000: {
    //             items: 3,
    //             nav: true,
    //             mouseDrag: true,
    //             stagePadding: 50,
    //             navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    //         }
    //     }
    // })
});

$(document).ready(function () {
    $('.carousel3').owlCarousel({
        loop: true,
        margin: 20,
        // nav: true,
        autoplay:true,
        responsive: {
            0: {
                items: 1,
                // nav: true,

            },
            768: {
                items: 1.3,
                // nav: true,

            },
            992: {
                items: 2.5,
                // nav: true,

            }
        }
    });

});


// $(document).ready(function () {
//     $('.carousel1').owlCarousel({
//         loop: true,
//         margin: 0,
//         responsive: {
//             0: {
//                 items: 1,
//                 nav: false,
//                 mouseDrag: true,
//                 stagePadding: 20,
//             },
//             600: {
//                 items: 3,
//                 center: true,
//                 loop: true,
//                 margin: 10,
//                 stagePadding: 50, // Adjust the stagePadding as needed
//                 nav: true,
//                 mouseDrag: true,
//                 navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
//             },
//             1000: {
//                 items: 3,
//                 nav: true,
//                 mouseDrag: true,
//                 stagePadding: 50, // Adjust the stagePadding as needed
//                 navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
//             }
//         }
//     });
// });





// const btnag = document.querySelectorAll(".btnag");
// const agendaUl=document.querySelectorAll('.agenda-ul');
// btnag.forEach((element, i)=>{
//     element.addEventListener('click', ()=>{
//         agendaUl[i].style.display='block';
//         for(var j=0;j<agendaUl.length;j++){
//             if(j!=i){
//                 agendaUl[j].style.display='none';
//             }
//         }
//     })
// }
// )
