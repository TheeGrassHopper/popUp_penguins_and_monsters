$(document).ready( function() {

    //This code will run after your page loads

    $(".yeti").mousedown(function() {
    	if($('.yeti').addClass('yetiOut')){
    		$(this).removeClass('yeti').addClass('jqu');
    	}
        alert("Yaaaarrrr!");;
        window.location.reload()
    });

    $( '.pinguin1' ).click( function() {
        if($( '.pinguin1 ' ).addClass( 'black')){
        	$(this).removeClass('pinguin1').addClass('black');

        }
    });

    $( '.pinguin2' ).click( function() {
        if($( '.pinguin2 ' ).addClass( 'black')){
        	$(this).removeClass('pinguin2').addClass('black2');

        }
    });

    $( '.pinguin3' ).click( function() {
        if($( '.pinguin3 ' ).addClass( 'black')){
        	$(this).removeClass('pinguin3').addClass('black3');

        }
    });

    $( '.pinguin4' ).click( function() {
        if($( '.pinguin4 ' ).addClass( 'black')){
        	$(this).removeClass('pinguin4').addClass('black4');

        }
    });
    $( '.pinguin5' ).click( function() {
        if($( '.pinguin5 ' ).addClass( 'black')){
        	$(this).removeClass('pinguin5').addClass('black4');

        }
    });
    $( '.pinguin6' ).click( function() {
        if($( '.pinguin6 ' ).addClass( 'black')){
        	$(this).removeClass('pinguin6').addClass('black4');

        }
    });
    $( '.pinguin7' ).click( function() {
        if($( '.pinguin7 ' ).addClass( 'black')){
        	$(this).removeClass('pinguin7').addClass('black4');

        }
    });
    $( '.pinguin8' ).click( function() {
        if($( '.pinguin8 ' ).addClass( 'black')){
        	$(this).removeClass('pinguin8').addClass('black4');

        }
    });

});