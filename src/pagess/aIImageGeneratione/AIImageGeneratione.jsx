import style from "../aIImageGeneratione/AIImageGeneratione.module.css";
import ImageSearchForm from "../../components/ui/form/ImageSearchForm";
import { useRef, useState } from "react";
import ImageGenarate from "../../components/aiGenerateImages/ImageGenarate";

// const [userPoromt, setUserPrompt] = useState("");
// const [number, setNumber] = useState(1);
// const [size, setSize] = useState(" 512 × 768");
// const [imageUrl, setImgUrl] = useState("");

const AIImageGeneratione = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImagUrl] = useState("/");
  let inputRef = useRef(null);

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
          Authorization:
            "Bearer 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",
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
    console.log(data);
    console.log("2 = " + imageUrl);
    console.log("3 = " + dataArray[0].url);
  };

  // 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
  const imageSeach = (e) => {
    e.preventDefault();
    console.log("pompt user  -=-" + name);
    imageGenerator();
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
        <ImageGenarate img={imageUrl} />
      </section>
    </>
  );
};

export default AIImageGeneratione;
