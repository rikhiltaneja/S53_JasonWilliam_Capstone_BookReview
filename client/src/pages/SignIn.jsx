import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch,useSelector } from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';



export default function SignIn() {
  const [formData, setFormData] = useState({});
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [loading, setLoading] = useState(false);
  let {loading , error : errorMessage} = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill out all fields.'));
    }
    try {
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    
      if (res.status === 400) {
        const data = await res.json();
        // setLoading(false);
        if (data.message === 'User not found') {
          toast.error("Email and Password did not match");
          loading=false;
        }
         else {
          // setErrorMessage(data.message || 'Something went wrong.');
          dispatch(signInFailure(data));
        }
      } else {
        const data = await res.json();
        // setLoading(false);

        if (res.ok) {
          dispatch(signInSuccess(data))
          // Successfully signed in
          navigate('/');
          toast.success('Signed in successfully!');
        } else {
          // setErrorMessage(data.message || 'Something went wrong.');
          dispatch(signInFailure(data));
        }
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-16'>
        {/* left */}
        <div className='flex-1'>
        <Link to='/' className='font-bold dark:text-white text-4xl'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white mr-4'>BookReview</span>
        </Link>
          <p className='text-sm mt-5'>
          Dive deeper with exclusive books and insights. Sign in now! 
          </p>
        </div>
        {/* right */}

        <div className='flex-1'>
          <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
            
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                aria-label='Username'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='***********'
                id='password'
                aria-label='Username'
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign In'
              )}
            </Button>
            
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't Have an Account?</span>
            <Link to='/sign-up' className='text-blue-500'>
              Sign Up
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}