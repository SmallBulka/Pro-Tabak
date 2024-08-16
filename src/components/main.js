function toggleMenu() {
    const burger = document.querySelector('#burger')
    const menu = document.querySelector('#mobile-menu')
    const body = document.querySelector('body')
  
    // const setListener = (element, type, handler) => {
    //     if(element){
    //         return;
    //         }
    //         element.addEventListener(type, handler);
    //         return()=>{
    //             element.removeEventListener(type, handler);
    //     }
    // }
    
    burger?.addEventListener('click', () => {
        burger.classList.toggle('active')
        menu.classList.toggle('hidden')
        menu.classList.toggle('flex')
        body.classList.toggle('overflow-hidden')
      })
    
    // window.addEventListener('resize', () => {
    //     if(window.innerWidth > 767.99) {
            
    //         menu.classList.remove('flex')
    //         burger.classList.remove('active')
    //         body.classList.remove('overflow-hidden')
    //     }
        
    // })
    
  }
  
toggleMenu()