export const handleSort = (e, setAddTask) => {
  // < 0 .... a comes first
  //  0 .... nothing will change
  // > 0 .... b comes first
  if (e.target.value === "TASK_DFLT") {
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
  }

  if (e.target.value === "TASK_ASC") {
    setAddTask((prev) => {
      return prev.toSorted((a, b) => {
        const nameA = a.task.toUpperCase();
        const nameB = b.task.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    });
  }

  if (e.target.value === "TASK_DESC") {
    setAddTask((prev) => {
      return prev.toSorted((a, b) => {
        const nameA = a.task.toUpperCase();
        const nameB = b.task.toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }

        return 0;
      });
    });
  }
  if (e.target.value === "DATE_ASC") {
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
  }
  if (e.target.value === "DATE_DESC") {
    setAddTask((prev) => {
      return prev.toSorted((a, b) => {
        const dateA = new Date(a.create_date_time);
        const dateB = new Date(b.create_date_time);
        if (dateA > dateB) {
          return -1;
        }
        if (dateA < dateB) {
          return 1;
        }
        return 0;
      });
    });
  }
};
