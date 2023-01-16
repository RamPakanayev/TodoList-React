import React from "react";

function InputArea({ handleChange, handleClick, inputStr }) {
  return (
    <div className="form">
      <input
        name="to-do"
        onChange={handleChange}
        placeholder={inputStr.placeholder}
        value={inputStr.val}
        type="text"
      />
      <button
        onClick={handleClick}
        style={{
          marginBottom: "5%",
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
