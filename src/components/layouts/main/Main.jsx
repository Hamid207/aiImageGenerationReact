import style from "../main/Main.module.css";

const Main = ({ children }) => {
  return <main className={style.main}>{children}</main>;
};

export default Main;
