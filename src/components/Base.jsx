import { Outlet } from 'react-router-dom';
import Footer from './Footer';
// import Navbar from './Navbar';


const Base = () => {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    );
};

export default Base;
