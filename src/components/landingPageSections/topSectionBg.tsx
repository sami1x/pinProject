import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';


const TopSectionBg = () => {

  const folders = ["fashion", "dinner", "decor", "green"]

  const [folderNo, setFolderNo] = useState(0);
  const [folderName, setFolderName] = useState("green");


  const changeFolder = () => {
    setFolderNo((prevFolderNo) => (prevFolderNo === 3 ? 0 : prevFolderNo + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(changeFolder, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    setFolderName(folders[folderNo]);
  }, [folderNo]);

  return (


    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="w-screen h-[85vh] overflow-hidden flex justify-center relative">

        <div className="w-[1700px] pt-28 flex gap-4 justify-center">
          <div className=" w-[236px]">
            <div className=" w-[236px] my-4  h-[350px] flex-center rounded-2xl overflow-hidden">
              <Image className="w-full h-full"
                src={`/landingPageImages/${folderName}/1.jpg`} alt="down" height={350} width={236} />
            </div>
            <div className="w-[236px]  my-4 h-[350px] flex-center rounded-2xl overflow-hidden">
              <Image className="w-full h-full"
                src={`/landingPageImages/${folderName}/2.jpg`} alt="down" height={350} width={236} />

            </div>
            <div className="w-[236px]  my-4 h-[350px] flex-center rounded-2xl overflow-hidden">
              <Image className="w-full h-full"
                src={`/landingPageImages/${folderName}/3.jpg`} alt="down" height={350} width={236} />

            </div>
          </div>
          <div className="w-[236px] mt-[100px]">
            <div

              className=" w-[236px] my-4  h-[350px] flex-center rounded-2xl overflow-hidden">
              <Image className="w-full h-full"
                src={`/landingPageImages/${folderName}/4.jpg`} alt="down" width={236} height={350} />

            </div>
            <div className=" w-[236px] my-4  h-[350px] flex-center rounded-2xl overflow-hidden">
              <Image className="w-full h-full"
                src={`/landingPageImages/${folderName}/5.jpg`} alt="down" height={350} width={236} />

            </div>
            <div className=" w-[236px] my-4  h-[350px] flex-center rounded-2xl overflow-hidden">
              <Image className="w-full h-full"
                src={`/landingPageImages/${folderName}/6.jpg`} alt="down" height={350} width={236} />

            </div>
          </div>
          <div className=" w-[236px] mt-[210px]">
            <div className="  w-[236px my-4 ] h-[350px] flex-center rounded-2xl overflow-hidden">
              <Image className="w-full h-full"
                src={`/landingPageImages/${folderName}/7.jpg`} alt="down" height={350} width={236} />

            </div>
            <div className=" w-[236px] my-4  h-[350px] flex-center rounded-2xl overflow-hidden">
              <Image className="w-full h-full"
                src={`/landingPageImages/${folderName}/8.jpg`} alt="down" height={350} width={236} />

            </div>
            <div className=" w-[236px] my-4  h-[350px] flex-center rounded-2xl overflow-hidden">
              <Image className="w-full h-full"
                src={`/landingPageImages/${folderName}/9.jpg`} alt="down" height={350} width={236} />

            </div>
          </div>
          <div className=" w-[236px] mt-[350px]">
            <div className=" w-[236px] my-4  h-[350px] flex-center rounded-2xl overflow-hidden">
              <Image className="w-full h-full"
                src={`/landingPageImages/${folderName}/10.jpg`} alt="down" height={350} width={236} />

            </div>
            <div className=" w-[236px] my-4  h-[350px] flex-center rounded-2xl overflow-hidden">
              <Image className="w-full h-full"
                src={`/landingPageImages/${folderName}/11.jpg`} alt="down" height={350} width={236} />

            </div>
            <div className=" w-[236px] my-4  h-[350px] flex-center rounded-2xl overflow-hidden">
              <Image className="w-full h-full"
                src={`/landingPageImages/${folderName}/12.jpg`} alt="down" height={350} width={236} />

            </div>
          </div>
          <div className=" w-[236px] mt-[210px]">
            <div className=" w-[236px] my-4  h-[350px] flex-center rounded-2xl overflow-hidden">
              <Image className="w-full h-full"
                src={`/landingPageImages/${folderName}/13.jpg`} alt="down" height={350} width={236} />

            </div>
            <div className=" w-[236px] my-4  h-[350px] flex-center rounded-2xl overflow-hidden">
              <Image className="w-full h-full"
                src={`/landingPageImages/${folderName}/14.jpg`} alt="down" height={350} width={236} />

            </div>
            <div className=" w-[236px] my-4  h-[350px] flex-center rounded-2xl overflow-hidden">
              <Image className="w-full h-full"
                src={`/landingPageImages/${folderName}/15.jpg`} alt="down" height={350} width={236} />

            </div>
          </div>
          <div className=" w-[236px] mt-[100px]">
            <div className=" w-[236px] my-4  h-[350px] flex-center rounded-2xl overflow-hidden">
              <Image className="w-full h-full"
                src={`/landingPageImages/${folderName}/16.jpg`} alt="down" height={350} width={236} />

            </div>
            <div className=" w-[236px] my-4  h-[350px] flex-center rounded-2xl overflow-hidden">
              <Image className="w-full h-full"
                src={`/landingPageImages/${folderName}/17.jpg`} alt="down" height={350} width={236} />

            </div>
            <div className=" w-[236px] my-4  h-[350px] flex-center rounded-2xl overflow-hidden">
              <Image className="w-full h-full"
                src={`/landingPageImages/${folderName}/18.jpg`} alt="down" height={350} width={236} />

            </div>
          </div>
          <div className=" w-[236px]">
            <div className=" w-[236px] my-4  h-[350px] flex-center rounded-2xl overflow-hidden">
              <Image className="w-full h-full"
                src={`/landingPageImages/${folderName}/19.jpg`} alt="down" height={350} width={236} />

            </div>
            <div className=" w-[236px] my-4  h-[350px] flex-center rounded-2xl overflow-hidden">
              <Image className="w-full h-full"
                src={`/landingPageImages/${folderName}/20.jpg`} alt="down" height={350} width={236} />

            </div>
            <div className=" w-[236px] my-4  h-[350px] flex-center rounded-2xl overflow-hidden">
              <Image className="w-full h-full"
                src={`/landingPageImages/${folderName}/21.jpg`} alt="down" height={350} width={236} />

            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TopSectionBg;
