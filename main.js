/**
 *
 * Created by Administrator on 2017/9/1.
 */

!function(){
    $(window).on({
        'resize':function(){
            resize()
        },
        'scroll':function(){
            scr()
        }
    }).trigger('resize');
    /*resize函数*/
    function resize(){
        /*初始屏幕*/
       $('section').css('height',$(window).height());
        /*文字效果*/
       $('#one > p').stop().animate({'margin-top':($(window).height() -  $('#one > p').outerHeight())/2},1500);
       /*设置所有页面高度*/

    }

/*平滑滚动效果*/
    $('a:not([href*=com]):not([href*=github])').on('click',function(){
            var id = $(this)[0].hash;
            /*需要滚动的高度 == 这个元素的前面所有兄弟元素的高度和*/
            var h =null;
            $.each($(id).prevAll('section'),function(i,el){
                h +=  parseInt($(el).css('height'));
            });
            /*加动画  设置动画时间*/
            $('html,body').stop().animate({
                scrollTop:h
            },1000);
            /*清空原始值重新计算*/
            h = null;

    });

    /*导航栏固定函数*/
    function scr (){
        /*导航栏固定*/
        if( $(document).scrollTop() >= $('#one').height()+61){
            $('#nav').css({
                position:'fixed',
                top:0
            });
            $('#go').css({
                'margin-top':'60px',
                'margin-bottom':'-60px'
            });

            /*取消导航栏固定*/
        }else if($(document).scrollTop() <= $('#one').height()+61){
            $('#nav').css({
                position:'relative',
                top:0
            });
            $('#go').css({
                'margin-top': '0',
                'margin-bottom':'0'
            });
        }
    }
}();


