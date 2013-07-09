var imageUrl = BL.getSettings().image_url_2x[0]

if (BL.isPhone()) {
  imageUrl = BL.getSettings().image_url[0]
}

$('.big-image').css('background', 'url(' + imageUrl + ') no-repeat 0')