// components/TextInputPopup.tsx
import React, { useState } from 'react';

interface TextInputPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (input: string) => void;
}

const TextInputPopup: React.FC<TextInputPopupProps> = ({ isOpen, onClose, onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    onSubmit(input);
    setInput('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Enter Text</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TextInputPopup;
