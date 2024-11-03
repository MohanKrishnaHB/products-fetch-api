function login() {
    event.preventDefault()
    const allUsers = getAllUsers()
    $("#loginErrorMessage").hide();
    const email = $("input#email").val();
    const password = $("input#pwd").val();
    
    const loggedInUser = allUsers.filter((item) => (item.email == email && item.password == password))[0]

    if(loggedInUser==undefined || loggedInUser==null) {
        $("#loginErrorMessage").html(CONFIG.error.loginErrorMessage);
        $("#loginErrorMessage").show();
        return
    }
    setSession(loggedInUser);
    if(loggedInUser.fName=='admin')
        window.location = "dashboard.html"
    else
        window.location = "products.html"
}

function setSession(loggedInUser) {
    localStorage.setItem(CONFIG.localStorageKeys.loggedInUserId, loggedInUser.id)
}

// function setDefaultUserNameAndPassword() {
//     $("input#email").val(CONFIG.email);
//     $("input#pwd").val(CONFIG.password);
// }

// $(document).ready(function () {
//     setDefaultUserNameAndPassword()
// })