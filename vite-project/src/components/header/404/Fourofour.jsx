import Header from "../Header";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "../../Footer";
const Fourofour = () => {
    return (
      <>
        <Header></Header>
        <Breadcrumbs></Breadcrumbs>
        <div className="box w-full h-screen flex bg-slate-400 justify-center align-middle items-center">
          <h1 className="text-7xl">404 NOT FOUND</h1>

        </div>
        {/* <Footer></Footer> */}

      
      </>
      
      );
}
 
export default Fourofour;