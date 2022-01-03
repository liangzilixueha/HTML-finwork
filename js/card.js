 $(function () {
            var flag = [0, 0, 0, 0, 0];
            $('[id=more-card-l]').mouseenter(function () {
                $('[id=more-card-l]').stop()
                $('[id=thing]').stop()
                $(this).find("#thing").animate({
                    width:'380px'
                })
                $(this).animate({
                    width:'680px'
                }, )
            })
            $('[id=more-card-l]').mouseleave(function () {
                $('[id=more-card-l]').stop()
                $('[id=thing]').stop()
                $('[id=thing]').animate({
                    width: '200px'
                })
                $(this).animate({
                    width: '500px'
                })
            })
            $('[id=more-card-r]').mouseenter(function () {
                $('[id=more-card-r]').stop()
                $('[id=thing]').stop()
                $(this).find("#thing").animate({
                    width:'380px'
                })
                $(this).animate({
                    left: '570px',
                    width: '680px'
                })
            })
            $('[id=more-card-r]').mouseleave(function () {
                $('[id=more-card-r]').stop()
                $('[id=thing]').stop()
                $('[id=thing]').animate({
                    width:'200px'
                })
                $(this).animate({
                    left: '750px',
                    width:'500px'
                })
            })
            
        })
        var speed_x = 1;
        var speed_y = 1;
        setInterval(function () {
            var left = parseInt($('#float').css('left'));
            if (left >= parseInt($('body').css('width'))-100||left<=-1) speed_x *= -1;
            
            var top = parseInt($('#float').css('top'));
            if (top >= parseInt($('body').css('height')) || top <= -1) speed_y *= -1;
            $('#float').css('left', left + speed_x + 'px');
            $('#float').css('top', top + speed_y + 'px');
        }, 7);
        $(function () {
            var x = $('#guide-box').offset().top;
            var y = $('#guide-box').offset().left;
            $('#guide-next').css('top', y - 20 + 'px');
            $('#guide-next').css('left', x + 50 + 'px');

            $('[id=guide-box-in-2]').mouseenter(function () {
                $('.guide-txt').css('display', '');
                var x = $(this).offset().top;
                var y = $(this).offset().left;
                $('#guide-icon').css('top', x-10 + 'px');
                $('#guide-icon').css('left', y+90 + 'px');
                $('#guide-icon').css('display', '');
            })
            $('[id=guide-next]').mouseleave(function () {
                $('.guide-txt').css('display', 'none');
                $('#guide-icon').css('display', 'none');
            })
            $('[id=img-1]').mouseenter(function () {
                $('.guide-txt').css('display', 'none');
                $('#guide-icon').css('display', 'none');
            })
            $('[id=guide-next]').mouseenter(function () {
                $(this).css('display', '');
              
            })
        })