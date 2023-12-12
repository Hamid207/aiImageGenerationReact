import style from "../aIImageGeneratione/AIImageGeneratione.module.css";
import ImageSearchForm from "../../components/ui/form/ImageSearchForm";
import { useEffect, useRef, useState } from "react";
import ImageGenarate from "../../components/aiGenerateImages/ImageGenarate";
import axios from "axios";

// axios.defaults.headers.common[
//   "Authorization"
// ] = `Bearer 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`;

// const [userPoromt, setUserPrompt] = useState("");
// const [number, setNumber] = useState(1);
// const [size, setSize] = useState(" 512 × 768");
// const [imageUrl, setImgUrl] = useState("");

const AIImageGeneratione = () => {
  const [aiImages, setAiImages] = useState([]);
  const [name, setName] = useState("");
  const [imageUrl, setImagUrl] = useState("/");
  const [revisedPrompt, setrevisedPrompt] = useState("");
  // let inputRef = useRef(null);

  const imageGenerator = async () => {
    // if (inputRef.current.value === "") {
    //   return 0;
    // }
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer token",
        },
        body: JSON.stringify({
          model: "dall-e-3",
          prompt: `${name}`,
          n: 1,
          size: "1024x1024",
          // quality: "hd",
        }),
      }
    );
    let data = await response.json();
    let dataArray = data.data;
    setImagUrl(dataArray[0].url);
    setrevisedPrompt(dataArray[0].revised_prompt);
    console.log(dataArray[0].url);
  };

  // const fetchData = () => {
  //   const res = axios.post("https://api.openai.com/v1/images/generations", {
  //     // headers: {
  //     //   "Content-Type": "application/json",
  //     //   Authorization:
  //     //     "Bearer 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",
  //     // },
  //     model: "dall-e-3",
  //     prompt: `${name}`,
  //     n: 1,
  //     size: "1024x1024",
  //     // quality: "hd",
  //   });
  //   console.log(res);
  // };
  useEffect(() => {
    const fetchData = async () => {
      const responce = await axios.get("http://localhost:3001/aiImages");
      setAiImages(responce.data);
      console.log(responce.data);
    };
    fetchData();
  }, [imageUrl]);
  useEffect(() => {
    if (imageUrl !== "/") {
      const serverTest = () => {
        axios.post("http://localhost:3001/aiImages", {
          imgUrl: imageUrl,
          revised_prompt: revisedPrompt,
          user_porpmt: name,
        });
      };
      serverTest();
    }
  }, [imageUrl]);

  const imageSeach = (e) => {
    e.preventDefault();
    console.log("pompt user  -=-" + name);
    imageGenerator();
    // fetchData();
  };
  return (
    <>
      <section>
        <div className={style.aiImageGenerattione}>
          <ImageSearchForm
            placeholder="Add a prompt..."
            buttonText="Generate"
            click={(e) => imageSeach(e)}
            change={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
      </section>

      <section>
        <ImageGenarate images={aiImages} />
      </section>
    </>
  );
};

export default AIImageGeneratione;
