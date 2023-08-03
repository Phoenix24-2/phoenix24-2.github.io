import { ReactComponent as IllustrationDesktop } from "../assets/images/illustration-sign-up-desktop.svg";
import { ReactComponent as IllustrationMobile } from "../assets/images/illustration-sign-up-mobile.svg";
import { ReactComponent as IconList } from "../assets/images/icon-list.svg";
import "../Styles.css";
import { Form } from "react-router-dom";

console.log(window.innerWidth);

export default function SignUpPage() {
  // Determines which svg to render based on device viewport width.
  function SVGPicker() {
    if (window.innerWidth < 460) {
      return <IllustrationMobile />;
    } else if (window.innerWidth > 460) {
      return <IllustrationDesktop />;
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className="text">
          <h1>Stay updated!</h1>
          <p>
            Join 60,000+ product managers receiving monthly <br /> updates on :
          </p>
          <div className="list">
            <div className="list-item">
              <span>
                <IconList />
              </span>
              Product discovery and building what matters
            </div>
            <div className="list-item">
              <span>
                <IconList />
              </span>
              Measuring to ensure updates are a success
            </div>
            <div className="list-item">
              <IconList />
              And much more!
            </div>
          </div>
          <div className="subscribe">
            {/* //* Redirect to another component by form's acrtion props and also Route's action props together. */}
            {/* //* Since form's action string is the same as Route's path prop, form is submitted to the same Route . */}
            {/* //* And on the Route element on main.tsx file, use action prop function to specify what happens when form gets submitted. (Refrence : https://reactrouter.com/en/main/route/action) */}
            {/* //* In this case, we used formData method and request to get form data that was sent to action prop of Route.Then we redirected using redirect method. */}
            <Form
              action="/"
              method="post"
              className="subscription-form"
              noValidate // Disable user-agent form validation And let React Hook Form do the validation.
            >
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="email@company.com"
                name="email"
              />

              <span> Valid email required </span>
              <button type="submit">Subscribe to monthly newsletter</button>
            </Form>
          </div>
        </div>
        <div className="picture"> {SVGPicker()} </div>
      </div>
    </>
  );
}
