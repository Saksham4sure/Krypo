import React from 'react'

const TransactionTable = ({ detail }) => {
    return (
        <div className=''>
            <div className='flex'>
                <p className='border-b border-slate-300 px-2 border-x h-20 lg:h-10 w-16 text-xs flex items-center justify-center font-light'>{detail.id}</p>
                <div className='border-b relative border-slate-300 border-r h-20 lg:h-10 flex flex-col items-center justify-center w-52 font-semibold'>
                    <p className='px-2'>{detail.title}</p>
                    <div className='px-2 absolute bottom-0 border-slate-300 text-xs w-full flex items-center justify-between font-extralight lg:hidden'>
                        <p>{detail.category}</p>
                        <p>{detail.date}</p>
                    </div>
                </div>
                <p className='border-b border-slate-300 border-r px-2 h-20 lg:h-10 lg:flex items-center w-32 font-light hidden'>{detail.category}</p>
                {/* <p className={`${detail.type === "income" ? "text-emerald-600" : "text-red-500"} text-xs border-b border-slate-300 border-r px-2 h-20 lg:h-10 lg:flex items-center w-28 font-light hidden`}>{detail.type} {detail.type === "income" ? "+" : "-"}</p> */}
                <p className={`${detail.type === "income" ? "text-emerald-600" : "text-red-500"} border-b border-slate-300 border-r px-2 h-20 lg:h-10 flex items-center w-32 lg:font-medium`}>{detail.type === "income" ? "+" : "-"}Rs. {detail.amount}</p>
                <p className='border-b border-slate-300 border-r px-2 h-20 lg:h-10 lg:flex items-center w-36 font-light hidden'>{detail.date}</p>
            </div>
        </div>
    )
}

export default TransactionTable