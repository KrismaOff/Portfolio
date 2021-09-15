// $('.menuButton').on('click', function(){
//     $('body').css('width', '80%' )
//     $('body').css('float', 'right')
//     $('.menu').css('left', '0px')
// })

// width:80%; float: right;

// let i = 0
// $('.menuButton').on('click', function(){
//     $('body').animate({
//         "width": '80%',
//      }, 500)

//     $('body').css('float', 'right')

//     $('.menu').animate({
//         "left": '0px',
//      }, 500)

//     $('.forMenu').css({
//         // 'margin-top':'100px',
//         'height':'620px',
//         'width':'1100px',
//     })
//     i++
//     alert(i)
// })


let i = 2
$('.menuButton').on('click', function(){
    if (i%2 == 0) {
            
        $('.forMenu').css({
            // 'margin-top':'100px',
            'height':'620px',
            'width':'900px',
            'float':'right'
        })
        
        $('body').animate({
            "width": '80%',
            "float":'right'
         }, 500)
    
        $('body').css('float', 'right')
    
        $('.menu').animate({
            "left": '0px',
         }, 500)
        i++
    } else {
        $('body').animate({
            "width": '100%',
            "float":'none'
         }, 500)
    
        $('.menu').animate({
            "left": '-1000px',
         }, 500)
    
        $('.forMenu').css({
            // 'margin-top':'100px',
            'height':'620px',
            'width':'900px',
        })
        i++
    }
})

