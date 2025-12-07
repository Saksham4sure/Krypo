import React from 'react'

const CreditCard = ({ bankName, id, name, exp, img, icon }) => {
    return (
        <div className='h-[200px] w-[330px] cursor-default text-[#ffffff] bg-[#242424] overflow-hidden flex px-4 py-3 relative rounded-3xl'>
            <img className='absolute top-0 left-0 object-cover h-full w-full' src={img} />
            <div className='flex flex-col justify-between z-20 w-full'>
                <div className='flex items-center pt-3 justify-between w-full'>
                    <h1 className='font-light'>{bankName}</h1>
                    <i className="ri-bank-line"></i>
                </div>
                <div>
                    <p className='text-xl'>{id}</p>
                    <p className='font-light'>{name}</p>
                </div>
                <div className='flex items-center justify-between w-full'>
                    <div className='font-light text-xs'>
                        <p>Exp {exp}</p>
                    </div>
                    <div className='text-4xl'>
                        <i className={icon}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreditCard