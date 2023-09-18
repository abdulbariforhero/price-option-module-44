import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';

const Navbar = () => {
    const [open, setOpen] = useState(false)


    const routes = [
        { path: '/', name: 'Home', id: 'home', exact: true },
        { path: '/about', name: 'About', id: 'about', exact: true },
        { path: '/contact', name: 'Contact', id: 'contact', exact: true },
        { path: '/products', name: 'Products', id: 'products', exact: false, routes: [
          { path: '/products/:id', name: 'ProductDetail', id: 'product-detail', exact: true },
          { path: '/products/create', name: 'CreateProduct', id: 'create-product', exact: true },
        ]},
        { path: '*', name: 'NotFound', id: 'not-found' },
      ];
      


    return (
        <nav className="bg-yellow-200 text-black p-5">
            <div className="text-xl md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true? 
                    <AiOutlineCloseCircle ></AiOutlineCloseCircle>
                    : <AiOutlineMenu></AiOutlineMenu>                      
                }
               
            </div>
            <ul className={`md:flex duration-1000 
            absolute md:static         
            ${open ? 'top-12' : '-top-60'}
            bg-yellow-200 text-black px-6  shadow-xl`}>
            {
                routes.map((route) => <Link key={route.id} route={route} ></Link>)
            } 
            </ul>           
        </nav>
    );
};

export default Navbar;