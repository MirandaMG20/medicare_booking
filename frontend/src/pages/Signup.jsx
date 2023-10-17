import React from 'react'
import signupImg from '../assets/images/signup.gif'

const Signup = () => {
  return (
    <section className='px-5 xl:px-0'>
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* IMG BOX */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className='w-full rounded-l-lg' />
            </figure>
          </div>

          {/* SIGN UP FORM */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className='text-primaryColor'> Account </span>
            </h3>

            <form action="">

              <div className="mb-5">
                <input
                  type='text'
                  name='name'
                  value=''
                  placeholder='Enter Your Full Name'
                  className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type='email'
                  name='email'
                  value=''
                  placeholder='Enter Your Email'
                  className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type='password'
                  name='password'
                  value=''
                  placeholder='Enter Your Password'
                  className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label htmlFor="" className="text-headingColor font-bold text-[16px]leading-7">
                  Are you a:
                  <select name="role" className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup