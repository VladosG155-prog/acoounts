document.addEventListener('DOMContentLoaded',()=>{
    // SNIPPETS
        
        // MobileBurger
        const mobMenu = document.querySelector('.mobile-menu')
        const mobMenuOpen = document.querySelector('.mobile-menu-open')
            if(mobMenu){
                mobMenu.addEventListener('click',()=>{
                    mobMenu.classList.toggle('active')
                    mobMenuOpen.classList.toggle('active')
                })
            }
})