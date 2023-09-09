"use client"

import TopSection from './landingPageSections/topSection';
import SectionTwo from './landingPageSections/sectionTwo';
import SectionThree from './landingPageSections/sectionThree';
import SectionFour from './landingPageSections/sectionFour';
import SectionFive from './landingPageSections/sectionFive';
import { useEffect, useRef } from 'react';

const LandingPage = () => {

  const containerref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (containerref.current) {
      containerref.current.scrollBy({
        top: 10,
        behavior: "smooth" // Use smooth behavior for animation
      });
    }
  };

  useEffect(() => {
    const container = containerref.current;
    let scrollPosition = 0;

    const handleScroll = (event: any) => {
      const delta = event.deltaY;
      scrollPosition += delta;

      if (delta <= 0) {
        if (containerref.current) {
          containerref.current.scrollBy({
            top: -10,
            behavior: "smooth" // Use smooth behavior for animation
          });
        }
      } else if (delta >= 1) {
        if (containerref.current) {
          containerref.current.scrollBy({
            top: 10,
            behavior: "smooth" // Use smooth behavior for animation
          });
        }

      }
    };

    if (container) {
      container.addEventListener('wheel', handleScroll, { passive: false });

      return () => {
        container.removeEventListener('wheel', handleScroll);
      };
    }
  }, []);
  return (
    <>
      <div
        ref={containerref}
        style={{
          overflow: 'hidden'
        }}
        className=" h-screen block overflow-auto snap-mandatory snap-y scroll-container">
        <TopSection handleScroll={handleClick} />
        <div className="w-full bg-[#FEFD92]  h-screen flex-center snap-start">
          <SectionTwo />
        </div>

        <div className="w-full h-screen bg-[#ccf6ee] flex-center snap-start">
          <SectionThree />
        </div>
        <div className="w-full h-screen bg-[#ffdfe9] flex-center snap-start">
        <SectionFour />
        </div>
        <div className="w-full h-screen flex-center snap-start">
        <SectionFive />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
