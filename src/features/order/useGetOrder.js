import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../../services/apiRestaurant";

export default function useGetOrder(id) {
    
    const {data: Order , isLoading: isGetting , error} = useQuery({
        queryFn : () => getOrder(id) , 
        queryKey : ["order"]
    })

    return {
        Order , 
        isGetting , 
        error
    }
}
