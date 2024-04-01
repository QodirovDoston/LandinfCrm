import { logo } from "../../assets/images"

export const Footer = () => {
    return (
        <>
            <hr className="lg:mt-0 mt-4 dark:border-gray-500"/>
            <div className="flex justify-between my-4 flex-wrap mx-auto w-[85%]">
                <div className="lg:w-[10%] md:w-[28%] w-[25%] h-12 overflow-hidden">
                    <img src={logo} alt="" className="min-w-[30px] cursor-pointer" />
                </div>
                <p className="lg:text-[20px] md:text-[17px] text-[13px] text-[#8F95A5] cursor-pointer">Terms and Conditions • Privacy Policy • Cookie Policy</p>
            </div>
        </>
    )
}