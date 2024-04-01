import { Podcast } from "../../assets/images/index";


const AboutUs = () => {
  return (
    <div id="about">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-60 gap-6 mt-14 ">
        <div>
          <h1 className=" text-[#000000] dark:text-[#a5a4a4] font-bold lg:text-[48px] text-[34px]  lg:text-left text-center">About Us</h1>
          <p className=" lg:text-[17px] text-[13px] mt-3 lg:text-left text-center text-[#8F95A5]">The model offers a framework for discussing problems related to the user`&#39;s experience, as well as possible ways and means of solving them. Application development begins at the top level (strategy), where the future software product is described quite abstractly from the point of view of the expectations of both users and the customer.
          </p>
          <div className="flex justify-between lg:mt-5 mt-14">
            <div>
              <h3 className="text-[#2A3246] dark:text-[#7c7b7b] lg:text-left text-center font-bold lg:text-[48px] text-[28px]">800</h3>
              <p className="text-[#8F95A5] dark:text-[#a5a4a4] lg:text-[20px] md:text-[16px] text-[12px]">Pupils</p>
            </div>
            <div>
              <h3 className="text-[#2A3246] dark:text-[#7c7b7b] lg:text-left text-center font-bold lg:text-[48px] text-[28px]">18</h3>
              <p className="text-[#8F95A5] dark:text-[#a5a4a4] lg:text-[20px] md:text-[16px] text-[12px]">Teachers</p>
            </div>
            <div>
              <h3 className="text-[#2A3246] dark:text-[#7c7b7b] lg:text-left text-center font-bold lg:text-[48px] text-[28px]">6</h3>
              <p className="text-[#8F95A5] dark:text-[#a5a4a4] lg:text-[20px] md:text-[16px] text-[12px]">Foreign languages</p>
            </div>
          </div>
        </div>
        <img data-aos="fade-up"
          data-aos-anchor-placement="center-center" className="w-[700px] " src={Podcast} alt="" />
      </div>
    </div>
  );
}

export default AboutUs;
