const btn = document.querySelector('#v2')
btn.onclick = function () {
    console.log("you clicked me")
    console.log("I hope it worked")

}

function scream() {
    console.log("ahhhhhhhh")
    console.log("stop touching me")
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = function () {
    alert('youclicked me')
}

const btns3 = document.querySelector('#v3')
btns3.addEventListener('mouseup', scream
)

function twist() {
    console.log("twist")
}

function shout() {
    console.log("shout")
}

const tasButton = document.querySelector('#tas')
// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist, { once: true })
tasButton.addEventListener('click', shout)