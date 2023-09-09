import React from 'react'
import Image from 'next/image';


export default function LoginForm() {
    return (
        <>
            <div className="w-full h-full flex items-center flex-col">
                <div>login</div>
                <div className='flex flex-col gap-1 max-w-[268px] w-full '>
                    <span className='px-2 text-sm'>Email</span>
                    <input placeholder='Email' className='px-3 transition- border-slate-300 border-2 h-12 rounded-xl' type="text" />
                </div>
                <div className='flex flex-col gap-1 max-w-[268px] w-full '>
                    <span className='px-2 mt-2 text-sm'>Password</span>
                    <input placeholder="Password" className='px-3 border-slate-300 border-2 h-12 rounded-xl' type="password" />
                </div>
                <button className='bg-[#e60023] font-bold text-white rounded-full h-10 mt-2 w-full max-w-[268px]'>Continue</button>
                <span className='font-bold text-base mt-2'>OR</span>
                <div className='border-[1px] border-slate-300 flex-center gap-3 rounded-full h-10 mt-2 w-full max-w-[268px]'>
                    <div className='relative self-center flex-center w-[19px] h-[19px]'>
                        <Image
                            alt='logo'
                            src={"/google.png"}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes='width:100%'
                        ></Image>
                    </div>
                    <div className='font-medium'>Continue with Google</div>
                </div>

            </div>

        </>
    )
}
