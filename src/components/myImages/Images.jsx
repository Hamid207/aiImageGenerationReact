import style from "./Images.module.css";
import GridAiImage from "../grid/GridAiImage";
const Images = () => {
  return (
    <div className={style.imgs_body}>
      <div className={style.grid_body}>
        <GridAiImage />
      </div>
    </div>
  );
};

export default Images;
