import {
  House,
  Typewriter,
  Podcast,
  cardLeftImg,
} from "../../assets/images/index";
import GorizantalCard from "../../components/Cards/GorizantalCard";
import VerticalCard from "../../components/Cards/VerticalCard";

const Skills = () => {
  return (
    <div id="skills">
      <h1 className="text-center text-[#000000] dark:text-[#a5a4a4] font-bold md:text-[48px] text-[38px]">
        Imkoniyatlar
      </h1>
      <div className="flex gap-4 lg:flex-nowrap flex-wrap">
        <div>
          <GorizantalCard
            image={cardLeftImg}
            height="h-[100%]"
            title="Tezkor yechim"
            paragrafOne="Improve your English skills and confidence. 
            Live classes and interactive lessons online. 
            20% extra free for a limited time only"
            paragrafTwo="Learn English online and improve your 
            skills through our high-quality courses
            and resources – all designed for adult language learners."
          />
        </div>
        <div className="grid grid-cols-2  gap-4">
          <div className="lg:col-start-1 col-start-1 lg:col-span-1 col-span-2">
            <GorizantalCard
              image={Typewriter}
              imgStyle="w-[200px] h-[200px]"
              title="Writing"
              paragrafOne="One of the most important and extensive 
                 areas of natural science, the science that 
                 studies substances, also their composition "
            />
          </div>
          <div className="lg:col-start-2 col-start-1 lg:col-span-1 col-span-2">
            <GorizantalCard
              image={House}
              imgStyle="w-[200px] h-[200px]"
              title="Reading"
              paragrafOne="One of the most important and extensive 
                 areas of natural science, the science that 
                 studies substances, also their composition "
            />
          </div>
          <div className="lg:col-start-1 col-start-1 lg:col-span-2 col-span-2">
            <VerticalCard
              image={Podcast}
              imgStyle="w-[200px] h-[200px]"
              title="Listening"
              paragrafOne="Here you can find activities to practise
                 your listening skills. Listening will help you
                 to improve your understanding "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
