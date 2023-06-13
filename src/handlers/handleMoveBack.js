import { successnotification } from "../userNotifications/userNotifications";
import { accesDateTime } from "../utils/accessDateTime";
export const handleMoveBack = (id, setAddTask) => {
  setAddTask((prev) => {
    return prev.map((ele) => {
      return ele.id === id
        ? {
            ...ele,
            reCreated: accesDateTime(new Date()),
            category: "ongoing",
          }
        : ele;
    });
  });
  successnotification("TASK MOVED BACK TO ONGOING SUCCESSFULLY");
};
