import {
  createBrowserRouter,
} from "react-router-dom";
import './App.css'
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

export default router;
