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
              maxLength={15}
              name="user_name"
              value={inputchange.user_name}
              required
              onChange={handleInput}
            />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              minLength={1}
              maxLength={20}
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
              maxLength={20}
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

// const name = "";
// const name2 = "  ";
// if (name) {
//   console.log("i am empty string"); //false
// }
// if (name2) {
//   console.log("i am not empy string , iam white space"); // true
// }
// if (!name2.trim()) {
//   console.log("hiiii"); // true. here remove white space
// }
//The trim() method removes whitespace from both sides of a string.
// console.log({name : "Welcome to Programiz!     z".trim()});
// console.log({name : "   Welcome to Programiz!     z   ".trim()});
// console.log({name : "Welcome to Programiz!     ".trim()});
// console.log({name : "                   "});
// console.log({name : "                  ".trim()});
