import { RouterProvider } from "react-router";
import AppLayout from "./ui/AppLayout";
import { createBrowserRouter } from "react-router-dom";
import Error from "./ui/Error";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import OrderStatus from "./features/order/OrderStatus";


const queryClient = new QueryClient({
  defaultOptions : {
    queries : {
      staleTime : 0
    }
  }
})

const router = createBrowserRouter([
  {
    element : <AppLayout /> , 
    errorElement : <Error /> , 
    children : [
      {
        path:  "/" , 
        element : <Home />
      } , 
      {
        path : "/menu" , 
        element : <Menu />
      },
      {
        path : "/cart" , 
        element : <Cart />
      },
      {
        path: "/order/new" , 
        element: <Order />
      },
      {
        path: "/order/:id" , 
        element : <OrderStatus />
      }
    ]
  }
])

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
    ) 
}
