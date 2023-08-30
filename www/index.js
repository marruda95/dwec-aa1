var modal = document.getElementById("functionAddCategory");

function functionAddCategory() {
    modal.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("textAdd").value = "";
    }
}
function registerNewCategory() {
    var text = document.getElementById("nameNewCategory").value;
    if (text != "" && text.trim().length > 5) {
        fetch("http://localhost:3000/categories", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: text
            })
        })
        location.reload();
        return false;
    } else {
        alert("Min. 5 characters");
        document.getElementById("nameNewCategory").style.border = "1px solid red";
    }
}

if (document.getElementById("windowFunctionCat") != null) {
    document.getElementById("windowFunctionCat").onclick = function () {
        modal.style.display = "none";
        document.getElementById("nameNewCategory").value = "";
    }
}

function removeCategory(id) {
    if (window.confirm("Would you like to delete this category?")) {
        fetch("http://localhost:3000/categories/" + id, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            }
        })
        location.reload();
        return false;
    }
}

