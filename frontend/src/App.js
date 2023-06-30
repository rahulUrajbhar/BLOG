import Topbar from "./topbar/Topbar";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Posts from "./posts/Posts";

function App() {
  const user = false;
  const posts = [];
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/register" element={user ? <Home/>:<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/write" element={user ? <Write />:<Register />}></Route>
        <Route path="/setting" element={user ? <Setting />:<Register />}></Route>
        <Route path="/post/:postId" element={<Posts posts={posts} />}></Route>
      </Routes>
      <Topbar />
    </BrowserRouter>
  );
}

export default App;
