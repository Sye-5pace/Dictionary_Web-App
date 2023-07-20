import { loadTheme, toggleTheme } from './theme-switcher'
import { applyFont,loadSelected } from './font-switcher.ts'


// import { loadTheme, toggleTheme } from './theme-switcher'

document.addEventListener('DOMContentLoaded', () => {
    // let fontValue: string = document.querySelector('select').value
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
});
  
// const fontGroup = document.getElementById('font-group') as HTMLSelectElement;
// const defaultFont = 'serif';
// let selectedFont = localStorage.getItem('selectedFont') || defaultFont;

// const applyFont = (font) => {
// document.body.classList.remove(`font-${selectedFont}`);
// document.body.classList.add(`font-${font}`);
// document.getElementById('word-search')?.classList.remove(`font-${selectedFont}`);
// document.getElementById('word-search')?.classList.add(`font-${font}`);
// document.getElementById('word-phonetic')?.classList.remove(`font-${selectedFont}`);
// document.getElementById('word-phonetic')?.classList.add(`font-${font}`);
// selectedFont = font; // Update the selectedFont to the new value after applying the font.
// };

// fontGroup.value = selectedFont;
// applyFont(selectedFont);

// fontGroup.addEventListener('change', () => {
//     const newFont = fontGroup.value;
//     applyFont(newFont);
//     localStorage.setItem('selectedFont', newFont); // Store the newFont value in localStorage.
// });