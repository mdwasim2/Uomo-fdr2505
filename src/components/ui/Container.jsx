const Container = ({ children, className }) => {
  return (
    <div className={`mx-auto max-w-352.5 px-3.75 md:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
