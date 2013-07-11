var imageUrl = BL.getSettings().image_url[0];
$('.big-image').css('background', 'url(' + imageUrl + ') no-repeat 0');

$('.continue-button').on('click', function() { 
  alert($(this).attr('data-notes'));
})