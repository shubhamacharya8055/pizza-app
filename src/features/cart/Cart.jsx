import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { clearCart } from "./cartSlice";

export default function Cart() {
  const dispatch = useDispatch()
  const { username } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);

  function ClearCart () {
    dispatch(clearCart())
  }

  return (
    <section className="h-full w-2/3 mx-auto px-5">
      <div className="h-full w-full py-5 flex flex-col gap-y-3">
        {username ? (
            <Link className="text-blue-600 hover:underline tracking-widest italic" to="/menu">
            &larr; back to menu
          </Link>
        ) : (
            <Link className="text-blue-600 hover:underline tracking-widest italic" to="/">
          &larr; back to menu
        </Link>
        ) }
        

        {cart.length ? (
          <>
            <p className="text-lg tracking-wider">
              Your cart , {" "}
              <span className="text-2xl font-pizza-extraBold">
                {username}
              </span>
            </p>

            <div className="divide-y divide-black/40 w-full">
              {cart.map((item) => (
                <CartItem item={item} key={item.pizzaId} />
              ))}
            </div>

            <div className="flex gap-x-3 w-full">
                <Link to="/order/new">
                <button className="bg-yellow-300 block px-5 py-3 rounded-full tracking-widest uppercase text-sm">order pizzas</button>
                </Link>
                <button className="bg-slate-100/25 border border-black/50 block px-5 py-3 rounded-full tracking-widest uppercase text-sm hover:bg-slate-50"
                onClick={ClearCart}
                >clear cart</button>
            </div>
          </>
        ) : (
          <p className="italic tracking-widest">
            Your Cart is Empty <span className="text-xl font-pizza-semibold">{username ? username : ""}</span>. Start adding some
            pizzas
          </p>
        )}
      </div>
    </section>
  );
}
