import BalanceCard from '../Components/BalanceCard'
import MoneyBalance from '../Components/MoneyBalance'
import StockWidget from '../Components/StockWidget'

const Dashboard = () => {
  return (
    <div className='sm:ml-64 pb-20 sm:pb-0 pt-5 p-5 overflow-x-hidden'>
      <div className='pt-10'>
        <div className='w-full h-px my-4 bg-[#d4d4d4]'></div>
        <MoneyBalance />
        <div className='w-full h-px my-4 bg-[#d4d4d4]'></div>
        <div className='px-2'>
          <h1 className='text-2xl'>Finances</h1>
          <div className='flex gap-4 p-5 overflow-x-scroll md:overflow-auto'>
            <BalanceCard title="Income" amount="37,500" subText="+ 12%" />
            <BalanceCard title="Savings" amount="9,010" subText="+ 4%" />
            <BalanceCard title="Expenses" amount="18,030" subText="- 8%" />
          </div>
        </div>
        <div className='w-full h-px my-4 bg-[#d4d4d4]'></div>
        <div className='px-2'>
          <h1 className='text-2xl'>Stocks</h1>
          <div className='p-5'>
            <StockWidget />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard