import Home from "./page/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./page/login/Login";
import Singal from "./page/singal/Singal";
import List from "./page/list/List";
import New from "./page/new/New";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userid" element={<Singal />} />
          <Route path="new" element={<New/>} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
