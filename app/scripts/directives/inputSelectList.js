'use strict';
function inputSelectList() {
    return {
        restrict:'A',
        link: function(scope, element, attrs) {

            setTimeout(function(){
                // Css height

                var curYPos, curXPos, curDown;

                var $cont = $('.scroll-conteiner')

                $cont.on('mousemove', function(e){
                    console.log("MOVE");
                    if(curDown){
                        $cont.scrollTop($cont.scrollTop() + (curYPos - e.pageY));
                    }
                });

                $cont.on('mousedown', function(e){
                    curYPos = e.pageY;
                    curXPos = e.pageX;
                    curDown = true;
                });

                $cont.on('mouseup', function(e){
                    curDown = false;
                });

                $('.load-selectlist').fadeOut(800);

            },800);

        }
    };
}
