import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import Navbar from "./Components/Navbar"
import Account from "./Pages/Account"
import Goals from "./Pages/Goals"
import Transactions from "./Pages/Transactions"
import Wallets from "./Pages/Wallets"
import Topbar from "./Components/Topbar"


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Topbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/wallet" element={<Wallets />} />
          <Route path="/account" element={<Account />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
