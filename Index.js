let header = document.getElementById('header')
        
            window.addEventListener('scroll', () => {
        if(window.scrollY >= 500){
            header.style.background = 'rgb(7, 7, 36)'
        } else {
        header.style.background = 'transparent'
        }
        })