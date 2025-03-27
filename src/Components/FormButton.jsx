function FormButton({ children, onClick, className, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-4 py-1.5 2xl:py-2 w-full border rounded-md ${className}`}
    >
      {children}
    </button>
  );
}

export default FormButton;
