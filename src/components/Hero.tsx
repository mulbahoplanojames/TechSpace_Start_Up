import { Link } from "react-scroll";
import { Button } from "./ui/button";
import heroImage from "/src/assets/tech1.jpg";

const Hero = () => {
  // Function to handle the activation of a link.
  const handleSetActive = (to: string) => {
    console.log(to);
  };

  return (
    <>
      <section
        className="relative overflow-hidden md:mt-[5.5rem] mt-[5rem] 
      "
      >
        <div className="py-3 mx-auto max-w-7xl md:py-2">
          <div className="relative z-10 pb-8 bg-white dark:bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 ">
            <div className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 ">
              <div className="sm:text-center lg:text-left ">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline dark:text-white">
                    Crafting Digital
                  </span>
                  <span className="block text-indigo-600 xl:inline">
                    Experiences
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  We specialize in creating stunning websites, powerful
                  applications, and intuitive user experiences that drive
                  results for your business.
                </p>
                <div className="mt-8 space-x-4">
                  <Link
                    to="/contact"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    <Button size="lg">Contact Us</Button>
                  </Link>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={heroImage}
            alt="techSpace Hero image"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
