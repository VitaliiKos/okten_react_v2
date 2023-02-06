import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./Layout";
import {AnimalsPage, HomePage, PostsPage} from "./pages";
import css from './App.css';

function App() {
    return (
        <div className={css.App}>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'animals'} element={<AnimalsPage/>}/>
                </Route>
            </Routes>
        </div>
    )
        ;
}

export default App;
