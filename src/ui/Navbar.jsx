import { useState } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {

  const {username} = useSelector(state => state.user)

  const [orderId, setOrderId] = useState("")

  const navigate = useNavigate()

  const handleSearchOrder = (e) => {
    e.preventDefault();
    if(!orderId) return 
    navigate(`/order/${orderId}`)
    setOrderId("")
  }

  return (
    <header className=" min-w-[100%] h-24 px-5 lg:px-10 
    bg-gradient-to-tr from-yellow-100 to-orange-200
    border-b border-black/40 rounded-tl-xl rounded-tr-xl
    ">
        <nav className=" h-full 
        flex items-center justify-between
        ">
            <Link to="/">
            <p className="text-xl font-pizza-semibold tracking-widest text-shadow-lg cursor-pointer">THE AMRUT'S</p>
            </Link>
            <form onSubmit={handleSearchOrder}>
                <input type="text"
                placeholder="Search your order"
                className="placeholder:text-base placeholder:font-pizza-regular placeholder:text-black
                focus:outline-none focus:ring focus:ring-black/50 shadow-sm border py-3 rounded-lg px-5 
                "
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
             />
            </form>
            {username && <p className="text-xl tracking-wider font-pizza-semibold text-shadow-xl">{username}</p> }
        </nav>
    </header>
  )
}
