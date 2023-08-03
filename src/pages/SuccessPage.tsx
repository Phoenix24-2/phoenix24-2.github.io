import { ReactComponent as IconSuccess } from "../assets/images/icon-success.svg";
import { useParams, Link } from "react-router-dom";
import "../Styles.css";

export default function SuccessPage() {
  
  const { email } = useParams();

  return (
    <>
      <div className="success-card">
        <div className="card-content">
          <div className="picture-success">
            <IconSuccess />
          </div>
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <span>{email}</span>. Please
            open it and click the button inside to confirm your subscription.
          </p>
          <Link className="dismiss-btn" to={"/"}>
            Dismiss message
          </Link>
        </div>
      </div>
    </>
  );
}
