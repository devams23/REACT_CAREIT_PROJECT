import React , {useState} from 'react'
import { login as storelogin  , setfileid} from '../store/authSlice'
import authservice from '../appwrite/auth'
import { useDispatch  } from 'react-redux'
import {useNavigate , Link} from "react-router-dom"
import {useForm } from "react-hook-form"
import {Input , Logo,Button} from "./index"
import service from "../appwrite/service"
function Signup() {
    const dispatch  = useDispatch();
    const navigate = useNavigate();
    const [error, seterror] = useState("")
    const {register, handleSubmit} = useForm();

    const  signup = async (data)=>{
        try {
            const session = await authservice.signup(data)
            if (session) {
                const userdata = await authservice.getcurrentuser();
                if (userdata) {
                    dispatch(storelogin(userdata))
                    
                    if (userdata.$id) {
                        const dbstreak = await service.createstreak({userid:userdata.$id ,legs:0 ,chest:0,arms:0, cardio:0 , exercises:0} )
                       
                        dispatch(setfileid(dbstreak.$id))
                        navigate("/")
                    }
                }
            }
        } catch (error) {
            seterror(error.message)
        }
    }

  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign Up to create account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Already have any account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign in
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(signup)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                    label="Full name: "
                    placeholder="Enter your fullname.."
                    type="text"
                    {...register("fullname" , {
                        required:true,  
                    }) }
                />
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email" , {
                    required:true,
                    validate: {
                        pattern:(value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                        
                        }
                    }) 
                }
            
                />
                <Input
                label="Password: "
                placeholder="Enter your password"
                type="password"
                {...register("password" , {
                    required:true,  
                }) }
                />
                <Button
                type="submit"
                className="w-full"
                >Create Account</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Signup