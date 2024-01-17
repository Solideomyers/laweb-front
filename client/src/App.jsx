import { Outlet, useLocation } from "react-router-dom";
import { Banner, Breadcrumbs, Footer, NavBar } from "./components";
import { useFloatBtn } from "./hooks";
import { CaretCircleDoubleUp } from 'phosphor-react'
import { createContext } from "react";
import { ProductProvider } from "./context/ProductContext";
export const contextStorage = createContext()
function App() {
  const location = useLocation();
  const goUp = useFloatBtn({icon: <CaretCircleDoubleUp size={25}/>, variant:"scroll", contenedor: false})
  
  return (
    <ProductProvider>

    <section>
      <nav className='z-50 sticky top-0 flex flex-col gap-0'>
        <Banner />
        <NavBar />
      </nav>
      <main className="grid grid-cols-1 mx-auto px-2">
        {location.pathname !== '/' ? <Breadcrumbs /> : null}
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      {goUp}
    </section>
    </ProductProvider>
  )
}
export default App;
