import Image from "next/image";

const SectionFour = () => {
    return (
        <div className="w-full h-full flex gap-4">
            <div className="w-2/4 bg-blue-500 h-full flex-center">
                <div className="relative flex-center h-full w-full">
                    <div className="z-10  flex items-end h-3/4 w-3/4">
                        <div className="relative w-[215px] rounded-3xl h-[383px]">
                            <div className="relative w-[215px] rounded-3xl overflow-hidden h-[383px]">

                                <Image
                                    alt="image"
                                    src={"/landingPageImages/section04/2.png"}
                                    fill
                                    style={{objectFit: "contain"}}
                                    sizes='width:100%'


                                />
                            </div>
                            <div className="absolute z-20 -left-10 -bottom-10">

                                <div className="relative w-[96px] rounded-3xl overflow-hidden h-[96px]">
                                    <Image
                                        alt="image"
                                        src={"/landingPageImages/section04/3.png"}
                                        fill
                                        style={{objectFit: "contain"}}
                                        sizes='width:100%'

                                        />

                                </div>
                            </div>
                            <div className=" w-fit pl-4 pt-2 text-white absolute left-1/2 transform -translate-x-1/2">
                                <div className="font-bold text-base">Scout the city</div>
                                <span className=" whitespace-nowrap	 text-base">56.7k followers</span>
                            </div>
                        </div>
                    </div>
                    <Image
                        alt="image"
                        src={"/landingPageImages/section04/1.png"}
                        fill
                        style={{objectFit: "cover"}}
                        sizes='width:100%'

                        />
                </div>
            </div>
            <div className="w-2/4 h-full flex-center flex-col gap-4 text-[#c31952]">
                <h1 className="text-6xl m-4 max-w-[484px] font-bold text-center">See it, make it, try it, do it</h1>
                <p className="max-w-[26rem] text-2xl text-center">
                    The best part of Pinterest is discovering new things and ideas from people around the world.                </p>
                <button className="h-12 rounded-full px-4 font-bold text-[#FFdfe9] bg-[#c31952]">Explore</button>
            </div>
        </div>
    );
}

export default SectionFour;