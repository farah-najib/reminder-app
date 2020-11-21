$(document).ready(function () {
    $("#button8").click(function () {
        $.ajax({
            url: 'reminder',
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify({
                name: $('#firstname').val(),
                lastname: $('#Lastname').val(),
                email: $('#email').val(),
                phone: $('#Phone').val()
            }),
            success: (data) => {

                console.log(data);
            }
        });
    });
});