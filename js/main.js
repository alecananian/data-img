$(function () {
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
}());