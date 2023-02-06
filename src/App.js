import {Route, Routes} from "react-router-dom";

import {CarPage, HomePage, UserPage} from "./pages";
import {MainLayout} from "./layouts/mainLayout";
import css from './app.module.css'

function App() {
    return (
        <div className={css.App}>
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
