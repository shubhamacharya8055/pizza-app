import { useSelector } from "react-redux"
import Createuser from "../features/user/Createuser"
import { useNavigate } from "react-router-dom"

export default function Home() {

  const navigate = useNavigate();

  const {username} = useSelector(state => state.user)

  return (
    <main
    className="bg-gradient-to-tr from-gray-100 to-yellow-100 h-full w-full relative
    border-t-8 border-white

    "
    >
    <section
    className="flex items-center justify-center w-full h-full"
    >   
    <img src="/fonts/nav.jpg" alt="pizza" className="absolute w-full h-full object-cover object-center opacity-90 " />
    <div className="flex flex-col items-center gap-y-2 relative">
        <p className="text-4xl capitalize font-pizza-extraBold text-shadow-xl text-white w-2/3 text-center">The Amrut's delecious pizza will make you order 3 times <br /><span className="lowercase">a</span> day</p>
        {username ?  <button
        onClick={() => {
          navigate("/menu")
        }}
        className="py-3 border bg-orange-400 rounded-full px-5 text-white">Continue ordering</button> : 
        <Createuser />}
    </div>
    </section>
    </main>
  )
}
