function LoadMoreButton({ children, onClick, className, type = "button" }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`flex items-center justify-center gap-2 px-4 py-2 border rounded-full ${className}`}
      >
        {children}
      </button>
    );
  }
  
  export default LoadMoreButton;