export const handleSortDefault = (setAddTask, setUserSort) => {
  setUserSort("TASK_DFLT");
  setAddTask((prev) => {
    return prev.toSorted((a, b) => {
      const dateA = new Date(a.create_date_time);
      const dateB = new Date(b.create_date_time);
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }

      return 0;
    });
  });
};
