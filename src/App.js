import React from 'react';
import RouterPage from './page/RouterPage';
import Navbar from './element/Navbar';
import HeaderPage from './element/HeaderPage';
function App() {
 
    return (
    
         <React.Fragment>
        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
        data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
                <HeaderPage />
                <Navbar />
                <RouterPage />
        </div>
         </React.Fragment>
    )
}
export default App;
