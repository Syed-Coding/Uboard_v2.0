export const taskCompletetionDays = (startTime, delTime) => {
  // console.log(startTime);
  // console.log(delTime);

  const sub = delTime - startTime;
  const days = sub / 86400000;
  return days;
};
