import Input from "../input/Input";
import Button from "../button/Button";
import style from "../form/ImageSearchForm.module.css";

const ImageSearchForm = (props) => {
  return (
    <form className={style.form}>
      <Input
        placeholder={props.placeholder}
        value={props.value}
        change={props.change}
      />
      <Button text={props.buttonText} click={props.click} />
    </form>
  );
};

export default ImageSearchForm;
