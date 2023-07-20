export const applyFont = (font: string) => {
    const body = document.querySelector('body') as HTMLBodyElement;
    const inputField = body.querySelector('input') as HTMLInputElement;
    const word = document.querySelector('#word-phonetic > h1') as HTMLHeadingElement 
    if (font === 'serif') {
        body.style.fontFamily = 'Trirong, serif';
        inputField.style.fontFamily = 'Trirong, serif';
        word.style.fontFamily = 'Trirong, serif';
    } else if (font === 'sans') {
        body.style.fontFamily = 'Poppins, sans-serif';
        inputField.style.fontFamily = 'Poppins, sans-serif';
        word.style.fontFamily = 'Poppins, sans-serif';
    } else if (font === 'mono') {
        body.style.fontFamily = 'Azeret, monospace';
        inputField.style.fontFamily = 'Azeret, monospace';
        word.style.fontFamily = 'Azeret, monospace';
    }
}

export const loadSelected = ()=>{
    return localStorage.getItem('selectedFont');
}