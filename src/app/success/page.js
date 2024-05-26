'use client'
import Image from "next/image"
import Link from "next/link"
import iconSuccess from "../../../public/assets/images/icon-success.svg"
import SuccessComponent from "../component/SuccessComponent"
import { Suspense } from 'react'

const success = () => {
  return (
    <main className="font-roboto text-black flex xs:bg-white md:bg-dark-grey min-h-screen flex-col items-center justify-between md:p-24">
      <div className="flex flex-col justify-between xs:border-black bg-white xs:py-20 md:py-8 xs:px-8 md:px-12 md:rounded-2xl gap-6 xs:min-h-[700px] md:w-[450px] md:min-h-[450px]">
        <div className="flex flex-col gap-6">
          <Image src={iconSuccess} width={60} height={60} alt="icon success" />
          <h1 className="text-5xl font-semibold mt-2">Thanks for subscribing!</h1>
          <Suspense fallback={<div>Loading...</div>}> {/*Ensure that calls to useSearchParams() are wrapped in a Suspense boundary. */}
            <SuccessComponent />
          </Suspense>
        </div>
        
        <Link href='/'> 
          <div className="bg-charcoal-grey text-white text-center py-4 rounded-lg mt-2 hover:btn-gradient">
            <button>Dismiss message</button>
          </div>  
        </Link> 
      </div>
    </main>
  )
}

export default success