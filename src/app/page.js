import Image from "next/image";
import iconList from "../../public/assets/images/icon-list.svg"

export default function Home() {
  return (
    <main className="font-roboto flex xs:bg-white md:bg-dark-grey min-h-screen flex-col items-center justify-between md:p-24">
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
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-sm">Email address</h4>
            <input className="border-2 rounded-lg py-2 px-4" placeholder="email@company.com" />
            <button className="bg-charcoal-grey text-white py-4 rounded-lg scroll-mt-4">Subscribe to monthly newsletter</button>
          </div>
        </div>

        {/* RIGHT SIDE ON DESKTOP / TOP SIDE ON MOBILE */}
        <div className="right flex-1 xs:img-mobile md:img-desktop">
        </div>
      </div>
    </main>
  );
}
