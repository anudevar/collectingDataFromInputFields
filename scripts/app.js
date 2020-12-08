$(document).ready(function () {
        $('#submitButton').click(function() {
            let firstName = $('#firstName').val();
            let lastName = $('#lastName').val();
            let streetName = $('#streetName').val();
            let city = $('#city').val();
            let country = $('#country').val();
            let json = {
                "name": firstName,
                "lastname": lastName,
                "street": streetName,
                "city": city,
                "country": country,
                "additionalProp1": {}
            }
            console.log(json);
        });
});