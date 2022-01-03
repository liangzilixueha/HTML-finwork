$(function () {
            $('#qvq2').click(function () {
                console.log(1)
                $('#we-chat-load-img').css('display', 'none');
                document.getElementById('qvq1').className = "way-down";
                document.getElementById('qvq2').className = "way-up";
                $('.phone-load').css('display', '');
                $('#bottom-qvq').css("top", "250px");
            })
            $('#qvq1').click(function () {
                $('#we-chat-load-img').css('display', '');
                $('#bottom-qvq').css("top", "0px");
                $('.phone-load').css('display', 'none');
                document.getElementById('qvq1').className = "way-up";
                document.getElementById('qvq2').className = "way-down";

            })
            $('.sent').click(function () {
                var p = $('#enter-phone').val();
                var r = /^1\d{10}$/;
                var q = /^1\w{10}$/;
                if (!r.test(p)) {
                    if (!q.test(p)) {
                        alert("请输入11位的电话号码,且开头必为1"); return;
                    }
                    alert("电话号码不能包含字母和下划线！");
                }
                else {
                    alert("已发送");
                    document.getElementsByClassName('sent')[0].innerHTML = '已发送';
                    $('.sent').css('width', '50px');
                }
                
            })
        })