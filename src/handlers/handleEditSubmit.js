import { accesDateTime } from "../utils/accessDateTime";
import { warnnotification } from "../userNotifications/userNotifications";
import { successnotification } from "../userNotifications/userNotifications";
export const handleEditSubmit = (
  id,
  edittedinput,
  setAddTask,
  editted,
  setEdittedInputstatus
) => {
  if (!edittedinput)
    return warnnotification("PLEASE ADD YOUR EDITTED TASK AND TRY AGAIN !!!");

  setAddTask((prev) => {
    return prev.map((ele) => {
      return ele.id === id
        ? {
            ...ele,
            task: edittedinput,
            edit_date_time: accesDateTime(new Date()),
            edittedStatus: editted,
          }
        : ele;
    });
  });
  setEdittedInputstatus((prev) => !prev);
  successnotification("TASK EDITTED SUCCESSFULLY");
};
