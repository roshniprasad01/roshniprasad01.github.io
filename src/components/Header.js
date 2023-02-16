import { Link } from 'react-router-dom';
import '../css/Header.css';


const Header = () => {
    return (
    <div className='Header_Links'>
          <Link className='Header_Link' to="/"><button className='b1'>Home</button></Link>
          <Link className='Header_Link' to="/about"><button className='b1'>About</button></Link>
          <Link className='Header_Link' to="/Projects"><button className='b1'>Projects</button></Link>
          <Link className='Header_Link' to="/Articles"><button className='b1'>Articles</button></Link>          

    </div>
    );
  }

  export default Header;