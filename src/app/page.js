'use client'
import {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from "next/image";
import iconList from "../../public/assets/images/icon-list.svg"

export default function Home() {
    const [email, setEmail] = useState(''); 
    const [errors, setErrors] = useState(''); 
    const [isFormValid, setIsFormValid] = useState(false); 
    
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

    useEffect(() => { 
      validateForm(); 
    }, [email]); 

    // Validate form 
    const validateForm = () => { 
      let errors = ''; 
  
      if (!email || !emailRegex.test(email)) { 
        errors = 'Valid email required'; 
      }

      setErrors(errors); 
      setIsFormValid(errors.length === 0); 
    }; 

    // Submit 
    const handleSubmit = () => { 
      if (isFormValid) { 
        console.log('Form submitted successfully!'); 
      } else { 
        console.log('Form has errors. Please correct them.'); 
      } 
    }; 

  return (
    <main className="font-roboto text-black flex xs:bg-white md:bg-dark-grey min-h-screen flex-col items-center justify-center md:p-24">
      <div className="flex xs:flex-col-reverse md:flex-row bg-white md:py-4 xs:pb-14 sm:pb-0 md:rounded-2xl gap-6 md:w-[800px] xs:h-[800px] md:h-[500px]">
        {/* LEFT SIDE ON DESKTOP / BOTTOM SIDE ON MOBILE */}
        <div className="left flex-1 flex flex-col justify-center gap-8 xs:px-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-dark-grey font-bold text-5xl">Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on: </p>
            <ul className="flex flex-col gap-2">
              <li className="flex gap-4">
                <Image src={iconList} width={20} height={20} alt="icon list" />
                Product discovery and building what matters
              </li>
              <li className="flex gap-4">
                <Image src={iconList} width={20} height={20} alt="icon list" />
                Measuring to ensure updates are a success
              </li>
              <li className="flex gap-4">
                <Image src={iconList} width={20} height={20} alt="icon list" />
                And much more!
                </li>
            </ul>
          </div>
          <div>
            <form className="flex flex-col gap-2" >
              <div className='flex justify-between'>
                <h1 className="font-semibold text-sm">Email address</h1>
                {errors && <h1 className="text-sm text-error">{errors}</h1>} {/* to show error text when email is invalid */}
              </div>
              
              <input 
                    className={errors ? 'emailError rounded-lg bg-red-100' : 'emailDefault rounded-lg'}
                    placeholder="email@company.com"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email"
                /> 

              <Link href={{
                    pathname: '/success',
                    query: {
                      search: `${email}` //for passing user input email to page /success
                    }
                  }} 
              > 
                <button
                  disabled={!isFormValid} onClick={handleSubmit} className={!isFormValid ? 'bg-charcoal-grey w-full text-white text-center py-4 rounded-lg mt-4' : 'bg-charcoal-grey w-full text-white text-center py-4 rounded-lg mt-4 hover:btn-gradient'} >
                  Subscribe to monthly newsletter
                </button>
              </Link>
            
            </form>
          </div>
        </div>

        {/* RIGHT SIDE ON DESKTOP / TOP SIDE ON MOBILE */}
        <div className="right flex-1 xs:img-mobile md:img-desktop">
        </div>
      </div>
    </main>
  );
}
