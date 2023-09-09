import Image from 'next/image';

const SectionThree = () => {
    return (
        <div className="w-full h-full flex flex-row-reverse	 gap-4">
            <div className="w-2/4 h-full flex py-12">
                <div className="w-full flex-1 flex flex-col">
                    <div className=" relative responsive-text self-end flex-center w-full h-2/4 max-w-[20rem]">
                        <div className=' text-[15cqi] mt-4 text-white font-bold h-3/6 w-4/5 z-10'>
                            Fern future home vibes

                        </div>
                        <Image
                            alt="testing"
                            src={"/landingPageImages/section03/1.png"}
                            fill
                            style={{objectFit: "contain", objectPosition:"center"}}
                            sizes='width:100%'
                        />
                    </div>
                    <div className=" relative responsive-text  mr-10 self-end flex-center w-full h-2/4 max-w-[15rem]">
                        <div className=' text-[12cqi] ml-4 pr-14 flex items-end text-white font-bold h-3/6 w-4/5 z-10'>
                            Serve my drink in style
                        </div>
                        <Image
                            alt="testing"
                            src={"/landingPageImages/section03/2.png"}
                            fill
                            style={{objectFit: "contain", objectPosition:"center"}}
                            sizes='width:100%'

                        />
                    </div>

                </div>

                <div className="w-full flex-1"  >
                    <div className=" relative responsive-text ml-8 flex-center w-full h-1/3 max-w-[15rem]">
                        <div className=' text-[10cqi] pl-4 flex items-end text-white font-bold h-3/5 w-4/5 z-10'>
                        My Scandinavian bedroom

                        </div>
                        <Image
                            alt="testing"
                            src={"/landingPageImages/section03/3.png"}
                            fill
                            style={{objectFit: "contain", objectPosition:"center"}}
                            sizes='width:100%'

                        />
                    </div>
                    <div className=" relative responsive-text ml-7 flex-center w-full h-1/3 max-w-[10rem]">
                        <div className=' text-[12cqi] pb-2 flex items-end text-white font-bold h-4/6 w-4/5 z-10'>
                            The deck of my dreams

                        </div>
                        <Image
                            alt="testing"
                            src={"/landingPageImages/section03/4.png"}
                            fill
                            style={{objectFit: "contain", objectPosition:"center"}}
                            sizes='width:100%'

                        />
                    </div>
                    <div className=" relative responsive-text -ml-5 flex-center w-full h-1/3 max-w-[15rem]">
                        <div className=' text-[12cqi] flex items-end text-white font-bold h-4/5 w-4/6 z-10'>
                            Our bathroom upgrades

                        </div>
                        <Image
                            alt="testing"
                            src={"/landingPageImages/section03/5.png"}
                            fill
                            style={{objectFit: "contain", objectPosition:"center"}}
                            sizes='width:100%'

                        />
                    </div>
                </div>


            </div>
            <div className="w-2/4 h-full flex-center p-4 flex-col gap-4 text-[#006b6c]">
                <h1 className="text-6xl font-bold text-center">Save ideas you like</h1>
                <p className="max-w-[26rem] text-2xl text-center">
                    Collect you favorites so you can get back to them later.
                </p>
                <button className="h-12 rounded-full px-4 font-bold text-[#ccf6ee] bg-[#006b6c]">Explore</button>
            </div>
        </div>
    );
}

export default SectionThree;