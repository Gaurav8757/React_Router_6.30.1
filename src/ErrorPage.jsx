import { useRouteError } from "react-router-dom";
// React Router DOM's useRouteError hook is used to access the error object
// that was thrown during the routing process. This hook is typically used
// in error boundary components to display error messages or perform
// error handling logic.
// This file defines a custom error page component that will be displayed
// whenever an error occurs in the routing process. It uses the
// useRouteError hook to retrieve the error information and display it.
export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>{error.status} {error.statusText}</p>
            <p>
                <i>{error.data}</i>
            </p>
        </div>
    );
}
