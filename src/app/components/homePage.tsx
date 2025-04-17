'use client';

import { useState } from 'react';

// Components
import ImageViewer from './imageViewer';
import ImageDescription from './ImageDescription';
import Navbar from './Navbar';
import AboutSection from './AboutSection';


export default function HomePage() {
  const [currentImg, setCurrentImg] = useState<number>(0);

  return (
    <>
      <section className="flex flex-col md:flex-row w-full">
        <ImageViewer 
          currentImg={currentImg} 
          setCurrentImg={setCurrentImg}
        />
        
        <ImageDescription currentImg={currentImg}/>
        <Navbar />
      </section>
      <AboutSection />
    </>
  );
}