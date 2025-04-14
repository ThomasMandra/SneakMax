import styles from './Button.module.css';

function Button(props) {
  const { children, styleButton } = { ...props };
  return (
    <button
      className={
        styleButton === 1
          ? styles.button
          : styleButton === 2
          ? styles.buttonTwo
          : styleButton === 3
          ? styles.buttonThree
          : ''
      }
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
