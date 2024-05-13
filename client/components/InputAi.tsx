import React, { useState } from 'react';
import '../css/input-ai.css';
import { textLog } from '../text-log/text-log';

export default function InputAi() {
  const [input, updateInput] = useState<string | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateInput(event.target.value)
  };

  const handleSubmit = () => {
    if (input !== null) {
      console.log(input)
      textLog.push(input)
      updateInput('')
      console.log(textLog)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className="input-section">
      <input
        value={input || ''}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="what will you do?"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
