function ButtonFilter({ active , field , value  , onClick, children }) {
  return (
    <button
      className={`cursor-pointer rounded-2xl px-3 py-2 text-[12px] font-semibold duration-300 ${active ? "bg-primary text-white" : "bg-background text-foreground hover:bg-border"}`}
      onClick={() => onClick(field, value)}
    >
      {children}
    </button>
  );
}

export default ButtonFilter;
