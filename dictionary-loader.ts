import { WordEntry } from "./interface";

const wordInput = document.getElementById("word-search") as HTMLInputElement;
let wordValue:string='';

//
wordInput.addEventListener("input",()=>{
    wordValue = wordInput.value.toLowerCase();
    wordSearch();
})

    
//making a fetch request
const wordSearch = async() => {
    //DictionaryAPIEntryPoint + wordInput value
    const dictionaryEntry = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordValue}`;
    try{
        const response = await fetch(dictionaryEntry);
        if(!response.ok){
            throw new Error("Request failed with status: " + response.status);
        }
        const word: WordEntry[] = await response.json();
        console.log(word[0]);
    }catch(error: any){
        console.log(error);
    }
}