import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./Layout";
import {AnimalsPage, CommentsPage, HomePage, PostDetailPage, PostsPage} from "./pages";
import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':postId'} element={<PostDetailPage/>}>
                            <Route path={'comment'} element={<CommentsPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'animals'} element={<AnimalsPage/>}/>

                </Route>
            </Routes>
        </div>
    )
        ;
}

export default App;
