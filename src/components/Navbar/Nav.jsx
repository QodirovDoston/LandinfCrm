import { useState } from "react";
import { logo, menu, moon, sun } from "../../assets/images/index";
import { RouterComponents } from "../../route/route";
import { Button } from "../ReusableButton";
import { useEffect } from "react";
export const Nav = () => {
  const handleTargetLink = () => {
    window.open("https://t.me/iTech_manager", "_blank");
  };
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  const [theme, setTheme] = useState(localStorage.getItem("theme")=="true"?true:localStorage.getItem("theme")=="false"?false:false);
  const element = document.documentElement;
  useEffect(() => {
    localStorage.setItem("theme", theme);
    theme ? element.classList.add("dark") : element.classList.remove("dark");
  }, [theme]);
  return (
    <>
      <nav className="sticky top-0 z-10 bg-white shadow-xl w-full  lg:py-4 py-0 dark:bg-black">
        <div className="flex items-center flex-wrap justify-between  mx-auto px-3 px-">
          <div className="w-[24%] md:w-[10%] h-12 overflow-hidden">
            <a href="#home">
              <img src={logo} alt="" className="cursor-pointer w-full h-full" />
            </a>
          </div>
          <ul className="items-center gap-x-6 xl:flex hidden">
            {RouterComponents.map((elem) => {
              return (
                <li key={elem.id}>
                  <a
                    className="text-xl font-medium text-[#263238] dark:text-[#a5a4a4]"
                    href={`${elem.path}`}
                  >
                    {elem.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex gap-10 items-center">
            <div>
              <button
                onClick={() => setTheme((old) => !old)}
                className={`cursor-pointer w-8 h-8 leading-9 text-sm rounded-full m-1`}
              >
                <img src={!theme ? moon : sun} alt="moon icon" />
              </button>
            </div>
            <Button
              text="Administrator"
              btnStyle="bg-[#fff] xl:flex hidden text-text-base dark:bg-[#a5a4a4] dark:text-[#2e2e2e] dark:border-[#a5a4a4] py-4 px-16 rounded-[6px] duration-700 hover:border-black  border-black border hover:bg-black hover:text-white duration-300 "
              handleClick={handleTargetLink}
            />
          </div>
          <img
            onClick={handleNav}
            className="xl:hidden flex mr-5"
            src={menu}
            alt=""
          />
          <div
            className={
              !nav
                ? "xl:hidden w-full z-30   bg-[#ffffff] dark:bg-[#0000] "
                : "fixed hidden"
            }
          >
            <ul className="z-50">
              {RouterComponents.map((elem) => {
                return (
                  <li className=" text-center mt-2" key={elem.id}>
                    <a
                      className="text-sm text-[#263238] dark:text-[#a5a4a4] hover:bg-slate-300 px-[28px] py-1 rounded-lg "
                      href={`${elem.path}`}
                    >
                      {elem.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className=" text-center">
              <Button
                text="Administrator"
                btnStyle="bg-[#fff] dark:text-[#a5a4a4] dark:text-[#a5a4a4] dark:bg-[#s9a4a4] mb-4 mt-2 text-xxs h-[30px] px-16 dark:text-[#2e2e2e rounded-[6px] border-black border hover:bg-black hover:text-white duration-300 "
                handleClick={handleTargetLink}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
