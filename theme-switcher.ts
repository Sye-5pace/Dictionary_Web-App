export const loadTheme = () => {
    const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    toggleTheme(darkModeEnabled);
}


// Function to toggle the theme
export const toggleTheme = (darkModeEnabled) => {
    const body = document.querySelector('body') as HTMLBodyElement;
    const inputField = document.querySelector('#word-search') as HTMLInputElement;
    const word = document.querySelector('#word-phonetic > h1') as HTMLHeadingElement;
    const nounMeaning1 = document.querySelector('#noun-meaning-1') as HTMLLIElement;
    const nounMeaning2 = document.querySelector('#noun-meaning-2') as HTMLLIElement;
    const nounMeaning3 = document.querySelector('#noun-meaning-3') as HTMLLIElement;
    const synonymsVal = document.querySelector('#synonyms-value') as HTMLSpanElement;
    const source = document.querySelector('#source-link') as HTMLAnchorElement;
    const fontGroup = document.querySelector('#font-group') as HTMLSelectElement;
    const switchContainer = document.querySelector('#switch-container') as HTMLDivElement;
    const switchTheme = document.querySelector('#switch') as HTMLDivElement;
    const moonIcon = document.querySelector('#dark') as HTMLElement;
    const logo = document.querySelector('#logo') as HTMLElement;
  
    // Get the theme preference from localStorage
    if(darkModeEnabled) {
          switchTheme.style.transform = "translateX(16.5px)  translateY(0)";
          body.style.backgroundColor = '#040504';
          body.style.color = '#c9c9c8';
          switchContainer.style.backgroundColor = '#a245ec';
          switchTheme.style.backgroundColor = '#fffaff';
          moonIcon.classList.add('fill-[#683a92]');
          logo.classList.add('fill-[#2f2e2f]');
          word.style.color = '#f3f2f3';
          fontGroup.style.backgroundColor = '#040504';
          fontGroup.style.color = '#fff';
          nounMeaning1.style.color = '#bfbbc3';
          nounMeaning2.style.color = '#bfbbc3';
          nounMeaning3.style.color = '#bfbbc3';
          synonymsVal.style.color = '#683a92';
          source.style.color = '#bfbbc3';
        //   saveThemePreference()
        } else {
            switchTheme.style.transform = "translateX(0) translateY(0)";
          body.style.backgroundColor = '#fff';
          body.style.color = '#000';
          inputField.style.color = '#000';
          switchContainer.style.backgroundColor = '#757575';
          switchTheme.style.backgroundColor = '#fffaff';
          moonIcon.classList.remove('fill-[#683a92]');
          logo.classList.remove('fill-[#2f2e2f]');
          word.style.color = '#f3f2f3';
          fontGroup.style.backgroundColor = '#fff';
          fontGroup.style.color = '#000';
          nounMeaning1.style.color = '#000';
          nounMeaning2.style.color = '#000';
          nounMeaning3.style.color = '#000';
          synonymsVal.style.color = '#000';
          source.style.color = '#000';
    }
    saveThemePreference(darkModeEnabled)
};

export const saveThemePreference = (darkModeEnabled: boolean) => {
    localStorage.setItem('darkModeEnabled', darkModeEnabled ? 'true' : 'false');
}
  
