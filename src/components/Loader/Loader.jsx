import { CirclesWithBar } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
    <CirclesWithBar
      height="80"
      width="80"
      color="#2b47b9"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </div>
  );
};

export default Loader;