import { point } from "../utils/points";
import { successnotification } from "../userNotifications/userNotifications";

export const handleTrash = (id, setAddTask, addTask, setPoints, setCele) => {
  setCele(false);
  setAddTask((prev) => {
    return prev.filter((ele) => {
      return ele.id !== id;
    });
  });
  const leftItem = addTask.filter((ele) => ele.id === id);

  point(leftItem, setPoints);

  successnotification("TASK DELETED SUCCESFULLY");
};
