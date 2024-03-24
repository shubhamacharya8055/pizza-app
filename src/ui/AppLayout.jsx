import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";

export default function AppLayout() {
  return (
    <section className="h-screen w-full grid grid-rows-[auto_1fr_auto]">
        <Navbar />
        <main className="h-full w-full overflow-scroll no-scrollbar">
        <Outlet />
        </main>
        <Footer />
    </section>
  )
}
