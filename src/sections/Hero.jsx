import { useState } from "react";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { statistics, shoes  } from "../constants";
import { bigShoe1} from "../assets/images"; 
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  
  const[bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl
         max-sm:text-[72] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>Shoes
        </h1>
        <p className="font-montserrat text-slate-gray mt-8 mb-10
         text-lg leading-7 sm:max-w-sm">
          Discover new stylish Nike arrivals, comfort, best quality and
          inovation for your active life.
        </p>
        <Button lable="Shop now" iconUrl={arrowRight} />

        <div className="flex
         justify-start items-start flex-wrap w-full mt-20
          gap-16">
          {statistics.map((statistic) => (
            <div key={statistic.label}>
              <p className="text-4xl font-palanquin font-bold">{statistic.value}</p>
              <p className="leading-1 text-slate-gray font-palanquin font-bold">{statistic.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 justify-center items-center
       xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center">
        <img 
        src={bigShoeImg} // It is going to render which one is selected
        alt="shose"
        width={610} 
        height={500}
        className="object-contain z-10 relative"
         />

         <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
          {shoes.map((shoe) => (
            <div key={shoe}>
             <ShoeCard 
             imgUrl={shoe}
             changeBigShoeImage= {(shoe) => setBigShoeImg(shoe)}
             bigShoeImg={bigShoeImg} // This will let user know which one is selected

             />
            </div>
          ))}
         </div>
      </div>
    </section>
  );
};

export default Hero;
