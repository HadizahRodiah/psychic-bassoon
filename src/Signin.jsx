import React from 'react'
import {AiFillMail} from 'react-icons/ai'
import { AiFillSignature} from 'react-icons/ai'
const Signin = () => {
  return (
    <div className=' box flex flex-wrap bg-transparent justify-center item-center flex mt-20 h-screen w-screen'>
     <div className='main mt-20 flex flex-wrap bg-slate-400 w-96 ring ring-slate-900 ring-offset-2 '>
        </div>
     <form className='flex flex-col text-left'>
     <h1 className='text-white bg-transparent text-4xl mb-3 m-15 mt-15 text-center font-bold italic'>Dummy Form</h1>
        <p className='text-center text-slate-900 font-bold'>Welcome back! john Doe</p>   
     
            <div className='mt-10 mb-5 font-bold text-4xl-black flex flex-row '>
                <label className='text-slate-900 font-bold mr-4'><AiFillMail size={30}/></label>
                <input type='text' placeholder='@gmail.com' className='bg-transparent hover:bg-slate-900 hover:text-white  border rounded-md h-7 placeholder-slate-800 hover:placeholder-white '></input>
            </div>
            <div className='mb-5 font-bold  flex flex-row '>
                <label className='text-slate-900  font-bold mr-4'>Name</label>
                <input type='text' placeholder='Enter your name' className='bg-transparent hover:bg-slate-900 hover:text-white border rounded-md h-7 placeholder-slate-800 hover:placeholder-white '></input>
            </div>
            <div className='mb-5 font-bold text-4xl-black flex flex-row '>
                <label className='text-slate-900 font-bold mr-4'><AiFillSignature size={30}/></label>
                <input type='password' placeholder='********' className='bg-transparent hover:bg-slate-900 hover:text-white border rounded-md h-7 placeholder-slate-800 hover:placeholder-white '></input>
            </div>
            <div className='text-center font-bold item-center mt-10'>
            <button class="bg-transparent hover:bg-slate-900 text-black-900 font-bold hover:text-white py-2 px-4 border border-slate-900 hover:border-transparent rounded">
  Login
</button>
            </div>
        </form>

    </div>
  )
}

export default Signin