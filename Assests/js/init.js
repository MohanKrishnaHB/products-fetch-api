function setAdminUser() {
    const existingUsers = getAllUsers();
    if(existingUsers.length==0) {
        addUserToLocalStorage("admin", "admin", "admin@gmail.com", "123456")
    }
}

function handleLogin() {
    if(window.location.href.includes("login.html")) {
        return
    }
    const loggedInUserId = localStorage.getItem(CONFIG.localStorageKeys.loggedInUserId)
    const allUsers = getAllUsers()
    const loggedInUser = allUsers.filter((item) => item.id==loggedInUserId)
    if(loggedInUserId == "" || loggedInUserId==null || loggedInUserId==undefined || loggedInUser.length==0) {
        window.location = "login.html"
        return 
    }
}

function handleLogout() {
    localStorage.setItem(CONFIG.localStorageKeys.loggedInUserId, "")
    window.location = "login.html"
}

$(document).ready(function () {
    setAdminUser();
    handleLogin();
});
