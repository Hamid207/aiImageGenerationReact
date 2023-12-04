import style from "../homePage/HomePage.module.css";
import ImageSearchForm from "../../ui/form/ImageSearchForm";
import { useState } from "react";

const HomePage = () => {
  const [name, setName] = useState("");

  const imageSeach = (e) => {
    e.preventDefault();
    console.log(name);
    // setName("");
  };
  return (
    <div>
      <section className={style.searchSection}>
        <ImageSearchForm
          placeholder="Search AI Image"
          buttonText="Search"
          click={(e) => imageSeach(e)}
          change={(e) => setName(e.target.value)}
          value={name}
        />
      </section>

      <section className={style.imageSection}></section>
    </div>
  );
};

export default HomePage;
