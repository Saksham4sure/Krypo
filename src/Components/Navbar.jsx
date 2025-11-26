import { navItems } from '../Index'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <aside className="fixed w-screen sm:h-screen sm:w-60 bottom-0 sm:top-0 border-[#E7E6E9] border-2 flex flex-col gap-8 px-0 sm:px-5 py-5 z-50 bg-[#EEEEEE]">
      <div className='hidden sm:flex'>
        <h1 className="text-4xl font-semibold cursor-default">Kry<span className="text-[#00ADB5]">Po.</span></h1>
      </div>
      <div className="flex flex-row sm:flex-col justify-around sm:gap-4">
        {navItems.map((items) => (
          <Link to={items.Link} className='flex gap-4 items-center ' key={items.Link}>
            <i className={`${items.icon} text-3xl sm:text-xl`}></i>
            <h1 className='hidden sm:flex text-sm text-center font-light'>{items.name}</h1>
          </Link>
        ))}
      </div>
    </aside>
  )
}

export default Navbar