import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { getImageSrc } from '../../utils/getImageSrc';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
console.log('Base path is:', basePath);


const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Frondesk Technologies Aftersales Solutions for Dealerships."
                paragraph="Our team combines skilled technologists and automotive aftersales specialists with over 20 years of experience at leading companies like Intel and Toyota. Over the last year, we have assisted numerous dealerships in driving higher revenue and profits, especially in the body shop and aftersales sectors. Leveraging AI-powered digital solutions alongside effective product and process training, we help dealerships achieve rapid success. Many clients have consistently realized up to 300% growth in their body shop business. Our mission is to help car dealerships unlock their true aftersales potential, optimize operations, and tap into untapped revenue streams."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="AI-Powered Tools" />
                    <List text="Auto DLM System" />
                    <List text="Paperwork Reduction" />
                    <List text="Lead Tracking" />
                    <List text="Data & Analytics" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Dealership Digital Shift" />
                    <List text="Multi-branch dealership " />
                    <List text="Affordable Dealer App" />
                     <List text="User friendly" />
                     <List text="Sales Performance" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[700px] lg:mr-0">
                <Image
                   src={`${basePath}images/about/about44.png`}
                  //src={getImageSrc('/images/about/about44.png')}
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src={`${basePath}images/about/about44.png`}
                // src={getImageSrc('/images/about/about44.png')}
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
