// import React from "react";
import PropTypes from "prop-types";

import { Button } from "./Button";
import { Tree } from "../stories/3ripple/Menu";
import "./header.css";

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="storybook-header">
      <Tree
        logoSrc="src/assets/Logo3.png"
        logoAlt="Logo Alt Text"
        links={[
          { href: "#home", text: "Home" },
          { href: "#about", text: "About" },
          { href: "#services", text: "Services" },
          { href: "#contact", text: "Contact" },
        ]}
      />
      {/* <div> */}
      {/* <svg
          width="42"
          height="42"
          viewBox="0 0 75 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50.0715 24.9989C50.0715 25.5947 50.0517 26.1746 50.01 26.7526C49.9921 27.0307 49.9683 27.3067 49.9405 27.5808C49.9405 27.6106 49.9405 27.6384 49.9405 27.6662C49.5066 31.6655 48.1172 35.5018 45.8894 38.8513C43.6615 42.2008 40.6607 44.9653 37.1401 46.9115L37.1043 46.9333C33.175 44.7749 29.8977 41.6006 27.615 37.7422C25.3322 33.8838 24.1279 29.483 24.1279 24.9999C24.1279 20.5168 25.3322 16.116 27.615 12.2576C29.8977 8.39918 33.175 5.22484 37.1043 3.06641L37.1401 3.08627C40.6678 5.0367 43.6735 7.80873 45.9024 11.1675C48.1313 14.5263 49.5178 18.3728 49.9444 22.3812C49.9722 22.6672 49.9981 22.9552 50.0179 23.2452C50.0497 23.833 50.0715 24.409 50.0715 24.9989Z"
            fill="blue"
          />
          <path
            d="M49.0778 0.0478525C45.943 0.046977 42.836 0.637229 39.9199 1.78767C41.5886 2.8593 43.1368 4.10784 44.5376 5.51161C45.2303 6.20482 45.8859 6.93407 46.5018 7.69631C48.9981 7.3124 51.5478 7.47279 53.9762 8.16648C56.4046 8.86018 58.6543 10.0708 60.5711 11.7153C62.4879 13.3598 64.0264 15.3993 65.0812 17.6941C66.136 19.9889 66.6821 22.4846 66.6821 25.0101C66.6821 27.5357 66.136 30.0314 65.0812 32.3261C64.0264 34.6209 62.4879 36.6604 60.5711 38.3049C58.6543 39.9495 56.4046 41.1601 53.9762 41.8537C51.5478 42.5474 48.9981 42.7078 46.5018 42.3239C45.8854 43.0857 45.2298 43.815 44.5376 44.5086C43.136 45.9069 41.5879 47.1501 39.9199 48.2167C43.3359 49.5646 47.0073 50.142 50.6721 49.9076C54.337 49.6733 57.9049 48.633 61.1214 46.861C64.3379 45.089 67.1237 42.6289 69.28 39.6563C71.4363 36.6837 72.9099 33.2719 73.5958 29.6642C74.2817 26.0565 74.1629 22.3419 73.248 18.7854C72.333 15.2289 70.6444 11.9182 68.3026 9.08941C65.9608 6.26065 63.0235 3.98359 59.7004 2.4207C56.3772 0.857798 52.7501 0.0475813 49.0778 0.0478525Z"
            fill="blue"
          />
          <path
            d="M23.5472 14.7944C23.1808 15.7073 22.8645 16.6395 22.5998 17.5869C21.9869 17.3134 21.3901 17.005 20.8123 16.6634C16.3357 13.9901 10.9931 12.9315 5.36248 13.5988C4.3317 13.7219 3.37638 13.8927 2.52832 14.0794C3.16539 12.7732 3.91429 11.5246 4.76665 10.3476C5.08046 10.2999 5.40618 10.2562 5.73984 10.2185C10.854 9.62661 15.4916 10.5462 19.5174 12.9494C20.7925 13.7035 22.1432 14.3219 23.5472 14.7944Z"
            fill="blue"
          />
          <path
            d="M26.258 9.6625C25.6517 10.5645 25.0993 11.5016 24.6036 12.4689C23.2816 12.046 22.0112 11.4764 20.8161 10.7707C16.8061 8.38147 12.115 7.28315 7.12988 7.5473C8.32082 6.33191 9.63095 5.23936 11.0405 4.28613C14.036 4.57931 16.9301 5.52864 19.5172 7.06667C21.6109 8.28676 23.8867 9.16317 26.258 9.6625Z"
            fill="blue"
          />
          <path
            d="M23.1561 50.0001C18.628 49.6641 14.2783 48.0953 10.5781 45.4639H10.6139C13.7596 45.709 16.8064 46.6761 19.5175 48.2901C20.6364 48.9543 21.8154 49.5116 23.0389 49.9544C23.0766 49.9723 23.1164 49.9862 23.1561 50.0001Z"
            fill="blue"
          />
          <path
            d="M34.3774 48.2325C33.5834 48.5523 32.7733 48.8307 31.9504 49.0667C28.1291 48.8879 24.1411 48.0975 20.8163 46.1153C16.9097 43.7857 12.3476 42.6814 7.50949 42.882H7.49161C6.51906 41.9265 5.62569 40.8937 4.82031 39.7936H4.83223C5.12617 39.7479 5.42806 39.7082 5.74186 39.6705C10.8501 39.0746 15.4837 40.0002 19.5135 42.4033C22.6416 44.2703 26.4648 45.3626 30.9554 45.6744C32.0271 46.6156 33.1714 47.471 34.3774 48.2325Z"
            fill="blue"
          />
          <path
            d="M30.8421 4.431C30.431 4.79445 30.0298 5.1738 29.6504 5.56307C29.0546 6.1589 28.4985 6.76665 27.9662 7.40419C25.4578 6.96327 23.001 6.17678 20.8262 4.88184C18.8677 3.7168 16.7454 2.85248 14.5303 2.31779C15.9163 1.6727 17.359 1.15743 18.8401 0.778564C19.0685 0.901702 19.2989 1.03278 19.5273 1.17578C22.6177 3.01888 26.4151 4.10726 30.8421 4.431Z"
            fill="blue"
          />
          <path
            d="M22.0219 20.1052C21.8484 21.0698 21.7278 22.0431 21.6604 23.0208C21.3744 22.8739 21.0931 22.7183 20.8163 22.5541C16.3357 19.8808 10.9931 18.8222 5.36251 19.4915C3.68472 19.6894 2.02735 20.0329 0.40918 20.5184C0.627215 19.3266 0.931896 18.1524 1.3208 17.0049C2.76786 16.5815 4.24815 16.2812 5.74582 16.1072C10.8541 15.5114 15.4876 16.4369 19.5174 18.8401C20.3222 19.3189 21.159 19.7416 22.0219 20.1052Z"
            fill="blue"
          />
          <path
            d="M34.7758 1.97421C34.5315 1.97421 34.2852 1.98414 34.037 1.98414C30.4004 2.00996 26.462 1.55316 22.9863 0.0834469C23.6642 0.0278362 24.3475 3.08266e-05 25.036 3.08266e-05C28.2221 -0.00498372 31.3796 0.601831 34.3369 1.78752C34.4838 1.85107 34.6288 1.91066 34.7758 1.97421Z"
            fill="blue"
          />
          <path
            d="M21.8805 29.0248C21.5191 28.8461 21.1642 28.6521 20.816 28.4429C16.3354 25.7716 10.9928 24.711 5.36217 25.3803C3.55862 25.596 1.77882 25.9777 0.0453835 26.5204C0.0453835 26.4429 0.0453835 26.3654 0.0453835 26.288C0.0453835 26.2105 0.035453 26.1172 0.0314808 26.0318C0.0314808 25.8808 0.0314808 25.7279 0.0175781 25.573C0.0175781 25.4896 0.0175781 25.4062 0.0175781 25.3227C0.0175781 25.2393 0.0175781 25.1082 0.0175781 24.999C0.0175781 24.8898 0.0175781 24.7329 0.0175781 24.6018C0.0255225 24.1648 0.0440594 23.7319 0.0731888 23.3029C1.9145 22.6594 3.82159 22.2224 5.75939 22C10.8676 21.4042 15.5012 22.3277 19.531 24.7329C20.1991 25.135 20.8901 25.4978 21.6005 25.8193C21.6321 26.8923 21.7256 27.9626 21.8805 29.0248Z"
            fill="blue"
          />
          <path
            d="M23.765 35.7379C22.7413 35.3602 21.7541 34.8902 20.8156 34.3337C16.335 31.6624 10.9924 30.6018 5.36177 31.2711C3.89808 31.4463 2.4495 31.7304 1.02811 32.1212C0.733819 31.1284 0.502312 30.1182 0.334961 29.0963C3.36376 28.0715 11.7252 25.9722 19.5187 30.6217C20.4752 31.1896 21.4762 31.6791 22.5117 32.0854C22.8406 33.3176 23.2547 34.5254 23.751 35.7001C23.7565 35.7124 23.7611 35.725 23.765 35.7379Z"
            fill="blue"
          />
          <path
            d="M28.1026 42.7706C25.5405 42.3376 23.0301 41.5451 20.8156 40.2244C16.3349 37.5531 10.9923 36.4925 5.36174 37.1618C4.64277 37.2472 3.95956 37.3604 3.32599 37.4776C2.77374 36.5263 2.28605 35.539 1.86621 34.5223C3.13668 34.1811 4.43045 33.9335 5.73711 33.7815C10.8454 33.1857 15.4789 34.1092 19.5087 36.5144C21.3309 37.5815 23.2956 38.384 25.3439 38.8977C26.1496 40.2661 27.0726 41.5619 28.1026 42.7706Z"
            fill="blue"
          />
        </svg> */}

      {/* <h1>3ripple</h1> */}
      {/* </div> */}
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            {/* <Button
              primary
              size="small"
              onClick={onCreateAccount}
              label="Sign up"
            /> */}
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
