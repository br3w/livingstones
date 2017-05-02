    'use strict';
    function jqueryEvents() {
        return {
            restrict:'A',
            link: function(scope, element, attrs) {

                $(element).on('click','.close-welcome', function(e){
                    $(this).parents(".md-margin-welcome").slideToggle('slow');
                });

                $(element).on('click','.bt-risco-detalhes',function(e){
                    $(this).siblings(".mp-detalhe-box").slideToggle();
                });

                $(element).on('click','.mp-medic-list', function(e){
                    $(this).siblings(".mp-medic-content").slideToggle();
                });

                $(element).on('click','.mp-image', function(e){
                    $(".active").removeClass("active");
                    $(this).addClass("active");
                });

                $(element).on('click','.text-title-acorddion', function(e){
                    $(this).siblings(".content-acorddion").slideToggle("slow");
                    $(this).find(".icon-accordion").toggleClass( "open" )
                });

            }
        };
    }
