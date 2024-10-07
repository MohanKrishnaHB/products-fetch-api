function getSingleUserRow(userObj) {
    return `<tr>
        <td>${userObj.fName}</td>
        <td>${userObj.lName}</td>
        <td>${userObj.email}</td>
        <td>
            <a type="button" class="btn btn-sm" href="updateUsers.html?userId=${userObj.id}">Edit</a>
            <button type="button" class="btn btn-danger btn-sm" onclick="deleteUser(${userObj.id})">Delete</button>
        </td>
    </tr>`
}

function setAllUsersTable() {
    const allUsers = getAllUsers().slice(1)
    if(allUsers.length == 0) {
        $("#userTableContainer").html(`<div class="d-flex justify-content-center w-100">
                        <img src="Assests/images/no-data-image.jpg" class="rounded img-fluid w-50"/>
                    </div>`)
    }
    else {
        $("#usersTable").html(allUsers.map((item) => getSingleUserRow(item)).join(""))
    }
}

function addUser() {
    event.preventDefault();
    const fName = $("#addUserForm input#fname").val()
    const lName = $("#addUserForm input#lname").val()
    const email = $("#addUserForm input#email").val()
    const pwd = $("#addUserForm input#pwd").val()
    addUserToLocalStorage(fName, lName, email, pwd)
    location.reload();
}

$(document).ready(function () {
    setAllUsersTable()
});
