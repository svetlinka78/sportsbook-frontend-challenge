
import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Switch, Route, Link } from 'react-router-dom';
import Manager from './Components/Manager'; 
import Error from './Components/Error';
import configuration from './configuration';

const App = () => {
  return (
    <div className="App">
      <div>Task React application</div>
      <Router>
          <Routes>
          <Route path='/' element={<Manager/>} />
          </Routes>
      </Router>
    </div>
  );
}

//         <BrowserRouter>
//           <Routes>
//             {/* <Route path="/" element={
//             //<OidcSecure>
//                 <Error/>
//             //</OidcSecure>
//           } /> */}
//             <Route element={<Error/>} />
//           </Routes>
//       </BrowserRouter>
//   );
// }

export default App;