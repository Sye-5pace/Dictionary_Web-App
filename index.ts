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
        toggleTheme(true);
    })
    switchTheme.addEventListener("click",()=>{
        toggleTheme(false);
    })

    //Audio feature
    const audio = document.querySelector('audio') as HTMLAudioElement;
    const play = document.querySelector('#play') as HTMLElement;
    const pause = document.querySelector('#pause') as HTMLElement;
    play.addEventListener('click',()=>{
        audio.play();
        play.style.display = "none";
        pause.style.display = "block";
    })

    pause.addEventListener('click',()=>{
        audio.pause();
        play.style.display = "block";
        pause.style.display = "none";
    })
    
    audio.addEventListener("ended",()=>{
        play.style.display = "block";
        pause.style.display = "none";
    })
});
  
