

document.addEventListener('DOMContentLoaded',() => {
        //importing interface for word type
        //font-switcher
        const fontGroup = document.getElementById('font-group') as HTMLSelectElement;
        let selectedFont= localStorage.getItem('selectedFont');
        
        document.body.classList.add(`font-${selectedFont}`);

        fontGroup.addEventListener('change',()=> {
                const newFont = fontGroup.value;
                document.body.classList.remove(`font-${selectedFont}`);
                document.body.classList.add(`font-${newFont}`);

                selectedFont = newFont;
                localStorage.setItem('selectedFont', selectedFont);
        })



        const switchTheme = document.getElementById('switch');
        const dark = document.getElementById('dark');
//    const switchContainer = document.getElementById("switch-container");


   dark.addEventListener("click",() => {
        switchTheme.classList.add('switch-dark');
   })
})