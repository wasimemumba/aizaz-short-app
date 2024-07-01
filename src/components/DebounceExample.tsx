import React from "react";

const DebounceExample: React.FC = () => {
  const [text, setText] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  React.useEffect(() => {
    const debounced = setTimeout(() => {
      console.log("API call sent");
    }, 1000);

    return () => {
      clearTimeout(debounced);
    };
  }, [text]);

  return (
    <div>
      <h1>Debounce Example</h1>
      <p>You will see the message in console after you stop typing for 1s.</p>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Type something..."
      />
    </div>
  );
};

export default DebounceExample;
