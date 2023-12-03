import style from "../input/Input.module.css";

const Input = (props) => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      className={style.inputStyle}
    />
  );
};

export default Input;
