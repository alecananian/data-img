$(function () {
  var $app_container = $('#app-container');
  var $app_error = $('#app-error');
  
  if (window.FileReader) {
    var $encoder = $('#encoder');
    $('input', $encoder).change(function () {
      var file = this.files[0];
      if (file) {
        var reader = new FileReader();
        
        reader.onloadend = function () {
          $data_uri.val(reader.result).trigger('change');
        }
        
        reader.readAsDataURL(file);
      }
    });
    
    var $decoder = $('#decoder');
    var $image_preview = $('#image-preview');
    var $image = $('img', $image_preview);
    var $data_uri = $('textarea', $decoder).on('change keyup cut paste', function () {
      var data_uri = $(this).val(); 
      if (data_uri && data_uri.length) {
        $image_preview.show();
        $image.attr('src', data_uri);
      } else {
        $image_preview.hide();
      }
    });
  } else {
    $app_container.hide();
    $app_error.html('Sorry, your browser is not compatible with this app. Please upgrade to a <a href="http://caniuse.com/#feat=filereader" target="_blank">compatible browser</a>.').removeClass('collapse');
  }
}());