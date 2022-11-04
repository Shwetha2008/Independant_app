function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);

    window.location = "recycling list.html";
}
function addAdmin()
{
    user_name = document.getElementById("admin_name").value;
    localStorage.setItem("admin_name", admin_name);

    window.location = "recycle1.html";
}