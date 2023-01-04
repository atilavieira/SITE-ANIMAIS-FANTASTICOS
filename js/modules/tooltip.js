export default function initTabNav() {
 //eventos em cima do mapa  
const tootips =document.querySelectorAll('[data-tooltip]')
tootips.forEach((item)=> {
  item.addEventListener('mouseover',onMouseOver)
})

function onMouseOver (event){
  const tooltipBox=criarTooltipBox(this)
  onMouseMove.tooltipBox=tooltipBox;
  this.addEventListener('mousemove',onMouseMove)
  onMouseLeave.tooltipBox =tooltipBox;
  onMouseLeave.element=this;
  this.addEventListener('mouseleave',onMouseLeave)
}
// remover eventos
const onMouseLeave ={
  handleEvent(){
   this.tooltipBox.remove() 
  this.element.removeEventListener('mouseleave',onMouseLeave)
  this.element.removeEventListener('mousemove',onMouseMove)

  }
} //evento faz com que apareça exatamente onde passar o mouse e siga ele

const onMouseMove = {
  handleEvent(event){
    this.tooltipBox.style.top = event.pageY +20+ 'px';
    this.tooltipBox.style.left = event.pageX +20+ 'px';

  }
}


//criou a div adicionou o atributo adicionou a lista adicionou o texto e adicionou o filho o body retornou tooltip box

function criarTooltipBox(element){
  const tooltipBox=document.createElement('div')
  const text = element.getAttribute('aria-label')
  tooltipBox.classList.add('tooltip')
  tooltipBox.innerText= text;
  document.body.appendChild(tooltipBox)
  return tooltipBox;

}
}
