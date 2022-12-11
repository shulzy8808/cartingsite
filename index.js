let hrtbntn = document.querySelector("#love")
let hrtbntn1 = document.querySelector("#love1")
let hrtbntn2 = document.querySelector("#love2")
let hrtbntn3 = document.querySelector("#love3")
hrtbntn.style.color =' white'

function hrt(){
    if(hrtbntn.style.color === 'white'){
        hrtbntn.style.color =' red'
    }else{
        hrtbntn.style.color = 'white'
    }
}

hrtbntn1.style.color =' white'

function hrt1(){
    if(hrtbntn1.style.color === 'white'){
        hrtbntn1.style.color =' red'
    }else{
        hrtbntn1.style.color = 'white'
    }
}
hrtbntn2.style.color =' white'

function hrt2(){
    if(hrtbntn2.style.color === 'white'){
        hrtbntn2.style.color =' red'
    }else{
        hrtbntn2.style.color = 'white'
    }
}
hrtbntn3.style.color =' white'

function hrt3(){
    if(hrtbntn3.style.color === 'white'){
        hrtbntn3.style.color =' red'
    }else{
        hrtbntn3.style.color = 'white'
    }
}
hrtbntn.addEventListener('click', hrt)
hrtbntn1.addEventListener('click', hrt1)
hrtbntn2.addEventListener('click', hrt2)
hrtbntn3.addEventListener('click', hrt3)
