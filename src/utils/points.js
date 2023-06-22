import { successnotification } from "../userNotifications/userNotifications";

export const point = (task, setPoints) => {
  const taskGoodSuccess = (day) => {
    successnotification(`Didnot Set Completetion Time , You Completed The Task In ${Math.floor(
      day
    )} Days.
      YOU GOT 5 POINTS 🎉🎉🎉`);
  };
  const taskBestSuccess = (day) => {
    successnotification(`Very Good, You Completed The Task Before Your Expected Days. Made It In ${Math.floor(
      day
    )} Days.
       YOU GOT 25 POINTS 🏆🏆🏆`);
  };
  const taskOkSuccess = (day) => {
    successnotification(` Good , But You Didnot Completed The Task Before Your Expected Days. Made It In ${Math.floor(
      day
    )} Days.
        REDUCED 15 POINTS 🙃🙃🙃`);
  };
  const [newtask] = task;
  // console.log(newtask.task_completion_days);
  // console.log(typeof newtask.task_completion_days);

  if (
    newtask.task_completion_days >= 0 &&
    newtask.user_expected_task_completionDays === 0
  ) {
    taskGoodSuccess(newtask.task_completion_days);
    setPoints((prev) => prev + 5);
  } else if (
    // type corection input output is '1' >= 0 is true
    newtask.user_expected_task_completionDays >= newtask.task_completion_days
  ) {
    taskBestSuccess(newtask.task_completion_days);
    setPoints((prev) => prev + 25);
  } else if (
    newtask.user_expected_task_completionDays < newtask.task_completion_days
  ) {
    taskOkSuccess(newtask.task_completion_days);
    setPoints((prev) => (prev - 15 <= 0 ? 0 : prev - 15));
  } else if (
    newtask.task_completion_days < 1 &&
    newtask.user_expected_task_completionDays === "tdy"
  ) {
    taskBestSuccess(newtask.task_completion_days);
    setPoints((prev) => prev + 25);
  } else if (
    newtask.task_completion_days >= 1 &&
    newtask.user_expected_task_completionDays === "tdy"
  ) {
    taskOkSuccess(newtask.task_completion_days);
    setPoints((prev) => (prev - 15 <= 0 ? 0 : prev - 15));
  }
};
