export const accesDateTime = (today) => {
  //date
  const date = `${new Date(today).getDate()}-${
    new Date(today).getMonth() + 1
  }-${new Date(today).getFullYear()}`;

  //day
  const day = new Date(today).toLocaleDateString("en-US", {
    weekday: "short",
  });
  // console.log(day);
  //time
  let hours = new Date(today).getHours();
  let minutes = new Date(today).getMinutes();
  const am_pm = hours >= 12 ? "pm" : "am";
  hours = hours % 12; // for 12 hour format
  hours = hours ? hours : 12; // when 12 % 12 is 0 , we will use 12 instead
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const time = `${hours}:${minutes} ${am_pm}`;
  return `On ${day} ${date} @ ${time}`;
};
