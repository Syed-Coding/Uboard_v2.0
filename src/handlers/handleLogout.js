import Swal from "sweetalert2";
export const handleLogout = (SetUserFom, setHideloginform, SetUserLogin) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "ARE YOU SURE WANT TO LOGOUT?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Logout",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        SetUserFom(false),
          setHideloginform(true),
          SetUserLogin(""),
          swalWithBootstrapButtons.fire(
            "Logout SuccessFull",
            "ThankYou For Using U-BOARD",
            "success"
          );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          "Logout UnsuccessFull",
          " WELCOME BACK TO UBOARD 😊😊😊",
          "error"
        );
      }
    });
};
