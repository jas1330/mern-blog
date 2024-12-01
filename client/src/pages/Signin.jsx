import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react"
import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom"

export default function SignIn(){
  const [formData,setFormData]=useState({})
  const [errorMessage,setErrorMessage]=useState(null)
  const [loading,setloading] =useState(false)
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setFormData({ ...formData,[e.target.id] :e.target.value.trim()})
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!formData.email || !formData.password){
      return setErrorMessage('Please fill out all the fields..')
    }
    try{
      setloading(true)
      setErrorMessage(null)
      const res=await fetch('/api/auth/signin',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData),
      });
      const data=await res.json();
      if (data.success ===false){
        return setErrorMessage(data.message)
      }
      setloading(false);
      if(res.ok){
        navigate('/')
      }
    }catch(error){
      setErrorMessage(error.message)
      setloading(false)

    }
  }
    return(
      <div className="min-h-screen mt-20">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          {/* left */}
          <div className="flex-1">
            <Link
            to='/'
            className='text-4xl font-bold dark:text-white'
          >
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-300 via-purple-500 to-blue-500 rounded-lg text-white'>
              Blog
            </span>
            Forge
          </Link>
          <p className="text-sm mt-5 ">
            You can Signin with your Email and Password.
          </p>
          </div>
    
            {/* right */}
            <div className="flex-1">
              <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit}>
                
                <div className="">
                  <Label value='Your Email' />
                  <TextInput
                  type="email" placeholder="name@company.com" id='email'  onChange={handleChange}/>

                </div>
                <div className="">
                  <Label value='Your Password' />
                  <TextInput
                  type="password" placeholder="Password" id='password' onChange={handleChange} />

                </div>
                <Button gradientDuoTone="purpleToBlue" type="submit" disabled={loading}>
                  {loading  ?(
                    <>
                    <Spinner size='sm' />
                    <span className="pl-3">Loading...</span>
                    </>
                  ):(
                    'Sign In'
                  )}
                </Button>
              </form>
              <div className="flex gap-2 text-sm mt-5">
                <span>
                  Don't Have an Account?
                </span>
                <Link to='/Signup' className="text-blue-800">Signup</Link>
              </div>
              {
                errorMessage && (
                  <Alert className="mt-5" color='failure'>
                    {errorMessage}
                  </Alert>
                )
              }
            </div>
        </div>
       </div>
    )
  }