import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import 'sweetalert2/src/sweetalert2.scss'
import Contact from "./routes/contact";
import Root from "./routes/root";
import EditContact from "./routes/edit";
import Loader from "./Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: Loader,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
  //   {
  //   path: "/contacts/:contactId",
  //   element: <Contact />,
  // },
]);

export default router;
