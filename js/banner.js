setInterval(left, 5000)
        function left() {
            var left = $('#banner-box-in').css('margin-left');
            if (Math.abs(parseInt(left)) % 1350 != 0) return;
            left = parseInt(left) - 1350;
            if (left == -8100) {
                $('#banner-box-in').animate({
                    marginLeft: 0
                }, 1)
                $('#banner-box-in').animate({
                    marginLeft: -1350
                })
            }

            else $('#banner-box-in').animate({
                marginLeft: left
            })

        }
        function right() {
            var left = $('#banner-box-in').css('margin-left');
            if (Math.abs(parseInt(left)) % 1350 != 0) return;
            left = parseInt(left)
            if (left == 0) {
                console.log(left)
                $('#banner-box-in').animate({
                    marginLeft: -6750
                }, 1)
                $('#banner-box-in').animate({
                    marginLeft: -5400
                })
            }
            else {
                left = parseInt(left) + 1350
                $('#banner-box-in').animate({
                    marginLeft: left
                })
            }
        }