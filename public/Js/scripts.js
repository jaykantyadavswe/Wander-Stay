/* ===== NAVBAR SECTIONS ===== */


// INDEX Sections
let texSwitches = document.getElementById("switchCheckDefault");
texSwitches.addEventListener('click', () => {
    let taxInfo = document.getElementsByClassName("tax-info");
    for (info of taxInfo) {
        if (info.style.display != "inline") {
            info.style.display = "inline";
        } else {
            info.style.display = "none";
        }
    }
})

if (`<%- currUser %>`) {
  console.log("User logged in:", window.user);
} else {
  console.log("Guest user");
}