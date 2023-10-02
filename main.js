const btn= document.querySelector("button")
btn.addEventListener("click", ()=>{
  const newcolor= randcolor();
  document.body.style.backgroundColor= newcolor;
  h1s.innerText=newcolor;
  
})
const randcolor = ()=>{
const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);
return `rgb(${r},${g},${b})`

}
const h1s= document.querySelector("h1")
btn.addEventListener("click", ()=>{
h1s.style.color= randcolor();
})