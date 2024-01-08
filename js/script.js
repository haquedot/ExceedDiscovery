$(document).ready(function () {
    // $(".agenda-nav a").click(function () {
    //     $(".agenda-table").children().first().addClass("active-img");
    //     $(".agenda-nav a").removeClass("active");
    //     $(this).addClass("active");
    //     $(".agenda-table").hide();
    //     var sectionId = $(this).attr("href");
    //     $(sectionId).show();
    // });
    $(".day-content").click(function () {
        $(".agenda-table .day-content").removeClass("active-img");
        $(this).addClass("active-img");
        var dayContent = $(this).attr("id");
        console.log(dayContent)
        $(".img-campAgenda img").attr('src', 'images/' + dayContent + '.webp');
    });
    $('.btnag').click(function () {
        var index = $('.btnag').index(this);
        $(".agenda-nav button").removeClass("active");
        $(this).addClass("active");
        $('.agenda-ul').eq(index).show().siblings('.agenda-ul').hide();
    });

});


// Initialize Owl Carousel
$(document).ready(function () {
    $(".loop").owlCarousel({
        center: true,
        items: 3,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            571: {
                items: 3
            }
        }
    });
});


$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
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
