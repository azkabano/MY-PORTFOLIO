import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl data-aos="zoom-in-up"'>Get in touch</h2>
                <p className='text-black text-[18px] pt-2 data-aos="zoom-in-up"'>
                    Drop me a line, give me a call, or send me a message by submitting the form.
                </p>
                <div className='flex gap-3 items-center data-aos="zoom-in-up"'>
                <AiOutlineMail  size={30}/> azkamkashif@gmail.com 
                </div >
                <div className='flex gap-3 items-center data-aos="zoom-in-up"'>
                <BsTelephone size={30}/> (03138994061)
                </div>
            </div>
            <div className='space-y-8'>
            <div className='flex flex-col gap-1 data-aos="zoom-in-up"'>
  <label htmlFor='name'>Name</label>
  <input 
    type="text" 
    className='h-[40px] bg-white border border-[#00c2cb]' // White background and border color #00c2cb
    id='name'
  />
</div>

<div className='flex flex-col gap-1 data-aos="zoom-in-up"'>
  <label htmlFor='name'>Name</label>
  <input 
    type="text" 
    className='h-[40px] bg-white border border-[#00c2cb]' // White background and border color #00c2cb
    id='name'
  />
</div>

<div className='flex flex-col gap-1 data-aos="zoom-in-up"'>
  <label htmlFor='message'>Message</label>
  <textarea  
    className='bg-white border border-[#00c2cb]' // White background and custom border color
    id='message' 
    rows={8}
  />
</div>
<button className='bg-accent p-2 px-6 text-white data-aos="zoom-in-up"'>Send</button>

            </div>
        </div>
    </div>
  )
}

export default Contact
