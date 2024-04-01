import { recurs } from "../../assets/images/index";
import { Button } from "../../components/ReusableButton";


const Contacts = () => {
  return (
    <>
      <div id="contacts" className="w-full overflow-hidden">
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12">
          <img data-aos="fade-up"
          data-aos-anchor-placement="center-center"  className="w-[700px] max-h-[400px]" src={recurs} alt="" />
          <div>
            <h1 className="font-bold mb-5 mt-24 lg:text-[30px] md:text-[25px] text-[20px] lg:text-left md:text-left text-center dark:text-[#a5a4a4]">Contact Us</h1>
            <p className="text-[#8F95A5 lg:text-left md:text-left text-center lg:text-[20px] md:text-[17px] text-[13px] dark:text-[#a5a4a4]">Discover your current English level by taking our free online English test.Sign up to our newsletter for learning tips and free resources</p>
            <div className="flex lg:justify-start gap-2 mt-7 flex-wrap md:justify-center justify-center gap-y-2 mb-2">
              <div data-aos="fade-right">
                <input className="lg:h-[70px] md:h-[60px] h-[40px] lg:w-[350px] md:w-[320px] w-[220px] border border-black dark:border-white dark:text-[#a5a4a4] dark:bg-[#545151] rounded-xl pl-6 " type="text" name="" placeholder="Enter Your E-mail" id="" />
              </div>
              <div data-aos="fade-left">
                <Button
                  text="Subscribe"
                  btnStyle={"hover:bg-[#fff] mr-2 lg:h-[70px] md:h-[60px] h-[42px] w-[220px]  dark:text-[#a5a4a4] dark:bg-[#525252] dark:border-[#252h42d]  rounded-xl duration-700 hover:border-#F5F5F5 border hover:text-black  bg-black text-white text-text-base h-12 px-9 rounded-[6px] "}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
