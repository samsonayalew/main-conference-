$(document).ready(function(){
//validation for file size
$.fn.validator.Constructor.VALIDATORS.filesize = function ($el) {
    var fileSizeMax = $el.data('filesize');
    if ($el[0].files[0] && $el[0].files[0].size>fileSizeMax) {
        return false;
    } else {
        return true;
    }
};
//validate upload FormData
$('#myForm').validator()
$('#mycarousel').carousel({
	interval:6000
});//mycarousel
$('#sponsors').carousel({
	interval:5000
});//sponsors
$('.selector').on('change', function() {
	$.ajax({
		type:"POST",
		url: 'selectionchange',
		data: {"userchange": $(this).val(), "id": $(this).attr('id')},
		success:function(){
			//alert('success');
		}
	});
});
//role selection
$( ".roleselector" ).change(function(e){
  var value =  $(this).val();
  var id = e.target.id;
  $.ajax({
    method: "POST",
    url: "rolechange",
    data: { role: value, id: id }
  });
});
$(".trackselector").change(function(e){
  var value =$(this).val();
  var id = e.target.id;
  $.ajax({
    method: "POST",
    url: "trackchange",
    data: {coordinator: value, track: id}
  });
});

$('#loginsubmit').click(function(e){
  var email = $('#email').val();
  var password = $('#password').val();

  $.ajax({
    method: "POST",
    url: 'loginpost',
    data:{"email":email, "password":password},
    success: function(data){
      window.location.href = "/";
    }
  });
});

// $('.uploadeddoc').click(function(e){
//   var uploadeddoc = e.target.id;
//   $.ajax({
//     method: "POST",
//     url: "downloaddoc",
//     data:{"uploadeddoc": uploadeddoc},
//     responseType: 'arraybuffer',
//     success: function(){
//       //window.open('/download?'+ uploadeddoc);
//     }
//   });
// });





//on submission of paper
/*
$('#submitPaper').on('click', function(){
	var data = new FormData();
	data.append('file', $('#submitFile')[0].files[0]);
	data.append('track', $('#submitTrack').val());
	data.append('submissiontype', $('#submissionType').val());
	data.append('title', $('#submitTitle').val());
	data.append('abstract', $('#submitAbstract').val());
	data.append('keyword', $('#submitKeyword').val());

	$.ajax({
		url:'upload',
		type:'post',
		contentType: false,
		processData: false,
		data:data
	}).done(function(){
		alert('alert');
	});
});
*/
});