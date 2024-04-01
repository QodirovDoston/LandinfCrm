import { Learning } from "../../assets/images/index";
import { Button } from "../../components/ReusableButton";
// import { Cursor } from "react-simple-typewriter/dist/components/Cursor";

const Home = ({ TitleText, Cursor }) => {
  return (
    <div id="home">
      <div className="grid lg:grid-cols-2  grid-cols-1 mt-12 mb-10">
        <div className="lg:hidden   flex justify-center">
          <img
            className="w-[600px] -mt-16"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            src={Learning}
            alt=""
          />
        </div>
        <div>
          <h1 className="font-bold lg:h-64 lg:text-[64px] text-[34px] mb-5 xl:mt-24 lg:-mt-4 md:-mt-12 mt-12 lg:text-left text-center dark:text-[#a5a4a4]">
            {TitleText}
            <span className="text-green-700">
              <Cursor />
            </span>
          </h1>
          <p className=" lg:text-[17px] text-[15px] lg:text-left text-center my-5 text-[#8F95A5]  dark:text-[#a5a4a4]">
           Ushbu platforma orqali siz o`quv markazingiz uchun kuchli tartibda himoyalangan saytga ega bo`lihingiz mumkin !
          </p>
          <div className="flex mt-17 lg:justify-start justify-center">
            <Button
              text="Subscribe"
              btnStyle={
                "hover:bg-[#fff] dark:text-[#a5a4a4] dark:bg-[#21242a] mr-2 lg:h-[70px] hover:scale-[0.90] lg:w-[240px] h-[50px] w-[220px] rounded-xl duration-700 hover:border-black border hover:text-black  bg-black text-white text-text-base h-12 px-12 rounded-[6px] "
              }
            />
          </div>
        </div>
        <img
          className="w-[700px] lg:flex hidden xl:-mt-28 lg:-mt-18 "
          src={Learning}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
