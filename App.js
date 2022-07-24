// import logo from './logo.svg';
// import React, { useState } from 'react';
import './App.css';
import React, { useState } from 'react';
import InputShort from './components/InputShort';
import ShortLink from './components/ShortLink';

function App() {
  const [inputValue, setInputValue] = useState("")

  return (
    <div>
      <InputShort setInputValue={setInputValue} />
      <ShortLink inputValue={inputValue} />
    </div>
  );
}

export default App;
