import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([]);
  const [source, setSource] = useState('');
  const [target, setTarget] = useState('');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  // Fetch Languages Once
  useEffect(() => {
    const allLang = localStorage.getItem('all-lang');
    if (allLang) {
      setLanguages(JSON.parse(allLang));
    } else {
      fetch('https://de.libretranslate.com/languages')
        .then((res) => res.json())
        .then((lang) => {
          setLanguages(lang);
          localStorage.setItem('all-lang', JSON.stringify(lang));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  // Handle Conversion
  async function handleConvert() {
    // if (!source || !target || !inputText) {
    //   alert('Please select both languages and enter text.');
    //   return;
    // }

    const res = await fetch("https://libretranslate.com/translate", {
      method: "POST",
      body: JSON.stringify({
        q: "hello",
        source: "auto",
        target: "en",
        format: "text",
        alternatives: 3,
      }),
      headers: { "Content-Type": "application/json" }
    });

    console.log(await res.json());
  }

  return (
    <>
      <div className="source flex">
        <select onChange={(e) => setSource(e.target.value)} value={source}>
          <option value="">-- Convert from --</option>
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text here"
        ></textarea>
      </div>

      <div className="target flex">
        <select onChange={(e) => setTarget(e.target.value)} value={target}>
          <option value="">-- Convert to --</option>
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
        <textarea
          value={outputText}
          readOnly
          placeholder="Translated text will appear here"
        ></textarea>
      </div>

      <button onClick={handleConvert}>Convert</button>
    </>
  );
}

export default App;
