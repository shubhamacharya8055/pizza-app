import { useSelector } from "react-redux"
import Createuser from "../features/user/Createuser"
import { useNavigate } from "react-router-dom"

export default function Home() {

  const navigate = useNavigate();

  const {username} = useSelector(state => state.user)

  return (
    <main
    className="bg-gradient-to-tr from-gray-100 to-yellow-100 h-full w-full"
    >
    <section
    className="flex items-center justify-center w-full h-full"
    >   
    <div className="flex flex-col items-center gap-y-2">
        <p className="text-4xl capitalize font-pizza-extraBold bg-gradient-to-tr from-red-600 to-purple-700 text-transparent bg-clip-text text-shadow-sm">The Amrut's delecious pizza will make you order 3 times a day</p>
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
