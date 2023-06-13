import Swal from "sweetalert2";

export const handleRemoveAll = (
  setAddTask,
  setPoints,
  SetUserFom,
  setHideloginform,
  SetUserLogin,
  setFilterpriorityTaskStatus,
  setSwitchVal,
  setAddInput,
  setsearchQuery,
  setCompletionDays,
  setpriorityCheck,
  setUserSignupStatus,
  setSignUpdata
) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "ARE YOU SURE WANT TO DELETE ALL TASKS?",
      text: "This Action Cannot Be Undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        setAddTask([]), setPoints(0), SetUserFom(false);
        setHideloginform(false);
        SetUserLogin("");
        setFilterpriorityTaskStatus(false);
        setSwitchVal(false);
        setAddInput(""), setsearchQuery("");
        setCompletionDays(0);
        setpriorityCheck(false);
        setUserSignupStatus(true);
        setSignUpdata([]);
        localStorage.clear(); // this is an additional security to clear
        swalWithBootstrapButtons.fire(
          "Deleted!",
          "Your tasks has been deleted 😔😔😔.",
          "success"
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          "Cancelled",
          "Your tasks are safe 😊😊😊",
          "error"
        );
      }
    });
};
