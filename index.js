let count=0

let intros= document.getElementById("intro")
let saveEL=document.getElementById("save-el")


function incr(){
	count+=1
	intros.innerText=count
}

function sv(){
let countstr= count+ "-"
saveEL.innerText+= countstr
console.log(count)
intros.textContent=0
count=0
}