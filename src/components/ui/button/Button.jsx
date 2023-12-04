import style from "../button/Button.module.css";

const Button = (props) => {
  return (
    <button className={style.btn} onClick={props.click}>
      {props.text}
    </button>
  );
};

export default Button;
