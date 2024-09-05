import logo from "../assets/react.svg"
import { FaFacebook , FaLinkedin , FaInstagram , FaTwitter} from "react-icons/fa"
import { SiArkecosystem } from "react-icons/si";

const FooterAndContact = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a href='/' className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
            <SiArkecosystem className='w-10 inline-block items-center text-white' /><span className="text-white">ERP</span>
          </a>
          <p className="md:w-1/2">Perfect for growing businesses that need more advanced capabilities. This plan builds on the Basic Plan by adding more features for enhanced management and operational efficiency.</p>
          <div>
            <input type="email" name="email" id="email" placeholder="Your email" className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none" />
            <input type="submit" value="Subscribe" className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all" />
          </div>
        </div>
        {/* footer navigation */}
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Platform</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">Overview</a>
              <a href="/" className="block hover:text-gray-300">Features</a>
              <a href="/" className="block hover:text-gray-300">About</a>
              <a href="/" className="block hover:text-gray-300">Pricing</a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Help</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">How does it works?</a>
              <a href="/" className="block hover:text-gray-300">Where to ask questions?</a>
              <a href="/" className="block hover:text-gray-300">How to play?</a>
              <a href="/" className="block hover:text-gray-300">What is needed for this?</a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Contact</h4>
            <ul className="space-y-3">
              <p className=" hover:text-gray-300">(+62) 81212442052</p>
              <p className=" hover:text-gray-300">123 erp erp</p>
              <p className=" hover:text-gray-300">Jakarta</p>
              <p className=" hover:text-gray-300">12345</p>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between my-8">
        <p>@ ERP 2021 - 2024. All rights reserved.</p>
        <div className="flex items-center space-x-5">
          <FaFacebook className="w-8 cursor-pointer hover:translate-y-4 transition-all duration-300" />
          <FaInstagram className="w-8 cursor-pointer hover:translate-y-4 transition-all duration-300" />
          <FaLinkedin className="w-8 cursor-pointer hover:translate-y-4 transition-all duration-300" />
          <FaTwitter className="w-8 cursor-pointer hover:translate-y-4 transition-all duration-300" />
        </div>
      </div>
    </div>
  )
}

export default FooterAndContact
