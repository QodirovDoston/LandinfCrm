import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { AboutUs, Contacts, Home, Pricing, Skills } from "../../pages";

const Main = () => {
    const[text]=useTypewriter({
    words:["Bizning CRM saytiga xush kelibsiz !","Tashkilotingizni biz bilan Raqamlashtiring"],
    loop:{}
    })
    return (
        <div className="mx-auto w-[83%]">
            <Home TitleText={text} Cursor={Cursor}/>
            <Skills />
            <AboutUs />
            <Pricing />
            <Contacts />
        </div>
    );
}

export default Main;
