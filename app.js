const insert = document.getElementById("insert")

window.addEventListener("keydown" , (e)=> {
    insert.innerHTML =  `
        <div class="key">
            <small>event.Key</small>
            ${e.key == " " ? "Space" : e.key}
        </div>
        <div class="key">
            <small>event.KeyCode</small>
            ${e.keyCode}
        </div>
        <div class="key">
            <small>event.Code</small>
            ${e.code}
        </div>
    `
})
