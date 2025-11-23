import BalanceCard from '../Components/BalanceCard'
import StockWidget from '../Components/StockWidget'

const Dashboard = () => {
  return (
    <div className='sm:ml-64 pb-20 sm:pb-0 pt-5 p-5'>
      <div>
        <div className='sticky top-0 pb-2 border-b border-[#E7E6E9]'>
          <h1 className='text-3xl font-semibold'>Welcome back!</h1>
          <p className='text-sm font-light'>This is your financial overview</p>
        </div>
        <div className='flex gap-4 pt-8 sm:pt-5 p-5 flex-wrap'>
          <BalanceCard title="Total Balance" amount="1,02,200.75" subText="+ Rs. 14,200" />
          <BalanceCard title="Income" amount="37,500" subText="+ 12%" />
          <BalanceCard title="Savings" amount="9,010" subText="+ 4%" />
          <BalanceCard title="Expenses" amount="18,030" subText="- 8%" />
        </div>
        <div className='p-5'>
          <StockWidget />
        </div>
      </div>
    </div>
  )
}

export default Dashboard