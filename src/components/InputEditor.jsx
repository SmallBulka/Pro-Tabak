/* eslint-disable react/prop-types */
const InputEditor = ({ placeholder, text, changeInput }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        className="bg-white m-2 border-solid border-[2px] border-black rounded-md"
        value={text ? text : ""}
        onChange={(event) => changeInput(event.target.value)}
        type="text"
      />
    </div>
  );
};

export default InputEditor;
