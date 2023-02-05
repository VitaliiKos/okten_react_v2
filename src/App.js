import './App.css';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/homePage/homePage";
import {CarPage, UserPage} from "./pages";
import {MainLayout} from "./layouts/mainLayout";

function App() {
  return (
    <div className="App">
        <h3>layout</h3>
        <Routes>
            <Route path={'/'} element={<MainLayout/>} >
                <Route index element={<HomePage/>}/>
                <Route path={'/users'} element={<UserPage/>}/>
                <Route path={'/cars'} element={<CarPage/>}/>
            </Route>
        </Routes>

    </div>
  );
}

export default App;
