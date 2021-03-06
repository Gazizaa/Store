import React, {useState, useEffect, useRef} from 'react'
import {getCategories} from '../../store/actions/categoryActions'
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

library.add(faBars, faTimes)

function Header() {
    const [menu, setMenu] = useState(false);
    const [btnVisible, setBtnVisible] = useState(false);
    const subMenuRef = useRef();
   
    const handleClick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if(!path.includes(subMenuRef.current)) {
            setMenu(false)
        }
    }

    const toggleNav = () => {
        setBtnVisible(!btnVisible)
    };

    useEffect(()=> {
         document.body.addEventListener('click', handleClick); 
    }, [])
   
    return (
        <div>
            <div className="header">
                <nav className={`${btnVisible && "showHeight"}`}>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li onClick={() => setMenu(!menu)} className='subMenuClick' ref={subMenuRef}>Category</li>
                           { menu && <div className='submenu'>
                                <ul>
                                    <li><Link to='/all-products'>All Products</Link></li>
                                    <li>Furniture</li>
                                    <li>Modern</li>
                                    <li>Products</li>
                                </ul>
                            </div> }
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/basket'>Cart</Link></li>
                        <li>Checkout</li>
                        <li>My Account</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                 <button className='burger-btn' onClick={toggleNav}>
                    <FontAwesomeIcon icon={ btnVisible ? ['fas', 'times'] : ['fas', 'bars'] } />
                </button>
            </div>
            <div className="logo">
                <Link to='/' ><img src='https://dessign.net/virtualstore/wp-content/themes/VirtualStoreWooResOrg/images/logo.png' alt='logo' /></Link>
            </div>
        </div>
    )
}
const mapStateToProps=(state)=> ({
    categoriesReducer: state.categoriesReducer
})

export default connect(mapStateToProps, {getCategories})(withRouter(Header))


