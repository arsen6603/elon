import React from 'react';
import HeaderComponent from "../../HeaderComponents";

const Layout = ({children}) => {
    return (
        <div className='Layout'>
            <HeaderComponent/>
            {children}
        </div>
    );
};

export default Layout;