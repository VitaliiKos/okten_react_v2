import {Route, Routes} from "react-router-dom";

import './App.css';
import {CarPage, HomePage, UserPage} from "./pages";
import {MainLayout} from "./layouts/mainLayout";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/users'} element={<UserPage/>}/>
                    <Route path={'/cars'} element={<CarPage/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
