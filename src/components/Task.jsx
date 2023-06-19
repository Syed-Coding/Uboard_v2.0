import React, { useState, useEffect, useMemo } from "react";
import { OngoingTask } from "./OngoingTask";
import { DeletedTask } from "./DeletedTask";
import { FaUserAlt } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PreUserForm from "./UserForm";
import { ScrollTop } from "./ScrollTop";
import { Searchbar } from "./Searchbar";
import { DropMenuSort } from "./DropMenuSort";
import { InputSwitch } from "./InputSwitch";
import { RemoveAllBtn } from "./RemoveAllBtn";
import { UserCompletionDays } from "./UserCompletionDays";
import { Point } from "./Point";
import { FilterButton } from "./FilterButton";
import { ResetButton } from "./ResetButton";
import { FormSubmit } from "./FormSubmit";
import { OngoingTaskName } from "./OngoingTaskCheck";
import { DeletedTaskName } from "./DeletedTaskCheck";
import { handleLogout } from "../handlers/handleLogout";
import UserSignupForm from "./UserSignUpform";

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
  const [userSignupStatus, setUserSignupStatus] = useState(valuserSignUpCheck);
  const [cele, setCele] = useState(false);

  useEffect(() => {
    setCele(true);
  }, [points]);

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
          <div>
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

                  <Point points={points} cele={cele}></Point>
                </div>

                <div className="flex align-center">
                  <FormSubmit
                    Addinput={Addinput}
                    completionDays={completionDays}
                    switchVal={switchVal}
                    setAddInput={setAddInput}
                    setAddTask={setAddTask}
                    priorityCheck={priorityCheck}
                    setpriorityCheck={setpriorityCheck}
                    setsearchQuery={setsearchQuery}
                    setCompletionDays={setCompletionDays}
                    setFilterpriorityTaskStatus={setFilterpriorityTaskStatus}
                  ></FormSubmit>

                  <UserCompletionDays
                    switchVal={switchVal}
                    completionDays={completionDays}
                    setCompletionDays={setCompletionDays}
                  />
                </div>

                <InputSwitch
                  setSwitchVal={setSwitchVal}
                  switchVal={switchVal}
                ></InputSwitch>
                <div className="Task-manager-board flex gap-15">
                  <div className="Task-manager-board-col Task-manager-board-left">
                    <OngoingTaskName
                      filterprioritytaskStatus={filterprioritytaskStatus}
                      filteredOngoingArray={filteredOngoingArray}
                    ></OngoingTaskName>
                    <ul ref={parent}>
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
                    </ul>
                  </div>
                  <ScrollTop></ScrollTop>
                  <div className="Task-manager-board-col Task-manager-board-right">
                    <DeletedTaskName
                      filterprioritytaskStatus={filterprioritytaskStatus}
                      filtereddeletedArray={filtereddeletedArray}
                    ></DeletedTaskName>
                    <ul ref={parent}>
                      {filterprioritytaskStatus
                        ? filteredPriorttyCompletedTasks?.map((taskItem) => (
                            <DeletedTask
                              taskItem={taskItem}
                              key={taskItem.id}
                              setAddTask={setAddTask}
                              addTask={addTask}
                              setPoints={setPoints}
                              setCele={setCele}
                            />
                          ))
                        : filtereddeletedArray?.map((taskItem) => (
                            <DeletedTask
                              taskItem={taskItem}
                              key={taskItem.id}
                              setAddTask={setAddTask}
                              addTask={addTask}
                              setPoints={setPoints}
                              setCele={setCele}
                            />
                          ))}
                    </ul>
                  </div>
                </div>
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
          </div>
        )}
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};
export default Task;
