import {Route, Routes} from "react-router-dom";

import {MainLayouts} from "./layouts";
import {CarsPage, HomePage, PageNotFound, PostsPage, UsersPage} from "./pages";
import {RouterEndpoints} from "./routes";
import {PostDetail, UserDetail} from "./components";
import css from './app.module.css';

function App() {
    return (
        <div className={css.App}>
            <Routes>
                <Route path={RouterEndpoints.index} element={<MainLayouts/>}>
                    <Route path={RouterEndpoints.index} index element={<HomePage/>}/>
                    <Route path={RouterEndpoints.users} element={<UsersPage/>}>
                        <Route path={RouterEndpoints.userId} element={<UserDetail/>}/>
                    </Route>

                    <Route path={RouterEndpoints.posts} element={<PostsPage/>}>
                        <Route path={RouterEndpoints.postId} element={<PostDetail/>}/>
                    </Route>
                    <Route path={RouterEndpoints.cars} element={<CarsPage/>}/>

                    <Route path={RouterEndpoints.notFound} element={<PageNotFound/>}/>

                </Route>
            </Routes>

        </div>
    );
}

export default App;
