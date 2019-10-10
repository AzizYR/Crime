function signup(){
    var name = $('#orangeForm-name').val()
    var email = $('#orangeForm-email').val()
    var mobno = $('#orangeForm-mobnumber').val()
    var password = $('#orangeForm-pass').val()
    console.log(name,email,mobno,password)
    var data={
        name:name,
        email:email,
        mobno:mobno,
        pass:password
    }
    console.log(data);
    
    $.ajax({
        url: "http://localhost:8008/auth/signup",
        type: 'POST',
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: 'application/json',
        success: function (res) {
            if(res.success){
                alert(res.message)
            }
            else{
                alert(res.message)
            }

        }
    })
}

function login(){
    var email = $('#defaultForm-email').val()
    var password = $('#defaultForm-pass').val()
    // console.log(name,email,mobno,password)
    var data={
        email:email,
        pass:password
    }
    console.log(data);
    
    $.ajax({
        url: "http://localhost:8008/auth/signin",
        type: 'POST',
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: 'application/json',
        success: function (res) {
            if(res.success){
                alert(res.message)
            }
            else{
                alert(res.message)
            }

        }
    })
}

function register_fir() {
    // return      $('#verifyOtp').modal('show');

    var cat = $('#inputMain :selected').val()
    var name = $('#inputName').val()
    number = $('#inputNumber').val()
    var gender = $('#inputGender :selected').val()
    var city = $('#inputCity').val()
    var time = $('#inputTime').val()
    var date = $('#inputDate').val()
    var details = $('#inputDetails').val()
    var addr = $('#inputAddress').val()

    var register_fir = {
        firtype:cat,
        name:name,
        number:number,
        gender:gender,
        place:city,
        time:time,
        date:date,
        details:details,
        addr:addr
    }

    $.ajax({
        url: "http://localhost:8008/crime/registerFir",
        type: 'POST',
        data: JSON.stringify(register_fir),
        dataType: 'json',
        contentType: 'application/json',
        success: function (res) {
            if(res.success){
                alert(res.message)
            }
            else{
                alert(res.message)
            }

        }
    })

    // if (isNaN(number) || number.length != 10) {
    //     alert("Please Enter Valid Number");
    //     return;
    // }
    // if (alternateNumber && (alternateNumber.length != 10 || isNaN(alternateNumber) || alternateNumber == number)) {
    //     if (alternateNumber == number) {
    //         alert("Alternate number should be different")
    //         return
    //     }
    //     else {
    //         alert("Please Enter Valid Alternate Number")
    //         return;
    //     }
    // }

    // if(gender != '1' && gender!= '2'){
    //     alert("Please Enter Your Gender")
    //     return
    // }
    // if (cat == "You are a?" || !name  || !city) {
    //     alert("Please Provide All The Details");
    //     return;
    // }
    // if(cat == '1'){
    //     if(alternateNumber){
    //         loginMainDetails.doctor['alternateNumber'] = alternateNumber
    //     }
    //     loginMainDetails['category'] = CATEGORIES.DOCTOR
    //     loginMainDetails.doctor['name'] = name
    //     loginMainDetails.doctor['number'] = number
    //     loginMainDetails.doctor['gender'] = gender
    //     loginMainDetails.doctor['city'] = city
    //     console.log(loginMainDetails)
    //     $('#addClinic').modal('hide')
    //     $('#verifyOtp').modal('show')

    //     var data = {
    //         "mobile": number
    //     }

    //     generateOtp(data);
    //     register();


    // }
    // else if(cat== '2'){
    //     if(alternateNumber){
    //         loginMainDetails.doctor['alternateNumber'] = alternateNumber
    //     }
    //     loginMainDetails['category'] = CATEGORIES.DOCTOR_WITH_CLICNIC;
    //     loginMainDetails.doctor['name'] = name;
    //     loginMainDetails.doctor['number'] = number;
    //     loginMainDetails.doctor['gender'] = gender;
    //     loginMainDetails.doctor['city'] = city;
    //     console.log(loginMainDetails)

    //     $('#verifyOtp').modal('hide')
    //     $('#addClinic').modal('show')

    //     var data = {
    //         "mobile": number
    //     }



    //     // var settings = {
    //     //     "async": true,
    //     //     "crossDomain": true,
    //     //     "url": "https://control.msg91.com/api/sendotp.php?otp=1234&sender=$senderid&message=Your otp is 1234&mobile="+number+"&authkey=297047A6xLaSwM25d9614b0",
    //     //     "type": "POST",
    //     //     "dataType": "json"
    //     //   }

    //     //   $.ajax(settings).done(function (response) {
    //     //     console.log(response);
    //     //   });


    // }
}