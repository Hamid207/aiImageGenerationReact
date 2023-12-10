import style from "./ImageGenarate.module.css";
import GridAiImage from "../grid/GridAiImage";

const ImageGenarate = (props) => {
  return (
    <div>
      <div className={style.imgs_body}>
        <div className={style.grid_body}>
          <GridAiImage img={props.img} />
        </div>
      </div>
    </div>
  );
};

export default ImageGenarate;
