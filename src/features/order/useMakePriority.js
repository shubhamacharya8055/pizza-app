import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrder } from "../../services/apiRestaurant";

export default function useMakePriority() {

    const queryClient = useQueryClient()
    
    const {mutate: MakePriority , isLoading:isMaking} = useMutation({
        mutationFn : updateOrder ,
        onSuccess:  () => {
            console.log("order updated successfully");
            queryClient.invalidateQueries({
                queryKey : ["order" ]
            })
        },
        onError: (error) => {
            console.log(error)
        }
    })

    return {
        MakePriority , 
        isMaking
    }
    
}
