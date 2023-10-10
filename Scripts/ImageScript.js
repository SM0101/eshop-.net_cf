$(document).ready(function () {

   
    $('#submit').click(function () {


        var formData = new FormData();
        formData.append('file', $('#imageupload')[0].files[0]);

        $.ajax({
            type: 'POST',
            url: '/Order/save',
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
               
            },
            error: function (error) {
               
            }
        });
    });
});