import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "./App.css";
import { ReactComponent as IllustrationDesktop } from "./assets/images/illustration-sign-up-desktop.svg";
import { ReactComponent as IconList } from "./assets/images/icon-list.svg";
// import { ReactComponent as IllustrationMobile } from "./assets/images/illustration-sign-up-mobile.svg";
// import { ReactComponent as IconSuccess } from "./assets/images/icon-success.svg";

// *TODO: Design Mobile Version, Add Error UI, Success Page

// React Hook Form

type FormInputs = {
  email: string;
};

export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => console.log(data);

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
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              method="post"
              className="subscription-form"
              noValidate // Disable user-agent form validation And let React Hook Form do the validation.
            >
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="email@company.com"
                {...register("email", {
                  // Add custom Email verification using React Form Hook
                  // Take note of register function and its pattern attribute.
                  pattern: {
                    // Value actually is the Regex used to identify correct email.
                    value:
                      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                    message: "Valid email required",
                  },
                })}
              />

              <span> {errors?.email && errors.email.message} </span>
              <button type="submit">Subscribe to monthly newsletter</button>
            </form>
            <DevTool control={control} />
          </div>
        </div>

        {/* Start of illustratuin Picture Section */}

        <div className="picture">
          <IllustrationDesktop />
        </div>

        {/* End of illustratuin Picture Section */}
      </div>
    </>
  );
}
