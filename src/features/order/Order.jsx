import OrderForm from "./OrderForm";


export default function Order() {



  return (
    <section className="h-full lg:w-2/3 mx-auto px-5 py-10 ">
        <div className="py-5 flex flex-col gap-y-8">
            <p className="tracking-widest text-2xl font-pizza-semibold">Ready to order? Lets go!</p>

            <OrderForm />
        </div>
    </section>
  )
}
