import React, { useState } from 'react'

const BalanceCard = ({ title, amount, subText }) => {
    const [hidden, setHidden] = useState(true);

    return (
        <div className='flex items-center justify-between p-4 shadow-sm rounded-xl border-[#E7E6E9] border min-w-[230px] min-h-[120px] bg-[#EEEEEE]'>
            <div className='flex flex-col cursor-pointer' onClick={() => setHidden(!hidden)}>
                <div className='flex items-center gap-2 font-light'>
                    <h1 className='text-sm font-light'>{title}</h1>
                    <button className='text-sm cursor-pointer'>
                        {hidden ? <i class="ri-eye-off-line"></i> : <i class="ri-eye-line"></i>}
                    </button>
                </div>
                <h1 className='text-2xl text-[#222222]  select-none'>Rs. {hidden ? "XXX.XX" : `${amount}`}</h1>
                <h1 className='flex items-center text-xs font-extralight pt-4'>{subText}  this month</h1>
            </div>
        </div>
    )
}

export default BalanceCard