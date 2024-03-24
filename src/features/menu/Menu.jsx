import { useEffect } from "react"
import MenuItem from "./MenuItem"
import useGetMenu from "./useGetMenu"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import PizzaLoader from "../../ui/PizzaLoader"

function Menu() {

    const {menu , isLoading} = useGetMenu()

    const {username} = useSelector(state => state.user)
    const navigate = useNavigate()
    useEffect(() => {
        if(!username) navigate("/")
    } , [username])


    if(isLoading) return <PizzaLoader />

  return (
    <section className="h-full w-2/3 mx-auto px-5">
        <div className="flex flex-col divide-y divide-black">
            {menu?.map((item , index) => (
              <MenuItem item={item} key={index} />
            ))}
        </div>
    </section>
  )
}

export default Menu