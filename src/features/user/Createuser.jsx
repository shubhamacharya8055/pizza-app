import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateUserName } from "./userSlice";
import { useNavigate } from "react-router-dom";

export default function Createuser() {

    const [username, setUsername] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate()


    function handleSubmit (e) {
        e.preventDefault()
        if(!username) return 
        dispatch(updateUserName(username))
        navigate("/menu")
    }



  return (
    <form className="w-full justify-center flex gap-x-2 flex-col gap-y-3 items-center lg:flex-row "
    onSubmit={handleSubmit}
    >
            <input type="text" 
            className="py-3 px-5 rounded-full  placeholder:text-black lg:w-1/3 focus:outline-none w-2/3"
            placeholder="start-ordering"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />

{ username !== "" && <button type="submit" className="px-5 py-3 text-white border bg-yellow-500 rounded-full ">Start Ordering</button>}
    </form>
  )
}
