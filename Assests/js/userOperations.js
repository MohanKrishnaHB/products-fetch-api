function setUsersLocalStorage(userList) {
    localStorage.setItem(CONFIG.localStorageKeys.users, JSON.stringify(userList))
}

function addUserToLocalStorage(fName, lName, email, password) {
    var currentUsers = JSON.parse(localStorage.getItem(CONFIG.localStorageKeys.users) || "[]") || []
    currentUsers.push({
        id: currentUsers.length,
        fName: fName,
        lName: lName,
        email: email,
        password: password
    })
    setUsersLocalStorage(currentUsers)
}

function getAllUsers() {
    return (JSON.parse(localStorage.getItem(CONFIG.localStorageKeys.users) || "[]") || [])
}

function deleteUser(userId) {
    var allUsers = getAllUsers()
    allUsers = allUsers.filter((item) => item.id!=userId)
    setUsersLocalStorage(allUsers)
    setAllUsersTable()
    alert("User Deleted Successfully")
}

function updateUserToLocalStorage(userId, fName, lName, email, password) {
    var currentUsers = JSON.parse(localStorage.getItem(CONFIG.localStorageKeys.users)) || []
    currentUsers = currentUsers.map((item) => (item.id==userId?{
        id: item.id,
        fName: fName,
        lName: lName,
        email: email,
        password: password
    }:item))
    setUsersLocalStorage(currentUsers)
}
