import { Link } from "react-router-dom";
import style from "../header/Header.module.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className={style.headerBody}>
          <div>
            <h2>AI Image Genarotor</h2>
          </div>
          <div>
            <ul className={style.listBody}>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/aiImageGeneratione"}>AI Image Generation</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
