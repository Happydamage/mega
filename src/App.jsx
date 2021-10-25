import './App.scss';
import Header from "./blocks/Header/Header";
import Sidebar from "./blocks/Sidebar/Sidebar";
import Buttons from "./blocks/Buttons/Buttons";
import {BrowserRouter, Route} from "react-router-dom";
import Cards from "./blocks/Content-cards/Cards";

const App = () => {
  return (
      <BrowserRouter>
        <div className="App">
            {/*<Header />*/}
            <div className="wrapper">
                <div className="Content">
                    <Sidebar />
                    {/*<Route path='/slider' component={Sidebar} />*/}
                    {/*<Route path='/burger' component={Burger} />*/}
                    <Route path='/button' component={Buttons} />
                    {/*<Route path='/animation' component={Animation} />*/}
                    <Route path='/cards' component={Cards} />
                </div>
            </div>
            {/*<div className="footer">*/}

            {/*</div>*/}
        </div>
      </BrowserRouter>
  );
}

export default App;
