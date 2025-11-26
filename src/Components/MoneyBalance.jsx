import React, { useState } from 'react'

const MoneyBalance = () => {
    const [hidden, setHidden] = useState(true);


    return (
        <div className='mt-4 bg-linear-to-r from-[#00ADB5] to-[#6DD5FA] text-[#222222] w-full h-44 md:h-28 rounded-xl border shadow-lg border-[#E7E6E9] p-5 flex flex-col md:flex-row items-start justify-between'>
            <div className='flex items-center justify-between w-full sm:w-[300px]'>
                <div className='flex flex-col cursor-pointer' onClick={() => setHidden(!hidden)}>
                    <h1 className='text-lg font-light'>Your Balance</h1>
                    <h1 className='text-2xl md:text-3xl font-semibold  select-none'>Rs. {hidden ? "XXX.XX" : "1,82,506.67"}</h1>
                </div>
                <div className='flex items-center justify-center h-full'>
                    <button className='text-3xl cursor-pointer' onClick={() => setHidden(!hidden)}>
                        {hidden ? <i class="ri-eye-off-line"></i> : <i class="ri-eye-line"></i>}
                    </button>
                </div>
            </div>
            <div className='flex sm:h-full gap-2 w-full sm:w-auto items-center sm:items-end justify-center'>
                <button className='border w-[120px] shadow-md py-2 cursor-pointer rounded-md border-[#ffffff]'>Transfer <i class="ri-upload-line"></i></button>
                <button className='w-[120px] shadow-md py-2 cursor-pointer rounded-md bg-[#ffffff]'>Deposit <i class="ri-download-line"></i></button>
            </div>
        </div>
    )
}

export default MoneyBalance