import "./App.css";
import { ReactComponent as IllustrationDesktop } from "./assets/images/illustration-sign-up-desktop.svg";
import { ReactComponent as IconList } from "./assets/images/icon-list.svg";
// import { ReactComponent as IllustrationMobile } from "./assets/images/illustration-sign-up-mobile.svg";
// import { ReactComponent as IconSuccess } from "./assets/images/icon-success.svg";

function App() {
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
            <form action="" method="post" className="subscription-form">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@company.com"
                required
              />
              <span></span>
              <button type="submit">Subscribe to monthly newsletter</button>
            </form>
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

export default App;
