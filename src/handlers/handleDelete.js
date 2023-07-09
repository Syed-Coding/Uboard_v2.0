import { accesDateTime } from "../utils/accessDateTime";
import { taskCompletetionDays } from "../utils/calculateDays";
export const handleDelete = (id, setAddTask) => {
  setAddTask((prev) => {
    return prev.map((ele) => {
      return ele.id === id
        ? {
            ...ele,
            category: "deleted",
            delete_date_time: new Date().getTime(),
            task_completion_days: taskCompletetionDays(
              ele.create_date_time,
              new Date().getTime()
            ),
          }
        : ele;
    });
  });
};
