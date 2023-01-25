import {Route, Routes} from "react-router-dom";

import {AlbumsPage, CommentsPage, HomePage, NotFoundPage, PostsPage, TodosPage} from "./pages";
import {MainLayout} from "./layouts/MainLayout/MainLayout";
import './App.css';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path={':id/posts/:postId'} element={<PostsPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
