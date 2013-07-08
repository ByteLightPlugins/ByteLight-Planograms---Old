$('p').text('Hello World: this is the preview page that gets used to preview your app');
  $('button').on('click', function() {
  BL.displayApp(getAppId())
});