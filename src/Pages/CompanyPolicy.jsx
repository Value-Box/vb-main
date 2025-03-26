import React, { useEffect, useState } from 'react'

function CompanyPolicy() {
    const[active, setActive]=useState(0)

    useEffect(()=>{
        console.log(active);
        
    },[active])

    const Faqs=[
        {
            question:'What is UX design?',
            answer:'UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.'
        },
        {
            question:'What are the key principles of UX design?',
            answer:'UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.'
        },
        {
            question:'What is the difference between UX and UI design?',
            answer:'UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.'
        },
        {
            question:'What is a wireframe?',
            answer:'UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.'
        },
        {
            question:'What is user testing?',
            answer:'UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.'
        },
    ]
  return (
    <div className='bg-natural-0 max-w-[1920px] mx-auto'>
        
      <div className="px-3 sm:px-6 md:px-12 text-natural-gray pt-5">
        <h1 className="text-xl md:text-2xl font-bold sm:text-center text-dark-blue mb-4">
          Title of the information
        </h1>
        
        <p className="font-semibold text-[#333]">Lorem ipsum dolor sit amet consectetur.</p>
        <p className=" mt-2">
          Quisque luctus elementum urna faucibus id tortor lacus morbi. Iaculis egestas urna ut pellentesque. Arcu amet sit imperdiet viverra semper. 
          Urna massa euismod libero viverra rhoncus.
        </p>
        
        <p className=" mt-4">
          Turpis morbi lacinia risus ac sit imperdiet proin. Sed fames interdum suspendisse turpis varius ornare arcu sed.
        </p>
        
        <p className=" mt-4">
          Nulla odio risus amet suscipit metus hendrerit luctus aliquam scelerisque. Arcu eget elit nunc a in tellus. 
          Ac quis viverra nisl at vestibulum sodales sagittis turpis enim.
        </p>
        
        <h2 className="text-lg text-[#333] font-semibold mt-6">Massa vestibulum platea vulputate aliquam. Scelerisque</h2>
        <p className=" mt-2">
          Nibh turpis suspendisse mauris sit. Pulvinar tincidunt vel fermentum ut est in praesent.
        </p>
        
        <p className=" mt-4">
          Consequat elementum purus egestas praesent egestas. Ipsum pretium eu lorem semper malesuada sapien et sed ullamcorper.
        </p>
      </div>
      <div className="px-3 sm:px-6 md:px-12 text-natural-gray pt-10">
        <h1 className="text-xl md:text-2xl font-bold sm:text-center text-dark-blue mb-4">
          Title of the information
        </h1>
        
        <p className="font-semibold text-[#333]">Lorem ipsum dolor sit amet consectetur.</p>
        <p className=" mt-2">
          Quisque luctus elementum urna faucibus id tortor lacus morbi. Iaculis egestas urna ut pellentesque. Arcu amet sit imperdiet viverra semper. 
          Urna massa euismod libero viverra rhoncus.
        </p>
        
        <p className=" mt-4">
          Turpis morbi lacinia risus ac sit imperdiet proin. Sed fames interdum suspendisse turpis varius ornare arcu sed.
        </p>
        
        <p className=" mt-4">
          Nulla odio risus amet suscipit metus hendrerit luctus aliquam scelerisque. Arcu eget elit nunc a in tellus. 
          Ac quis viverra nisl at vestibulum sodales sagittis turpis enim.
        </p>
        
        <h2 className="text-lg text-[#333] font-semibold mt-6">Massa vestibulum platea vulputate aliquam. Scelerisque</h2>
        <p className=" mt-2">
          Nibh turpis suspendisse mauris sit. Pulvinar tincidunt vel fermentum ut est in praesent.
        </p>
        
        <p className=" mt-4">
          Consequat elementum purus egestas praesent egestas. Ipsum pretium eu lorem semper malesuada sapien et sed ullamcorper.
        </p>
      </div>
    

      <div className="w-full px-3 sm:px-6 md:px-12 mt-4 2xl:mt-8 mb-8 2xl:mb-10">
            <h2 className="text-2xl sm:text-4xl text-center font-bold text-natural-black leading-[3.25rem] mb-5">
            Frequently Asked Questions
            </h2>
          
          <div className="accordion-group flex flex-col gap-3" data-accordion="default-accordion">
            {Faqs.map((faq,index)=>(
                <div
              className={`${active === index?'bg-[linear-gradient(90deg,#0032A3_0%,#1A51CB_25%,#3B66C8_50%,#1A51CB_75%,#0032A3_100%)] text-white':'bg-natural-color'} 
            2xl:rounded-xl rounded-[10px] p-3 sm:p-4 lg::p-5 2xl:p-6`}
              id="basic-heading-one-with-arrow-always-open"
            >
             <button className="accordion-toggle group inline-flex items-start justify-between text-lg sm:text-xl 
             2xl:text-2xl font-semibold 2xl:font-bold leading-8 w-full transition duration-500"
  onClick={() => setActive(active === index ? null : index)}>

  <h5 className='text-left'>{faq.question}</h5>

  <div className={`transition-transform duration-500 ${active === index ? "rotate-180" : "rotate-0"}`}>
    <svg xmlns="http://www.w3.org/2000/svg" className='w-7' viewBox="0 0 40 40" fill="none">
      {/* Define gradient */}
      <defs>
        <linearGradient id="yellowGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFC136" />
          <stop offset="25%" stopColor="#FAC142" />
          <stop offset="50%" stopColor="#FFD168" />
          <stop offset="75%" stopColor="#F5BC3A" />
          <stop offset="100%" stopColor="#E09B00" />
        </linearGradient>
      </defs>

      {/* Outer circle */}
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="19"
        stroke={active === index ? "url(#yellowGradient)" : "#1A1A1A"}
        strokeWidth="2"
      />

      {/* Arrow icon */}
      <path
        d="M20.224 25.3333L20.224 26.5404L21.0776 25.6869L24.488 22.2765L24.1344 21.9229L24.488 22.2765C24.5765 22.1879 24.7201 22.1879 24.8086 22.2765C24.8971 22.365 24.8971 22.5086 24.8086 22.5971L20.1576 27.2481C20.0691 27.3367 19.9256 27.3367 19.837 27.2481L19.4835 27.6017L19.837 27.2481L15.1862 22.5974C15.1417 22.5528 15.1196 22.4956 15.1196 22.4369C15.1196 22.3783 15.1417 22.321 15.186 22.2766C15.2746 22.188 15.4181 22.188 15.5067 22.2766L15.5067 22.2766L18.9171 25.6869L19.7706 26.5404L19.7706 25.3333L19.7706 12.9121C19.7706 12.7869 19.8722 12.6854 19.9973 12.6854C20.1225 12.6854 20.224 12.7869 20.224 12.9121L20.224 25.3333Z"
        fill={active === index ? "url(#yellowGradient)" : "#1A1A1A"}
        stroke={active === index ? "url(#yellowGradient)" : "#1A1A1A"}
      />
    </svg>
  </div>
</button>


              <div
      className={`grid transition-all duration-500 ease-in-out ${
        active === index ? "grid-rows-[1fr] opacity-100 py-2" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <p className="text-sm sm:text-base 2xl:text-xl text-white">{faq.answer}</p>
      </div>
    </div>
            </div>
            ))}
            
            
          </div>
        
      </div>


    </div>
  )
}

export default CompanyPolicy