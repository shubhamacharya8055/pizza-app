import { useNavigate, useRouteError } from "react-router-dom"

function Error() {

    const error = useRouteError();
    console.log(error)
    const navigate = useNavigate();


  return (
    <div className="flex justify-center items-center h-[100vh] w-full">
        <div className="w-1/3 p-4 shadow-md rounded-lg border flex flex-col items-center justify-center gap-y-3">
        <p className="text-2xl text-red-400 font-pizza-extraBold">Something went wrong</p>
        <p className="text-red-700">{error.data || error.message}</p>
        <button className="border px-5 py-2 rounded-md bg-orange-400 text-white font-pizza-semibold"
        onClick={() => navigate(-1)}
        >Try again</button>
        </div>
    </div>
  )
}

export default Error