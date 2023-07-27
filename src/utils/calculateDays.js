export const taskCompletetionDays = (startTime, delTime) => {
  // console.log(startTime);
  // console.log(delTime);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // 24*60*60*1000 = 86400000(iday)
  //60*60*100(1hr)
  //60*1000(1minute)
  const sub = delTime - startTime;
  const days = sub / 86400000;
  //86400000 no of ms in 1 day
  return days; // return no of days
};
