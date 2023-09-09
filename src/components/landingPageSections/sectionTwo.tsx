import Image from 'next/image';

const SectionTwo = () => {
    return (
        <div className="w-full h-full flex gap-4">
            <div className="w-2/4 h-full flex-center">
                <div className="w-96 h-96 flex-center relative">
                    <div className="rounded-[3rem]   absolute -top-28 -right-8  w-40 h-48">
                        <div className='w-full h-full relative'>
                            <Image
                                alt='first image'
                                src={"/landingPageImages/section02/1.png"}
                                fill
                                sizes='width:100%'
                            />
                        </div>
                    </div>
                    <div className="rounded-[3rem]   absolute  w-56 h-72 -left-14">
                        <div className='w-full h-full relative'>
                            <Image
                                alt='first image'
                                src={"/landingPageImages/section02/3.png"}
                                fill
                                sizes='width:100%'
                            />
                        </div>
                    </div>
                    <div className="rounded-[3rem]   absolute -bottom-28 -right-8 w-44 h-72">
                        <div className='w-full h-full relative'>
                            <Image
                                alt='first image'
                                src={"/landingPageImages/section02/4.png"}
                                fill
                                sizes='width:100%'
                            />
                        </div>
                    </div>
                    <div className="rounded-[3rem]   absolute  w-72 h-[456px] ">
                        <div className='w-full h-full relative'>
                            <Image
                                alt='first image'
                                src={"/landingPageImages/section02/2.png"}
                                fill
                                sizes='width:100%'

                            />
                        </div>
                    </div>
                    <div className="rounded-[3rem]  flex-center gap-3 absolute -left-5 w-72 h-24 bg-white">
                        <div className="relative w-6 h-6">
                            <Image
                                alt='search'
                                src={"/search.svg"}
                                fill
                            />

                        </div>
                        <h1 className="font-bold text-xl text-[#6e0f3c]">easy chicken dinner</h1>
                    </div>

                </div>
            </div>
            <div className="w-2/4 h-full flex-center p-4 flex-col gap-4 text-[#c31952]">
                <h1 className="text-6xl font-bold text-center">Search for an idea</h1>
                <p className="max-w-[26rem] text-2xl text-center">
                    What do you want to try next? Think of something you're into—like “easy chicken dinner”—and see what you find.
                </p>
                <button className="h-12 rounded-full px-4 font-bold text-[#FEFD92] bg-[#c31952]">Explore</button>
            </div>
        </div>
    );
}

export default SectionTwo;