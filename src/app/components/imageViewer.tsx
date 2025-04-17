'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { StaticImageData } from 'next/image';

// Components
import SlideBtns from './slideBtns';

// Images Desktop
import desktopHeroImg1 from '../../../public/images/desktop-image-hero-1.jpg';
import desktopHeroImg2 from '../../../public/images/desktop-image-hero-2.jpg';
import desktopHeroImg3 from '../../../public/images/desktop-image-hero-3.jpg';

// Images Mobile
import mobileHeroImg1 from '../../../public/images/mobile-image-hero-1.jpg';
import mobileHeroImg2 from '../../../public/images/mobile-image-hero-2.jpg';
import mobileHeroImg3 from '../../../public/images/mobile-image-hero-3.jpg';

// Constants
const desktopImages: StaticImageData[] = [desktopHeroImg1, desktopHeroImg2, desktopHeroImg3];
const mobileImages: StaticImageData[] = [mobileHeroImg1, mobileHeroImg2, mobileHeroImg3];

const animationConfig = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
  transition: { duration: 0.5 }
};

interface ImageViewerProps {
  currentImg: number;
  setCurrentImg: (value: number) => void;
}

export default function ImageViewer({ currentImg, setCurrentImg }: ImageViewerProps) {
  const handleNextBtn = () => {
    if (currentImg < desktopImages.length - 1) {
      setCurrentImg(currentImg + 1);
    }
  };

  const handlePrevBtn = () => {
    if (currentImg > 0) {
      setCurrentImg(currentImg - 1);
    }
  };

  return (
    <section className="relative top-0 left-0 w-full md:w-3/5 h-auto" aria-label="Product image gallery">
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentImg}
          {...animationConfig}
          className="relative w-full h-full"
        >
          <Image 
            src={desktopImages[currentImg]} 
            alt={`Room furniture design, style ${currentImg + 1}`} 
            priority 
            className="w-full h-full md:block hidden"
          />
          <Image 
            src={mobileImages[currentImg]} 
            alt={`Room furniture design, style ${currentImg + 1}`} 
            priority 
            className="w-full h-full md:hidden block"
          />
        </motion.div>
      </AnimatePresence>
      
      <SlideBtns 
        currentImg={currentImg} 
        handleNextBtn={handleNextBtn} 
        handlePrevBtn={handlePrevBtn}
        desktopImg={desktopImages}
      />
    </section>
  );
}