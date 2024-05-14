import { useDispatch, useSelector } from "react-redux";
import { setBurger } from "@/store/slice/counterSlice";

const Hamburger = () => {
  const { burger } = useSelector((state) => state.counterSlice);
  const dispatch = useDispatch();
  return (
    <label
      htmlFor="burger"
      className={`z-30 2md:hidden cursor-pointer flex flex-col justify-center items-center h-7 w-7 p-px`}>
      <input
        type="checkbox"
        checked={burger}
        onChange={() => dispatch(setBurger())}
        id="burger"
        className="hidden"
      />
      <span
        className={`bg-black w-6 h-[3px] block mb-[4px] rounded-sm ${
          burger
            ? "transform origin-top-left rotate-45 transition duration-1000 translate-x-px -translate-y-[3px]"
            : "transform origin-top-left transition duration-1000"
        }`}></span>
      <span
        className={`bg-black w-6 h-[3px] block mb-[4px] rounded-sm ${
          burger
            ? "transform scale-0 opacity-0 transition duration-1000"
            : "transform scale-100 opacity-100 transition duration-1000"
        }`}></span>
      <span
        className={`bg-black w-6 h-[3px] block  rounded-sm ${
          burger
            ? "transform origin-top-left -rotate-45 transition duration-1000 -translate-x-px translate-y-px"
            : "transform origin-top-left transition duration-1000"
        }`}></span>
    </label>
  );
};
export default Hamburger;
