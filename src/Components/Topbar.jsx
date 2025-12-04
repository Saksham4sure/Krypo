import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
    return (
        <div className='bg-[#EEEEEE] border-[#E7E6E9] border-2 w-full fixed h-20 z-50 flex items-center px-4 justify-between'>
            <div>
                <Link to="/" className="text-4xl cursor-pointer font-semibold cursor-default">Kry<span className="text-[#882DE4]">Po.</span></Link>
            </div>
            <div className='text-2xl flex gap-4 px-2'>
                <button className='cursor-pointer'>
                    <i className="ri-notification-4-line"></i>
                </button>
                <button className='cursor-pointer'>
                    <i className="ri-questionnaire-line"></i>
                </button>
            </div>
        </div>
    )
}

export default Topbar