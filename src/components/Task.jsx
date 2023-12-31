import React, { useState, useEffect, useMemo } from "react";
import { OngoingTask } from "./OngoingTask";
import { DeletedTask } from "./DeletedTask";
import { useRef } from "react";
import { FaUserAlt } from "react-icons/fa";
import { SlLogout } from "react-icons/Sl";
import { motion } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PreUserForm from "./UserForm";
import { Searchbar } from "./Searchbar";
import { DropMenuSort } from "./DropMenuSort";
import { InputSwitch } from "./InputSwitch";
import { RemoveAllBtn } from "./RemoveAllBtn";
import { UserCompletionDays } from "./UserCompletionDays";
import { Point } from "./Point";
import { FilterButton } from "./FilterButton";
import { ResetButton } from "./ResetButton";
import { FormSubmit } from "./FormSubmit";
import { ScrollTop } from "./ScrollTop";
import { OngoingTaskName } from "./OngoingTaskCheck";
import { DeletedTaskName } from "./DeletedTaskCheck";
import { handleLogout } from "../handlers/handleLogout";
import UserSignupForm from "./UserSignUpform";
// import celebration from "../celebration.json";
// import Lottie from "lottie-react";

const Task = () => {
  let checkLsAppState = localStorage.getItem("AppState");
  let checkLsPoinstState = localStorage.getItem("PointState");
  let getUsername = localStorage.getItem("userName");
  let valGetuserName = getUsername ? getUsername : "";
  let getFormCheck = localStorage.getItem("Loginformcheck");
  let valueGetFormCheck = getFormCheck ? JSON.parse(getFormCheck) : false;
  let usersignupfprm = localStorage.getItem("signupform");
  let valuserSignUpCheck = usersignupfprm ? JSON.parse(usersignupfprm) : true;
  let mainformCheck = localStorage.getItem("mainform");
  let valuemainFormCheck = mainformCheck ? JSON.parse(mainformCheck) : false;
  let initalValueAppState = checkLsAppState ? JSON.parse(checkLsAppState) : [];
  let initalValuePointState = checkLsPoinstState
    ? JSON.parse(checkLsPoinstState)
    : 0;
  let usersignupData = localStorage.getItem("userData");
  let valusersignupData = usersignupData ? JSON.parse(usersignupData) : [];
  const [Addinput, setAddInput] = useState("");
  const [addTask, setAddTask] = useState(initalValueAppState);
  const [switchVal, setSwitchVal] = useState(false);
  const [points, setPoints] = useState(initalValuePointState);
  const [completionDays, setCompletionDays] = useState(0);
  const [query, setsearchQuery] = useState("");
  const [priorityCheck, setpriorityCheck] = useState(false);
  const [filterprioritytaskStatus, setFilterpriorityTaskStatus] =
    useState(false);
  const [parent, enableAnimations] = useAutoAnimate();
  const [userform, SetUserFom] = useState(valuemainFormCheck);
  const [Hideloginform, setHideloginform] = useState(valueGetFormCheck);
  const [userLgin, SetUserLogin] = useState(valGetuserName);
  const [userSignUPData, setSignUpdata] = useState(valusersignupData);
  const inputRef = useRef("");
  const [userSignupStatus, setUserSignupStatus] = useState(valuserSignUpCheck);

  useEffect(() => {
    localStorage.setItem("AppState", JSON.stringify(addTask));
    localStorage.setItem("PointState", JSON.stringify(points));
    localStorage.setItem("userName", userLgin);
    localStorage.setItem("Loginformcheck", Hideloginform);
    localStorage.setItem("signupform", userSignupStatus);
    localStorage.setItem("mainform", userform);
    localStorage.setItem("userData", JSON.stringify(userSignUPData));
  }, [
    addTask,
    points,
    userLgin,
    Hideloginform,
    userform,
    userSignupStatus,
    userSignUPData,
  ]);
  useEffect(() => {
    userform && inputRef.current.focus();
  }, [switchVal, addTask]);

  const searchedItems = useMemo(() => {
    if (filterprioritytaskStatus) {
      return addTask?.filter(
        (ele) =>
          ele.priority_status &&
          ele.task.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      return addTask?.filter((ele) => {
        return ele.task.toLowerCase().includes(query.toLowerCase());
      });
    }
  }, [query, addTask, filterprioritytaskStatus]);

  const filteredOngoingArray = useMemo(() => {
    return query
      ? searchedItems?.filter((ele) => ele.category === "ongoing")
      : addTask?.filter((ele) => ele.category === "ongoing");
  }, [addTask, query]);
  const filtereddeletedArray = useMemo(() => {
    return query
      ? searchedItems?.filter((ele) => ele.category === "deleted")
      : addTask?.filter((ele) => ele.category === "deleted");
  }, [addTask, query]);

  const filteredPriorttyOngoingTasks = useMemo(() => {
    return query
      ? searchedItems?.filter((ele) => ele.category === "ongoing")
      : addTask?.filter(
          (task) => task.priority_status && task.category === "ongoing"
        );
  }, [addTask, filterprioritytaskStatus, query]);

  const filteredPriorttyCompletedTasks = useMemo(() => {
    return addTask.filter(
      (task) => task.priority_status && task.category === "deleted"
    );
  }, [addTask, filterprioritytaskStatus, query]);

  return (
    <>
      <h3 className="userName | flex">
        <FaUserAlt></FaUserAlt>
        Welcome&nbsp;<span>{userLgin}</span>
      </h3>
      {userSignupStatus && (
        <UserSignupForm
          setSignUpdata={setSignUpdata}
          setHideloginform={setHideloginform}
          setUserSignupStatus={setUserSignupStatus}
        ></UserSignupForm>
      )}

      <div className="container">
        {Hideloginform && (
          <PreUserForm
            SetUserFom={SetUserFom}
            SetUserLogin={SetUserLogin}
            getUsername={getUsername}
            setHideloginform={setHideloginform}
            userSignUPData={userSignUPData}
            setAddTask={setAddTask}
            setPoints={setPoints}
            setFilterpriorityTaskStatus={setFilterpriorityTaskStatus}
            setSwitchVal={setSwitchVal}
            setAddInput={setAddInput}
            setsearchQuery={setsearchQuery}
            setCompletionDays={setCompletionDays}
            setpriorityCheck={setpriorityCheck}
            setUserSignupStatus={setUserSignupStatus}
          ></PreUserForm>
        )}

        {userform && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              ease: "linear",
              duration: 2,
              delay: 0.1,
              x: { duration: 1 },
            }}
          >
            <div
              className="hContainer | flex flex-between align-center justify-center"
              id="header"
            >
              <h1>
                <span style={{ color: "#0A8491" }}>U</span>- BO
                <span style={{ color: "#0A8491" }}>A</span>RD
              </h1>

              <div className="flex gap-15 ">
                <button
                  onClick={() =>
                    handleLogout(SetUserFom, setHideloginform, SetUserLogin)
                  }
                  className="logout_btn"
                >
                  <SlLogout></SlLogout>
                  Logout
                </button>
                <DropMenuSort setAddTask={setAddTask}></DropMenuSort>
                <Searchbar
                  query={query}
                  setAddInput={setAddInput}
                  setsearchQuery={setsearchQuery}
                ></Searchbar>
              </div>
            </div>

            <div className="Task">
              <div className="Task-manager">
                <div className="m-y-20 flex gap-15 flex-between">
                  <div className="flex gap-10">
                    <FilterButton
                      setFilterpriorityTaskStatus={setFilterpriorityTaskStatus}
                    />
                    <ResetButton
                      setAddTask={setAddTask}
                      setsearchQuery={setsearchQuery}
                      setFilterpriorityTaskStatus={setFilterpriorityTaskStatus}
                      addTask={addTask}
                    />
                  </div>

                  <Point points={points}></Point>
                </div>

                <div className="flex align-center">
                  <FormSubmit
                    Addinput={Addinput}
                    completionDays={completionDays}
                    switchVal={switchVal}
                    setAddInput={setAddInput}
                    setAddTask={setAddTask}
                    inputRef={inputRef}
                    priorityCheck={priorityCheck}
                    setpriorityCheck={setpriorityCheck}
                    setsearchQuery={setsearchQuery}
                    setCompletionDays={setCompletionDays}
                    setFilterpriorityTaskStatus={setFilterpriorityTaskStatus}
                  ></FormSubmit>

                  <UserCompletionDays
                    completionDays={completionDays}
                    setCompletionDays={setCompletionDays}
                  />
                </div>

                <InputSwitch
                  setSwitchVal={setSwitchVal}
                  switchVal={switchVal}
                ></InputSwitch>

                <div className="Task-manager-board flex gap-15">
                  {/* {celebrayionsvg && (
                    <Lottie animationData={celebration}></Lottie>
                  )} */}

                  <div
                    className="Task-manager-board-col Task-manager-board-left"
                    ref={parent}
                  >
                    <OngoingTaskName
                      filterprioritytaskStatus={filterprioritytaskStatus}
                      filteredOngoingArray={filteredOngoingArray}
                    ></OngoingTaskName>
                    {filterprioritytaskStatus
                      ? filteredPriorttyOngoingTasks?.map((taskItem) => (
                          <OngoingTask
                            taskItem={taskItem}
                            setAddTask={setAddTask}
                            key={taskItem.id}
                          />
                        ))
                      : filteredOngoingArray?.map((taskItem) => (
                          <OngoingTask
                            taskItem={taskItem}
                            setAddTask={setAddTask}
                            key={taskItem.id}
                          />
                        ))}
                  </div>
                  <div
                    className="Task-manager-board-col Task-manager-board-right"
                    ref={parent}
                  >
                    <DeletedTaskName
                      filterprioritytaskStatus={filterprioritytaskStatus}
                      filtereddeletedArray={filtereddeletedArray}
                    ></DeletedTaskName>
                    {filterprioritytaskStatus
                      ? filteredPriorttyCompletedTasks?.map((taskItem) => (
                          <DeletedTask
                            taskItem={taskItem}
                            key={taskItem.id}
                            setAddTask={setAddTask}
                            addTask={addTask}
                            setPoints={setPoints}
                          />
                        ))
                      : filtereddeletedArray?.map((taskItem) => (
                          <DeletedTask
                            taskItem={taskItem}
                            key={taskItem.id}
                            setAddTask={setAddTask}
                            addTask={addTask}
                            setPoints={setPoints}
                          />
                        ))}
                  </div>
                </div>
                <ScrollTop></ScrollTop>
              </div>
              <div className="h-footer | flex">
                <RemoveAllBtn
                  setAddTask={setAddTask}
                  setPoints={setPoints}
                  setHideloginform={setHideloginform}
                  SetUserFom={SetUserFom}
                  SetUserLogin={SetUserLogin}
                  setFilterpriorityTaskStatus={setFilterpriorityTaskStatus}
                  setSwitchVal={setSwitchVal}
                  setAddInput={setAddInput}
                  setsearchQuery={setsearchQuery}
                  setCompletionDays={setCompletionDays}
                  setpriorityCheck={setpriorityCheck}
                  setUserSignupStatus={setUserSignupStatus}
                  setSignUpdata={setSignUpdata}
                />
              </div>
            </div>

            <ToastContainer></ToastContainer>
          </motion.div>
        )}
      </div>
    </>
  );
};
export default Task;
