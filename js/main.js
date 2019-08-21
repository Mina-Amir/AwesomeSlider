jQuery(document).ready(function($){
    $("#test ul").slider({
        items: 4,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    items: 2
                }
            }
        ]
    })
})