import { Outlet } from "react-router-dom";
function App() {
  console.log("Hola mundo");
  return (
    <>
      <Outlet />
    </>
  );
}
export default App;
