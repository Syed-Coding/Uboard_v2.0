import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { errorNotification } from "../userNotifications/userNotifications";

function UserSignupForm({
  setSignUpdata,
  setHideloginform,
  setUserSignupStatus,
}) {
  const [inputchange, setINputChange] = useState({
    user_name: "",
    pass_word: "",
    secret_id: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputchange.pass_word === inputchange.secret_id) {
      setSignUpdata((prev) => {
        return [...prev, inputchange];
      });
      setINputChange({
        user_name: "",
        pass_word: "",
        secret_id: "",
      });
      setHideloginform(true);
      setUserSignupStatus(false);
    } else {
      return errorNotification("PASSWORD DIDNOT MATCH, PLEASE TRY AGAIN");
    }
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setINputChange((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <div className="login-box">
        <h2>U- BOARD SIGN UP FORM</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              minLength={1}
              maxLength={11}
              name="user_name"
              value={inputchange.user_name}
              required
              onChange={handleInput}
            />
            <label>First name</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              minLength={1}
              maxLength={11}
              value={inputchange.pass_word}
              name="pass_word"
              required
              onChange={handleInput}
            />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              minLength={1}
              maxLength={11}
              value={inputchange.secret_id}
              name="secret_id"
              required
              onChange={handleInput}
            />
            <label>Confirm Password</label>
          </div>
          <button type="submit" className="signupSubmit">
            Sign Up
          </button>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default UserSignupForm;
