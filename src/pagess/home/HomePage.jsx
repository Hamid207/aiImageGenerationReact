import ImageSearchForm from "../../components/ui/form/ImageSearchForm";
import style from "../home/HomePage.module.css";
import { useState } from "react";
import Images from "../../components/images/Images";

const HomePage = () => {
  const [name, setName] = useState("");

  const imageSeach = (e) => {
    e.preventDefault();
    console.log(name);
    // setName("");
  };
  return (
    <>
      <section className={style.searchSection}>
        <ImageSearchForm
          placeholder="Search AI Image"
          buttonText="Search"
          click={(e) => imageSeach(e)}
          change={(e) => setName(e.target.value)}
          value={name}
        />
      </section>

      <section>
        <Images />
      </section>
    </>
  );
};

export default HomePage;
