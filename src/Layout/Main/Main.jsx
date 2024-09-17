import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";



const Main = () => {
     return (
          <div className="container mx-auto">
               <Nav></Nav>
               <Outlet></Outlet>
          </div>
     );
};

export default Main;