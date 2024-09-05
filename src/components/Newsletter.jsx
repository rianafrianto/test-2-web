import React from 'react'
import Banner from '../shared/Banner'
import newsLetterImg from '../assets/news.svg'

const Newsletter = () => {

    const dataBanner = {
        heading : "Customizable workflows and automation",
        subHeading : "Designed for medium to large businesses requiring a comprehensive solution with extensive features and customization options. This plan provides a complete suite of tools to manage complex operations and drive strategic growth",
        discount : "I have a code"
    }
  return (
    <div className='md:px-14 p-4 max-w-screen-2xl mx-auto my-12'>
      <Banner banner={newsLetterImg} heading={dataBanner.heading} subHeading={dataBanner.subHeading} btnDiscount={dataBanner.discount} />
    </div>
  )
}

export default Newsletter
