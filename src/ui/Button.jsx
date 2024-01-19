function Button({ type, children, onClick }) {
  const base =
    'bg-indigo-500 font-bold items-center cursor-pointer text-center text-indigo-50 hover:shadow-lg';
  const styles = {
    primary: base + ' h-[50px] w-[150px] rounded-lg pt-3',
    secondary: base + ' text-sm h-[50px] w-[100px] rounded-lg pt-3',
    small:
      base +
      ' text-sm h-[20px] w-[50px] sm:h-[30px] sm:w-[100px] rounded-lg pt-1 ',
    round:
      'rounded-full h-5 w-5 pb-1 sm:h-[30px] sm:w-[30px] bg-indigo-500 sm:px-1 sm:pt-0.5 font-bold items-center cursor-pointer text-center text-indigo-50 hover:shadow-lg',
  };
  return (
    <div className={styles[type]} onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
