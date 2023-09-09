import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import { authOptions } from '../../app/api/auth/[...nextauth]/route'
import { useSession } from "next-auth/react";
import Image from 'next/image';
import LoginForm from '../loginForm';
import SignupForm from '../signupForm';


const SectionFive = () => {
  const [formType, setFormType] = useState("Sign up")
  function changeForm() {
    formType == "Sign up" ? setFormType("Log in") : setFormType("Sign up");

  }


  return (
    <>
      <div className=' flex w-full h-full relative'>
        <div className='absolute bg-black opacity-70 w-full h-full -z-10'></div>
        <div className='absolute w-full h-full -z-20'>
          <div className='relative w-full h-full'>
            <Image
              src={"/bg.png"}
              alt="bg image"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            // quality={100}
            >

            </Image>
          </div>
        </div>

        <div className='w-2/4 h-full pl-44 flex items-center'>
          <div className='text-[4.5rem] text-white font-bold w-[22rem] leading-tight'>Sign up to get your ideas</div>
        </div>
        <div className="w-2/4 h-full  flex-center gap-4">
          <div className='py-16 max-w-[464px] w-full px-10 flex items-center flex-col gap-1 rounded-3xl bg-white'>
            <div className='mb-4 flex items-center flex-col'>
              <div className='relative w-10 h-10 mb-3'>
                <Image
                  alt='logo'
                  src={"/logo.png"}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes='width:100%'
                ></Image>
              </div>
              <div className='text-3xl font-bold'>Welcome to Pinterest</div>
              <div>Find new ideas to try</div>
            </div>
            {
              formType == "Sign up" ?  <LoginForm />:<SignupForm /> 
            }
            <div className='text-sm w-full flex-center mt-2'>
              {
                formType == "Sign up" ?
                  <div className=''>Not on pinProject yet?</div> :
                  <div>Already a member?</div>
              }
              <button onClick={changeForm} className=' pl-2 font-bold'>{formType}</button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default SectionFive;
