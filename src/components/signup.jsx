import React from 'react'
import pic from '../assets/pics.jpg'

export default function Signup() {
  return (
    <div>
        <div className='grid grid-cols-2 gap-4 font-sans'>

        <div>
            <img src={pic} alt="" srcset=""  className='rounded-r-lg'/>
        </div>

       

        <div className='p-12 my-4 mx-4'>
            <div className='py-4 text-left'>
                <h1 className='text-xl font-bold'>Personal Information</h1>
                <p className='text-slate-400 text-sm'>  Quidem facere  corporis libero alias porro deserunt dolorem ipsam unde temporibus sunt recusandae itaque nihil non.</p>
            </div>

            <form action="" className='w-full pt-4'>
                <div className='grid grid-cols-2 gap-4'>

               
                <div className='py-3'>
                    <label htmlFor="firstname" className='pb-4'>Firstname*</label>
                    <input type="text" name="firstname" id="" placeholder='Enter your firstname' className='rounded-md border border-slate-400 p-2 w-full' />
                </div>

                <div className='py-3'>
                    <label htmlFor="lastname" className='pb-4'>Lastname*</label>
                    <input type="text" name="lastname" id="" placeholder='Enter your lastname' className='rounded-md border border-slate-400 p-2 w-full' />
                </div>



                </div>

                <div className='py-3'>
                    <label htmlFor="Email Address" className='pb-4'>Email Address*</label>
                    <input type="text" name="lastname" id="" placeholder='Enter your lastname' className='rounded-md border border-slate-400 p-2 w-full' />
                </div>

                <div className='py-3'>
                    <label htmlFor="Phone No" className='pb-4'>Phone No*</label>
                    <input type="text" name="lastname" id="" placeholder='Enter your lastname' className='rounded-md border border-slate-400 p-2 w-full' />
                </div>

                <div className='py-3'>
                    <label htmlFor="Contact Reference" className='pb-4'>Contact Reference*</label>
                    <select name="" id=""  className='rounded-md border border-slate-400 p-2 w-full'>
                        <option value="email">Email</option>
                    </select>
                   
                </div>


                <div className='py-3'>
                   <button type="submit" className='rounded-md border border-blue-400 p-2 w-full bg-blue-600 text-white' >Continue</button>
                    
                </div>


                <div className='py-3 text-center text-blue-600 font-bold'>
                  <a href="/">Back</a>
                    
                </div>



            </form>
        </div>



        </div>
    </div>
  )
}
