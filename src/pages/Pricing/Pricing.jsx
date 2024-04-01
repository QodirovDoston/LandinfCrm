import { Button } from '../../components/ReusableButton';
import { Online, Webinar } from '../../assets/images/index';
const img = [Online, Webinar, Online]
const arr = [
  {
    title: "Self-study online course",
    dis: "One of the most important and extensive areas of natural science, the science that studies substances, also their composition ",
    btn: " £12.99"
  },
  {
    title: "Live online classes",
    dis: "perception and response actions of the user   resulting from the use and/or upcoming use   of the product, system or service",
    btn: " £12.99"
  },
  {
    title: "Personal Tuition",
    dis: "One of the most important and extensive areas of natural science, the science that studies substances, also their composition ",
    btn: " £12.99 ",
  }
]

const Pricing = () => {
  return (
    <div>
      <div id="pricing">
        <h1 className="font-bold text-[30px] mb-5 text-center mt-24 dark:text-[#a5a4a4]">Pricing</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-center">
          {arr.map((val, index) => {
            return (
              <div data-aos="zoom-in" key={index} className="p-8 ">
                <img className=" w-[520px] " src={img[index]} alt="" />
                <h2 className="font-bold lg:text-[30px] md:text-[25px] text-[20px] lg:text-left md:text-left text-center mb-5  dark:text-[#a5a4a4]">{val.title}</h2>
                <p className="lg:text-left md:text-left text-center lg:text-[20px] md:text-[17px] text-[13px] dark:text-[#a5a4a4]">{val.dis}</p>
                <div data-aos="fade-down-left" data-aos-duration="2500" className='lg:text-start md:text-start text-center mt-8 lg:-top-10 md:-top-0 '>
                  <Button
                    text={val.btn}
                    span='per month'
                    btnStyle={"hover:bg-[#fff] dark:bg-[#a5a4a4] duration-700 hover:border-[#F5F5F5] border hover:text-black  bg-[#EEEEEE] text-[#263238] text-[20px] h-12 px-3 px-9 rounded-[6px] "}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
