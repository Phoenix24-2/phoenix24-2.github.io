import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage.tsx";
import SuccessPage from "./pages/SuccessPage";
import "./Styles.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<SignUpPage />}
        // ** This is the action prop, mentioned on SignUpPage.tsx
        action={async ({ params, request }) => {
          const formData = await request.formData(); // Got formData method from here : https://reactrouter.com/en/main/route/action#action
          const email = formData.get("email"); // User Input Email
          const regex =
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
          if (regex.test(email.toString()!)) {
            console.log(params);
            // if user input email validates according to regex, redirect to SuccessPage.tsx
            return redirect(`/success/${email}`);
          } else {
            return null;
          }
        }}
      />
      <Route path="success/:email" element={<SuccessPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
