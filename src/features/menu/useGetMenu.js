import { useQuery } from "@tanstack/react-query"
import { getMenu } from "../../services/apiRestaurant"

export default function useGetMenu() {

    const {data:menu , isLoading} = useQuery({
        queryFn : getMenu, 
        queryKey : ["menu"]
    })

  return {
    menu , 
    isLoading
  }
}
