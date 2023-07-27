import { v4 as uuidv4 } from "uuid";
import { successnotification } from "../userNotifications/userNotifications";
import { errorNotification } from "../userNotifications/userNotifications";
import { handleSortDefault } from "../handlers/handleSortDefault";

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
  setpriorityCheck,
  setUserSort
) => {
  e.preventDefault();
  setsearchQuery("");
  setCompletionDays(0);
  setFilterpriorityTaskStatus(false);
  if (!Addinput) {
    return errorNotification("PLEASE ADD SOMETHING");
  }

  if (switchVal && priorityCheck) {
    return errorNotification(
      "CANNOT ADD TASK IN COMPLETED WITH PRIORITIZED , TRY AGAIN"
    );
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
  handleSortDefault(setAddTask, setUserSort);
  successnotification("TASK ADDED SUCCESSFULLY");
};
