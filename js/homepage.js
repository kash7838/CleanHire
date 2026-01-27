function saveNotes() {
    const notes = document.getElementById("notesArea").value;
    localStorage.setItem("userNotes", notes);
    alert("Notes saved!");
}

function clearNotes() {
    localStorage.removeItem("userNotes");
    document.getElementById("notesArea").value = "";
    alert("Notes cleared!");
}

window.onload = function() {
    const saved = localStorage.getItem("userNotes");
    if (saved) {
        document.getElementById("notesArea").value = saved;
    }
};

// Redirect if not logged in
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
}

// Logout function
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}
