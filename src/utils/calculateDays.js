export const taskCompletetionDays = (startTime, delTime) => {
  const sub = delTime - startTime;
  const days = sub / 86400000;
  return days;
};
