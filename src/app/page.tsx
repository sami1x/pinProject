import LandingPage from '../components/landingPage';
import React, { useState } from 'react';
import { authOptions } from '../app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession(authOptions);
  // console.log(session)


  return (
    <>
    <LandingPage/>
    </>
  );
}
