const Button = ({ btnStyle }) => {
  return (
    <div>
      <a
        className={btnStyle}
        href="#"
        onClick={(e) => e.preventDefault()}
      >
        {' '}
        Request Beta Access
      </a>
    </div>
  );
};

export default Button;
