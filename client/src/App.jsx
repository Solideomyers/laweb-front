import { Outlet, useLocation } from "react-router-dom";
import { Banner, Breadcrumbs, NavBar } from "./components";
import { useGoUp } from "./hooks";
function App() {
  const location = useLocation();
  const goUp = useGoUp();
  // console.log(location);
  return (
    <section>
      <nav className="z-50 sticky top-0 flex flex-col gap-0">
        <Banner />
        <NavBar />
      </nav>
      <main className="grid">
        {location.pathname !== "/" ? <Breadcrumbs /> : null}
        <Outlet />
      </main>
      <footer></footer>
      {goUp}
    </section>
  );
}
export default App;
