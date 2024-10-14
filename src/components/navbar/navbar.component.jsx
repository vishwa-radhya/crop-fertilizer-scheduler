import './navbar.styles.scss';
import { Outlet } from 'react-router-dom';
import { SiHomeassistant } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
const NavBar = ()=>{
   const navigateRouter = useNavigate();
 return(
    <>
    <nav onClick={()=>navigateRouter('/')}><SiHomeassistant/></nav>
    <Outlet/>
    </>
 )   
}
export default NavBar