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

// Filtor Scroller
const scroller = document.getElementById('filterScroller');
    let pos = 0, paused = false;

    function autoScroll() {
        if (!paused) {
            const max = scroller.scrollWidth - scroller.clientWidth;
            pos += 0.6;
            if (pos >= max) pos = 0;
            scroller.scrollLeft = pos;
        }
        requestAnimationFrame(autoScroll);
    }
    autoScroll();

    scroller.addEventListener('mouseenter', () => paused = true);
    scroller.addEventListener('mouseleave', () => paused = false);
    scroller.addEventListener('touchstart', () => paused = true);
    scroller.addEventListener('touchend', () => setTimeout(() => paused = false, 2000));