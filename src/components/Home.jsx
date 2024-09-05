import React from 'react'
import banner from "../assets/banner1.svg"
import Banner from '../shared/Banner'

function Home() {

    const dataBanner = {
        heading : "Monitor your business with our ERP application",
        subHeading : "Streamline your operations and gain valuable insights with our comprehensive ERP solution. Manage inventory, track performance, and enhance customer relationships effortlessly.",
        started : "Get Started",
        discount : "Discount"
    }
    
    return (
        <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24' id="home">
          <Banner banner={banner} heading={dataBanner.heading} subHeading={dataBanner.subHeading} btnDiscount={dataBanner.discount} btnStarted={dataBanner.started}   />
        </div>
    )
}

export default Home
