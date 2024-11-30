import { Button, Label, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"

export default function Signup(){
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
            You can Signup with your Email and Password or with Google.
          </p>
          </div>
    
            {/* right */}
            <div className="flex-1">
              <form action="" className="flex flex-col gap-3">
                <div className="">
                  <Label value='Your Username' />
                  <TextInput
                  type="text"
                  placeholder="Username"
                  id='username' />

                </div>
                <div className="">
                  <Label value='Your Email' />
                  <TextInput
                  type="text"
                  placeholder="name@company.com"
                  id='email' />

                </div>
                <div className="">
                  <Label value='Your Password' />
                  <TextInput
                  type="text"
                  placeholder="Password"
                  id='password' />

                </div>
                <Button gradientDuoTone="purpleToBlue" type="submit">
                  Signup
                </Button>
              </form>
              <div className="flex gap-2 text-sm mt-5">
                <span>
                  Have an Account?
                </span>
                <Link to='/Signin' className="text-blue-800">Signin</Link>
              </div>

            </div>


          

        </div>
        
        
        
        
        </div>
    )
  }