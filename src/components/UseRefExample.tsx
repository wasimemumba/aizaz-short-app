import React, { useRef } from 'react';

const FocusInput: React.FC = () => {
  // Define a ref with the type of HTMLInputElement or null
  const inputRef = useRef<HTMLInputElement>(null);

  // Function to focus the input field
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me with the button" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
