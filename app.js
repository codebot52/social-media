const menuItems = document.querySelectorAll('.menu-item');
const messagesNotification= document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root')
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');









const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
} 

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').style.display= 'block';
            document.querySelector('#notifications .notification-count').style.display= 'none';
        }
    })
})


messagesNotification.addEventListener('click', ()=> {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout( ()=> {
        messages.style.boxShadow = 'none';
    }, 2000);
    
})



const openThemeModal= () =>{
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e)=> {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

theme.addEventListener('click', openThemeModal)
themeModal.addEventListener('click', closeThemeModal);


const changeActiveColorClass=()=>{
    colorPalette.forEach(colorPicker=>{
        colorPicker.classList.remove('active');
    })
}


colorPalette.forEach(color => {
    color.addEventListener('click', ()=>{
        let primaryHue;
        changeActiveColorClass();
        if(color.classList.contains('color-1')){
            primaryHue= 252; 
        }else if(color.classList.contains('color-2')){
            primaryHue= 52;
        }else if(color.classList.contains('color-3')){
            primaryHue= 352;
        }else if(color.classList.contains('color-4')){
            primaryHue= 152;
        }else if(color.classList.contains('color-5')){
            primaryHue= 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue)
    })
})






