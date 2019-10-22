var firtype3
$(document).ready(function(req,res){
    if(window.location.pathname == '/registerFir'){
        var firtype3 = localStorage.getItem("firType")
        console.log("Firtype"+firtype3)
        var getObj = getCookie()
        console.log(getObj)
        $('#inputName').val(getObj.user.name)
        $('#inputNumber').val(getObj.user.mobno)
        $('#inputFirType').val(firtype3)

    }
})

function openLogin(){
    $('#modalLoginForm').modal('show')
}

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
        url: "/auth/signup",
        type: 'POST',
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: 'application/json',
        success: function (res) {
            console.log("Response"+JSON.stringify(res))
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
        url: "/auth/signin",
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
        url: "/crime/registerFir",
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

}

async function getCrimeDetails(value){
    // var value = $('.card').attr('val')
    console.log("value"+value)
    localStorage.setItem("firType",value)
    // $('#inputFirType').attr('value')
    // console.log(val)
    var userObj = await getCookie()
    if(userObj.user){
        // console.log("dklsf"+$('#inputFirType').attr(['value']))
        window.location.href = '/registerFir'
    }
    else{
        alert("Please Login to go ahead")
    }

    // window.location.replace('/registerFir')
}

function getCookie(){
    var cookie = unescape(document.cookie)
    var user1 = cookie.split(';')
    var userO = user1[1].split('=')
    var userObj = JSON.parse(userO[1])
    return userObj
}