import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const changeHandler = (event) => {
    setText(event.target.value);
  };
  useEffect(() => {
    const words = text.split(' ');
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
    });
    setWordCount(wordCount);
  }, [text]);
  return (
    <body>
    <div>
      <h1 class="c">Paragraph word counter</h1>
      <div classname="b">
        <textarea
          value={text}
          onChange={changeHandler}
          placeholder ='Enter text here'
        ></textarea>

        <div>
          <h2 className='wc'>Word Count: {wordCount}</h2>
        </div>
      </div>
    </div>
    </body>
  );
}

export default App;