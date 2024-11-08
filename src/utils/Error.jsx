import React from 'react';
import sad from '../assets/sad-sad-face.gif';
const Error = ({ error }) => {

    return (
        <div className=' flex justify-center items-center w-full h-screen bg-red-500 opacity-65'>
            <div className=' flex flex-col justify-center items-center bg-white w-[400px] h-[100px] rounded-md text-center'>
                <img className=' h-8 w-8' src={sad} />
                <p className=' text-xl text-red-500 font-bold'>
                    {error} !
                </p>
                <span>Please Contact With Adminstration</span>
            </div>
        </div>
    )
}

export default Error