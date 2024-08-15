const CONFIG = {
    email: "user@gmail.com",
    password: "user123",
    error: {
        loginErrorMessage: "Invalid details!"
    }
}
function login() {
    $("#loginErrorMessage").hide();
    const email = $("input#email").val();
    const password = $("input#pwd").val();
    console.log(email);
    console.log(password);
    
    if(email!=CONFIG.email || password!=CONFIG.password) {
        event.preventDefault()
        $("#loginErrorMessage").html(CONFIG.error.loginErrorMessage);
        $("#loginErrorMessage").show();
    }
}

function setDefaultUserNameAndPassword() {
    $("input#email").val(CONFIG.email);
    $("input#pwd").val(CONFIG.password);
}

$(document).ready(function () {
    setDefaultUserNameAndPassword()
})