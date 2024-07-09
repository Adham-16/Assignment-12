
const mediaScreen = window.matchMedia("(max-width: 450px)")
function openOrClose(x) {
    if (x.matches) {
        $(".sidenav").animate({width : '105px'});
        $(".text").animate({marginLeft: '105px'});
    } else {
        $(".sidenav").animate({width : '250px'});
        $(".text").animate({marginLeft: '250px'});

    }}
$(".sidebar").click(function () { 
    openOrClose(mediaScreen)
})
$(".closebtn").click(function (){
    $(".sidenav").animate({width : '0'});
    $(".text").animate({marginLeft: '0'});
})

$(".inner").slideUp();
$(".inner:first").slideDown();
$("document").ready(function () {
    $(".Double").click(function () { 
    $(this).next().slideToggle(500);
    $(".inner").not( $(this).next() ).slideUp(500);
});
})


function countdownTimer() {
	
		var endAt = new Date("27 july 2024 9:56:00 GMT+01:00");			
			endAt = (Date.parse(endAt) / 1000);

			var timeNow = new Date();
			timeNow = (Date.parse(timeNow) / 1000);

			var timeLeft = endAt - timeNow;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$(".days").html(days + "<span>D</span>");
			$(".hours").html(hours + "<span>H</span>");
			$(".minutes").html(minutes + "<span>M</span>");
			$(".seconds").html(seconds + "<span>S</span>");		
	}
	setInterval(function() { countdownTimer(); }, 1000);

    var max = 100;
$('textarea').keyup(function() {
    var length = $(this).val().length;
    var numOfCher = max-length;
    if(numOfCher<=0)
            {
                $(".characters").text("your available character finished");
            }
        else{
                $(".characters").text(numOfCher);
            }
});

$(".btn").click(function () { 
    console.log("hi");
    $('textarea').val("");

});