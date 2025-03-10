
function Input({ type, placeholder, name }) {
    return (
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full flex px-4 py-2 items-center gap-3 self-stretch rounded-md border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-0 focus:ring-gray-400"
      />
    );
  }
  
  export default Input;
  