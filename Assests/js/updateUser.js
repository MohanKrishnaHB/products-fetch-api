function getUserIdFromQueryParam(userIdKey) {
    let params = new URL(window.location).searchParams;
    return params.get(userIdKey);
  }
  

function setfieldsForUpdate() {
    const userId = getUserIdFromQueryParam(CONFIG.userIdKey)
    const allUsers = getAllUsers()
    const selectedUser = allUsers.filter((item) => item.id==userId)[0]
    console.log(selectedUser)
    $("#updateUserForm input#id").val(selectedUser.id)
    $("#updateUserForm input#fname").val(selectedUser.fName)
    $("#updateUserForm input#lname").val(selectedUser.lName)
    $("#updateUserForm input#email").val(selectedUser.email)
    $("#updateUserForm input#pwd").val(selectedUser.password)
}

function updateUser() {
    event.preventDefault();
    const id = $("#updateUserForm input#id").val()
    const fName = $("#updateUserForm input#fname").val()
    const lName = $("#updateUserForm input#lname").val()
    const email = $("#updateUserForm input#email").val()
    const pwd = $("#updateUserForm input#pwd").val()
    updateUserToLocalStorage(id, fName, lName, email, pwd)
    alert("User Updated successfully")
    window.location="users.html"
}


$(document).ready(function () {
    setfieldsForUpdate()
});
