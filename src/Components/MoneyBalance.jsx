import React, { useState } from 'react'

const MoneyBalance = () => {
    const [hidden, setHidden] = useState(false);


    return (
        <div className='relative mt-4 text-[#ffffff] bg-[#242424] w-full overflow-hidden h-44 md:h-36 rounded-xl border shadow-xs border-[#E7E6E9] p-5 flex flex-col md:flex-row items-start justify-between'>
            {/* <img className='absolute top-0 left-0 object-cover w-full h-full' src="/background.png" alt="background" /> */}
            <div className='flex items-center w-full sm:w-[300px] z-10'>
                <div className='flex flex-col cursor-pointer' onClick={() => setHidden(!hidden)}>
                    <div className='flex items-center gap-2 font-light'>
                        <h1 className='text-lg font-light'>Your Balance</h1>
                        <button className='text-lg cursor-pointer'>
                            {hidden ? <i class="ri-eye-off-line"></i> : <i class="ri-eye-line"></i>}
                        </button>
                    </div>
                    <h1 className='text-3xl  select-none'>Rs. {hidden ? "XXX.XX" : "1,82,506.67"}</h1>
                </div>
            </div>
            <div className='flex sm:h-full gap-2 w-full sm:w-auto items-center sm:items-end justify-center z-10'>
                <button className='border w-[120px] shadow-md py-2 cursor-pointer rounded-md text-[#ffffff] border-[#cccccc]'>Transfer <i class="ri-upload-line"></i></button>
                <button className='w-[120px] shadow-md py-2 cursor-pointer rounded-md bg-[#ffffff] text-[#242424]'>Deposit <i class="ri-download-line"></i></button>
            </div>
        </div>
    )
}

export default MoneyBalance