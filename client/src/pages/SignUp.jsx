import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='min-h-screen mt-20 '>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 ">
        {/* left */}
        <div className="flex-1">
        <Link to='/' className='font-bold dark:text-white text-4xl'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white mr-4'>BookReview</span>
      </Link>
      <p className='text-sm mt-5'>
      Dive deeper with exclusive books and insights. Sign up now! 
      </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form>
            <div className="flex flex-col gap-4">
              <Label value='Your Username'/>
              <TextInput id='username' type='text' placeholder='Username'  />
              </div>
              <div className="">
              <Label value='Your Email'/>
              <TextInput id='email' type='email' placeholder='Email' />
            </div>
              <div className="">
              <Label value='Your Password'/>
              <TextInput id='password' type='password' placeholder='Password' />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' className=' w-96 flex-col gap-4 mt-5'>Sign Up</Button>
          </form>
          <div className="">
            <span>
            Have an account? <Link to='/sign-in' className='text-blue-500 cursor-pointer'>Sign In</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp