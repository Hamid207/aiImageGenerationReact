import style from "./GridAiImage.module.css";

const GridAiImage = (props) => {
  return (
    <div>
      <div
        key={props.id}
        className={style.backImg}
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
    </div>
  );
};

export default GridAiImage;
