$('.blockInfo').click(function(){
    if (!$(this).data('status')) {
        $(this).html('+');
        $(this).data('status', true);
    }
    else {
        $(this).html('-');
        $(this).data('status', false);
    }
});