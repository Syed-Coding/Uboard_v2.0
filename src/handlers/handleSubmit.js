import { v4 as uuidv4 } from "uuid";
import { successnotification } from "../userNotifications/userNotifications";
import { errorNotification } from "../userNotifications/userNotifications";
export const handleSubmit = (
  e,
  setAddInput,
  completionDays,
  setsearchQuery,
  setCompletionDays,
  setFilterpriorityTaskStatus,
  Addinput,
  switchVal,
  priorityCheck,
  setAddTask,
  setpriorityCheck
) => {
  e.preventDefault();
  setsearchQuery("");
  setCompletionDays(0);
  setFilterpriorityTaskStatus(false);

  if (switchVal && priorityCheck) {
    return errorNotification(
      "CANNOT ADD TASK IN COMPLETED WITH PRIORITIZED , TRY AGAIN"
    );
  }
  if (!Addinput) {
    return errorNotification("PLEASE ADD SOMETHING");
  }

  const newTask = {
    id: uuidv4(),
    task: Addinput,
    category: switchVal ? "deleted" : "ongoing",
    priority_status: priorityCheck,
    edittedStatus: false,
    create_date_time: new Date().getTime(),
    user_expected_task_completionDays: completionDays,
  };
  setAddTask((prev) => {
    return [...prev, newTask];
  });

  setAddInput("");
  setpriorityCheck(false);
  successnotification("TASK ADDED SUCCESSFULLY");
};

// console.log("hii");
