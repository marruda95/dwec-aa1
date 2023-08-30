var modalSite = document.getElementById("functionAddSite");



function functionAddSite() {
    modalSite.style.display = "block";
}

if (document.getElementById("windowFunctionSite") != null) {
    document.getElementById("windowFunctionSite").onclick = function () {
        modalSite.style.display = "none";
        document.getElementById("newSiteName").value = "";
        document.getElementById("newUsernameSite").value = "";
        document.getElementById("newPasswordSite").value = "";
    }
}


window.onclick = function (event) {
    if (event.target == modalSite) {
        modalSite.style.display = "none";
        document.getElementById("newSiteName").value = "";
        document.getElementById("newUsernameSite").value = "";
        document.getElementById("newPasswordSite").value = "";
    }
}


function registerNewSite() {
    const params = new URLSearchParams(queryString);
    let categoryId = params.get("categoryId");
    var siteName = document.getElementById("newSiteName").value;
    var siteUser = document.getElementById("newUsernameSite").value;
    var sitePass = document.getElementById("newPasswordSite").value;
    if ((siteName != "" || siteUser != "" || sitePass != "") && (siteName.trim().length > 4 && siteUser.trim().length > 4 && sitePass.trim().length > 4)) {
        fetch("http://localhost:3000/categories/" + categoryId, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: siteName,
                user: siteUser,
                url: "https://trim-cork.info",
                description: "Site Creado por Fetch",
                password: sitePass,
                categoryId: categoryId

            })
        })
        location.reload();
        return false;
    } else {
        alert("5 characters min):")
        if(siteName.trim().length < 5) document.getElementById("newSiteName").style.border = "1px solid red";
        if(siteUser.trim().length < 5) document.getElementById("newUsernameSite").style.border = "1px solid red";
        if(sitePass.trim().length < 5) document.getElementById("newPasswordSite").style.border = "1px solid red";


    }
}

function removeSite(id) {
    if (window.confirm("Would you like to delete this site?")) {
        fetch("http://localhost:3000/sites/" + id, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            }
        })
        location.reload();
        return false;
    }
}

function functionGeneratePassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 8;
    let password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("newPasswordSite").value = password;
}
