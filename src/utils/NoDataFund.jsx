import React from 'react'
import sad from '../assets/sad-sad-face.gif'
const NoDataFund = () => {
    return (
        <div className=' flex justify-center items-center w-full h-screen bg-gray-200 opacity-65 py-4'>
            <div className=' flex flex-col justify-center items-center bg-white w-[400px] h-[100px] rounded-md text-center'>
                <img className=' h-8 w-8' src={sad} />
                <p className=' text-xl text-red-500 font-bold'>
                    No Data found
                </p>

            </div>
        </div>
    )
}

export default NoDataFund