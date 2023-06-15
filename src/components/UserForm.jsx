import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { errorNotification } from "../userNotifications/userNotifications";
import { handleUser } from "../handlers/handleUser";

const PreUserForm = ({
  SetUserFom,
  SetUserLogin,
  setHideloginform,
  userSignUPData,
  setUserSignupStatus,
}) => {
  const [loginName, setLoginName] = useState({
    name: "",
    password: "",
  });

  const handelUserInput = (e) => {
    const { name, value } = e.target;
    setLoginName((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const loginValue = userSignUPData.filter(
      (ele) =>
        ele.user_name.toLowerCase() === loginName.name.toLowerCase() &&
        ele.pass_word === loginName.password
    );
    const UserFirstName = loginValue[0]?.user_name;

    if (!loginValue[0])
      return errorNotification(
        "SORRY YOU ARE NOT AUTHRIZED TO LOGIN. CONTACT ADMIN"
      );

    SetUserFom(true);
    SetUserLogin(UserFirstName);
    setLoginName("");
    setHideloginform(false);
  };
  return (
    <>
      <div className="main">
        <p className="sign" align="center">
          <span style={{ color: "red" }}>U- BOARD</span>{" "}
          <span style={{ color: "#a52aba" }}>LOGIN</span>
        </p>
        <form className="form1" onSubmit={handleLogin}>
          <input
            className="un "
            type="text"
            align="center"
            placeholder="Username"
            name="name"
            value={loginName.name}
            required
            onChange={handelUserInput}
            autoFocus
          />
          <input
            className="pass"
            placeholder="Password"
            name="password"
            type="password"
            value={loginName.password}
            align="center"
            onChange={handelUserInput}
            required
          />
          <input
            className="pass"
            placeholder="Password Will Show Here"
            name="password"
            type="text"
            defaultValue={loginName.password}
            align="center"
            disabled
            style={{ borderRadius: "1px", border: "1px solid black" }}
          />
          <button type="submit" className="submit" align="center">
            LOGIN
          </button>
        </form>
        <button
          className="newUserbtn"
          onClick={() => handleUser(setHideloginform, setUserSignupStatus)}
        >
          New User
        </button>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default PreUserForm;
