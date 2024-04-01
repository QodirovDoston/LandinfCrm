import { func, string } from "prop-types";

export const Button = (props) => {
    const {
        text,
        btnStyle,
        handleClick,
        span
    } = props;
    return (
        <>
            <button className={btnStyle || "bg-[#263238] text-white text-text-base h-12 px-3 rounded-[6px] "} onClick={() => { handleClick() }}> {text || "addd ition"} <span className="lg:text-[15px] md:text-[12px] text-[10px]">{span}</span> </button>
        </>
    )
}

Button.propTypes = {
    text: string,
    btnStyle: string,
    handleClick: func,
    span:string
}
