import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import EcomrceApp from './E-commerce app/EcomrceApp';
import FakeProducts from './FakeProducts/MainFile';
import MainFile from './FilterTableData/MainFile';
import store from './E-commerce app/Redux_Concept/Store';
import { Provider } from 'react-redux';
const App = () => {  

    return (
     <>
         {/* <MainFile/> */}

         {/* <FakeProducts/> */}
      <BrowserRouter>
        <Provider store={store}>
         <EcomrceApp/>
        </Provider>
      </BrowserRouter>
     
     </>
    );
}
 
export default App;