import {Route, Routes} from "react-router-dom";

import {AuthRequireLayout, MainLayouts} from "./layouts";
import {CarsPage, HomePage, LoginPage, PageNotFound, RegisterPage} from "./pages";
import {RouterEndpoints} from "./routes";
import css from './app.module.css';

function App() {
    return (<div className={css.App}>
        <Routes>
            <Route path={RouterEndpoints.index} element={<MainLayouts/>}>
                <Route path={RouterEndpoints.index} index element={<HomePage/>}/>

                <Route element={<AuthRequireLayout/>}>
                    <Route path={RouterEndpoints.cars} element={<CarsPage/>}/>

                </Route>
                <Route path={RouterEndpoints.login} element={<LoginPage/>}/>
                <Route path={RouterEndpoints.register} element={<RegisterPage/>}/>

                <Route path={RouterEndpoints.notFound} element={<PageNotFound/>}/>

            </Route>
        </Routes>

    </div>);
}

export default App;