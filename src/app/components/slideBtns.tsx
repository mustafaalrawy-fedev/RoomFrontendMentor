'use client';

import Image from 'next/image';
import { StaticImageData } from 'next/image';

// Icons
import arrowLeftIcon from '../../../public/images/icon-angle-left.svg';
import arrowRightIcon from '../../../public/images/icon-angle-right.svg';

interface SlideBtnsProps {
  desktopImg: StaticImageData[];
  currentImg: number;
  handleNextBtn: () => void;
  handlePrevBtn: () => void;
}

const buttonBaseClasses = 
  "bg-secondaryColor text-primaryColor p-5 h-full w-1/2 flex justify-center " +
  "items-center cursor-pointer hover:bg-hoverColor transition-colors duration-500";

export default function SlideBtns({ 
  desktopImg, 
  currentImg, 
  handleNextBtn, 
  handlePrevBtn 
}: SlideBtnsProps) {
  const isPrevDisabled = currentImg === 0;
  const isNextDisabled = currentImg === desktopImg.length - 1;

  return (
    <nav 
      className="absolute right-0 xl:-right-[120px] bottom-0 h-12 w-24 md:h-15 md:w-30 flex" 
      aria-label="Image navigation"
    >
      <button 
        onClick={handlePrevBtn}
        disabled={isPrevDisabled}
        className={`${buttonBaseClasses} ${isPrevDisabled ? 'opacity-20' : ''}`}
        aria-label="Previous image"
      >
        <Image 
          src={arrowLeftIcon} 
          alt="" 
          width={14} 
          height={14} 
          aria-hidden="true"
        />
      </button>
      <button 
        onClick={handleNextBtn}
        disabled={isNextDisabled}
        className={`${buttonBaseClasses} ${isNextDisabled ? 'opacity-20' : ''}`}
        aria-label="Next image"
      >
        <Image 
          src={arrowRightIcon} 
          alt="" 
          width={14} 
          height={14}
          aria-hidden="true"
        />
      </button>
    </nav>
  );
}