const colorContainer = document.getElementById("color-container");

const refreshBtn = document.getElementById("refresh-btn");

const codeContainer = document.getElementById("code-container");

const downButton = document.querySelector(".fa-angles-down");

function getHexCode() {

    colorContainer.innerHTML = "";

    for (let i = 0; i < 24; i++) {

        let colorHex = Math.floor(Math.random()*16777215).toString(16);

        colorHex = `#${colorHex.padStart(6,"0")}`

        let div = document.createElement("div");

        div.className = "color";
        div.innerHTML = `
        <img src="" class="tick">
        <span class="color-code">${colorHex}</span>`
        div.style.backgroundColor = `${colorHex}`
        colorContainer.appendChild(div);

        div.addEventListener("click",(e)=>{
            navigator.clipboard.writeText(colorHex).then(()=>{

                let li = document.createElement("li");

                li.textContent = colorHex;

                codeContainer.appendChild(li);
                
                div.firstElementChild.setAttribute("src","tick.svg");

                div.lastElementChild.innerText = "Copied!" ;    
                
                setTimeout(() => {
                    div.lastElementChild.innerText = `${colorHex}`
                }, 2500);
                
            })
        })
    }
}

refreshBtn.addEventListener("click", getHexCode);

downButton.addEventListener("click", ()=>{
    codeContainer.classList.toggle("open");
    document.querySelectorAll("li").forEach((item)=>{
        item.classList.toggle("active");
    })
})

document.addEventListener("DOMContentLoaded", getHexCode);