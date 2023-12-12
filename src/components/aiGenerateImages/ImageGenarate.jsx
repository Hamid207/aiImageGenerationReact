import style from "./ImageGenarate.module.css";
import GridAiImage from "../grid/GridAiImage";
import { useEffect, useState } from "react";
import axios from "axios";

const ImageGenarate = (props) => {
  const [aiIMages, setAiIMages] = useState([]);
  useEffect(() => {
    setAiIMages(props.images);
    console.log("TEST123123=-=-==-00-=-0-=0-00=-0-=0-=0=-0-0");
  }, [props.images]);

  return (
    <div>
      <div className={style.imgs_body}>
        <div className={style.grid_body}>
          {aiIMages.map((imgs) => (
            <GridAiImage id={imgs.id} img={imgs.imgUrl} key={imgs.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGenarate;
