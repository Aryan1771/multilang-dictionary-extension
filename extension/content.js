let tooltip = document.createElement("div")

tooltip.style.position = "absolute"
tooltip.style.background = "#222"
tooltip.style.color = "white"
tooltip.style.padding = "8px"
tooltip.style.borderRadius = "6px"
tooltip.style.fontSize = "13px"
tooltip.style.maxWidth = "250px"
tooltip.style.zIndex = "999999"
tooltip.style.display = "none"

document.body.appendChild(tooltip)

let hoverTimeout = null

document.addEventListener("mousemove", function(e){

clearTimeout(hoverTimeout)

hoverTimeout = setTimeout(()=>{

let range

if(document.caretRangeFromPoint){
range = document.caretRangeFromPoint(e.clientX, e.clientY)
}else if(document.caretPositionFromPoint){
let pos = document.caretPositionFromPoint(e.clientX,e.clientY)
range = document.createRange()
range.setStart(pos.offsetNode,pos.offset)
}

if(!range) return

let node = range.startContainer

if(!node || node.nodeType !== 3) return

let text = node.textContent

let offset = range.startOffset

let left = text.slice(0,offset).search(/\S+$/)

let right = text.slice(offset).search(/\s/)

if(right < 0) right = text.length

let word = text.slice(left, offset + right).trim()

if(word.length < 3) return

lookupWord(word,e.clientX,e.clientY)

},600)

})

async function lookupWord(word,x,y){

try{

let response = await fetch(
"https://api.dictionaryapi.dev/api/v2/entries/en/"+word
)

let data = await response.json()

if(data.title){

tooltip.style.display="none"
return

}

let definition = data[0].meanings[0].definitions[0].definition

tooltip.innerHTML = "<b>"+word+"</b><br>"+definition

tooltip.style.left = x + 15 + "px"
tooltip.style.top = y + 15 + "px"

tooltip.style.display = "block"

}catch{

tooltip.style.display="none"

}

}

document.addEventListener("mouseout",()=>{

tooltip.style.display="none"

})