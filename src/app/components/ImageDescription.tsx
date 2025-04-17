import { motion } from 'framer-motion';
import ArrowIcon from '../../../public/images/icon-arrow.svg';
import Image from 'next/image';

// Animation settings
const contentAnimation = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
  transition: { duration: 0.4, delay: 0.2 }
};

export default function ImageDescription({ currentImg }: { currentImg: number }) {
  // Content for each slide (could be moved to a separate data file)
  const slideContent = [
    {
      title: 'Discover innovative ways to decorate',
      description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    },
    {
      title: 'We are available all across the globe',
      description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator."
    },
    {
      title: 'Manufactured with the best materials',
      description: 'Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    }
  ];

  const currentSlide = slideContent[currentImg];

  return (
    <motion.main 
      key={currentImg}
      {...contentAnimation}
      className="w-full md:w-2/5 text-left flex flex-col justify-center p-6 md:p-10 space-y-6"
    >
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        {currentSlide.title}
      </h1>
      
      <p className="text-subTitleColor text-sm md:text-base leading-relaxed opacity-80">
        {currentSlide.description}
      </p>
      
      <button 
        className="cursor-pointer flex items-center space-x-4 uppercase font-medium tracking-[0.5em] text-sm hover:text-gray-500 transition-colors duration-300 w-fit group"
        aria-label="Shop now"
      >
        <span>shop now</span>
        <Image 
          src={ArrowIcon} 
          alt="" 
          width={40} 
          height={12} 
          className="group-hover:translate-x-2 transition-transform duration-300"
          aria-hidden="true"
        />
      </button>
    </motion.main>
  )
}