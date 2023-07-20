import { loadTheme, toggleTheme,updateDarkModeSwitch } from './theme-switcher'
import { applyFont,loadSelected } from './font-switcher.ts'

document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    //fontSwitcher feature
    const fontGroup = document.querySelector('select')
    const savedFont = loadSelected();
    if(savedFont){
        fontGroup.value = savedFont;
        applyFont(savedFont)
    }
    fontGroup.addEventListener('change',(e) => {
        let newFont = e.currentTarget.value
        console.log('Old font: ' + savedFont);
        console.log('Selected font: ' + newFont);
        applyFont(newFont);
        localStorage.setItem('selectedFont', newFont)
    })

    //Theme feature
    const switchTheme = document.getElementById('switch');
    const dark = document.getElementById('dark');
    
    dark.addEventListener('click',()=>{
        // switchTheme.style.transform = "translateX(16.5px)  translateY(0)";
        toggleTheme(true);
    })
    
    switchTheme.addEventListener("click",()=>{
        toggleTheme(false);
    })
});
  
