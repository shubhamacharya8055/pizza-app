import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createOrder } from "../../services/apiRestaurant"

export default function useCreateOrder() {

    const queryClient = useQueryClient()

    const {mutate: createOrderApi , isLoading: isCreating} = useMutation({
        mutationFn : createOrder , 
        onSuccess : (data) => {
            console.log("Order created Successfully") , 
            queryClient.invalidateQueries({
                queryKey : ["order"]
            })
        },
        onError:  (err)=> {
            console.log(err)
        }
    })

  return {
    createOrderApi , 
    isCreating
  }
}
