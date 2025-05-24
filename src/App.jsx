import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./ErrorPage";
import 'sweetalert2/src/sweetalert2.scss'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
