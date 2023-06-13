import Swal from "sweetalert2";

export const handleUser = (setHideloginform, setUserSignupStatus) => {
  Swal.fire({
    title: "ARE YOU SURE WANT TO CREATE NEW USER?",
    text: "This Action Will Create Mew User",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Confirm",
  }).then((result) => {
    if (result.isConfirmed) {
      setHideloginform(false);
      setUserSignupStatus(true);
      Swal.fire("SUCCESS", "Page Redirected To Sign Up Page", "success");
    }
  });
};
