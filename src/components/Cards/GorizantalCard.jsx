import { string } from "prop-types";
import { Button } from "../ReusableButton";

const GorizantalCard = ({image,title,paragrafOne,paragrafTwo,imgStyle,height}) => {
    return (
       <div className={`bg-[#F5F5F5]  dark:bg-[#262626] hover:scale-105 duration-700 py-9 px-5 rounded-md  ${height}`}>
        <center>
        <img src={image} alt="" className={imgStyle}/>
        </center>
        <h3 className="font-semibold text-3xl text-[#263238] dark:text-[#a5a4a4] py-1">{title}</h3>
        <div className="py-3">
        <p className="font-normal text-base text-[#8F95A5] dark:text-[#a5a4a4]">{paragrafOne}</p>
        <br />
        <p className="font-normal text-base text-[#8F95A5] dark:text-[#a5a4a4]">{paragrafTwo}</p>
        </div>
        <Button
         text="Learn more"
         btnStyle="hover:bg-[#fff] mr-2 rounded-xl duration-700 hover:border-#F5F5F5 border hover:text-black dark:bg-[#263238]   bg-black text-white text-text-base h-12 px-12 rounded-[6px] "
        />
        
       </div>
    );
}
GorizantalCard.propTypes = {
    image:string,
    title :string,
    paragrafOne: string,
    paragrafTwo:string,
    imgStyle:string,
    height:string
}

export default GorizantalCard;
