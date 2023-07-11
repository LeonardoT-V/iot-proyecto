function Container({ children, className, ...props }) {
  return (
    <section className={`py-2 px-10 ${className}`} {...props}>
      {children}
    </section>
  );
}

export default Container;
