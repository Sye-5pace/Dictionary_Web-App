import { WordEntry } from "./interface";

const wordInput = document.getElementById("word-search") as HTMLInputElement;
const search = document.getElementById("search")
let wordValue:string='';

//
search.addEventListener("click", () => {
  wordValue = wordInput.value.toLowerCase().trim();
  if (/^[a-zA-Z]+$/.test(wordValue)) {
    wordSearch();
  } else {
    console.log("Invalid word. Please enter a valid word.");
  }
});

    
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
        // console.log(word[0]);
        const [wordIndex] = word
        console.log(wordIndex);
        dictionaryUpdater(wordIndex)
    }catch(error: any){
        console.log(error);
    }
}


export const dictionaryUpdater = (wordIndex: WordEntry): void => {
  const wordPhonetic = document.getElementById("word-phonetic") as HTMLElement;
  const word = wordIndex.word;
  const phonetic = wordIndex.phonetic;
  const url = wordIndex.sourceUrls;
  const [firstPhonetic, secondPhonetic] = wordIndex.phonetics;

  let firstPhoneticAudio;
  for (const phonetic of wordIndex.phonetics) {
    if (phonetic.audio) {
      firstPhoneticAudio = phonetic.audio;
      break;
    }
  }

  const nounMeanings = wordIndex.meanings.filter(
    (meaning) => meaning.partOfSpeech === "noun"
  );
  const verbMeanings = wordIndex.meanings.filter(
    (meaning) => meaning.partOfSpeech === "verb"
  );

  if (nounMeanings.length > 0) {
    const firstNounMeaning = nounMeanings[0];
    const firstNounDefinition = firstNounMeaning.definitions[0]?.definition;
    const secondNounDefinition = firstNounMeaning.definitions[1]?.definition;

    document.getElementById("noun-meaning-1").textContent = firstNounDefinition;
    document.getElementById("noun-meaning-2").textContent = secondNounDefinition;
  }

  if (verbMeanings.length > 0) {
    const firstVerbMeaning = verbMeanings[0];
    const firstVerbDefinition = firstVerbMeaning.definitions[0]?.definition;
    const firstVerbExample = firstVerbMeaning.definitions[0]?.example;

    document.getElementById("verb-meaning").textContent = firstVerbDefinition;
    document.getElementById("verb-example").textContent = `"${firstVerbExample}"`;
  }

  wordPhonetic.querySelector("h1").textContent = word;
  wordPhonetic.querySelector("p").textContent = phonetic;
  document.getElementById("source-link").href = url[0];
  document.getElementById("source-link").textContent = url[0];

  const audioTag = document.getElementById("audio-tag") as HTMLAudioElement;
  audioTag.src = firstPhoneticAudio || '';

  audioTag.addEventListener("play", () => {
    audioTag.classList.add("playing");
  });

  audioTag.addEventListener("pause", () => {
    audioTag.classList.remove("playing");
  });

  const synonymsValue = document.getElementById("synonyms-value");
  const synonyms = wordIndex.meanings
    .filter((meaning) => meaning.partOfSpeech === "noun")
    .flatMap((meaning) => meaning.synonyms);
  if (synonyms.length > 0) {
    synonymsValue.textContent = synonyms.join(", ");
  } else {
    synonymsValue.textContent = "No synonyms found.";
  }
};


//error message
// TypeError: Cannot read properties of undefined (reading 'definitions')
//     at dictionaryUpdater (dictionary-loader.ts:56:50)