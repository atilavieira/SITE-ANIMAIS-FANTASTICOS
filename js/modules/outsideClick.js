export default function outsideClick(element, Callback) {
    const html = document.documentElement;
    html.addEventListener("click", handleOutsideClick);
  
    function handleOutsideClick(event) {
      if(!element.contains(event.target)){
        html.removeEventListener("click", handleOutsideClick)
        Callback();
      }
    }
  }


