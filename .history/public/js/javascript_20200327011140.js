function submitStep() {
  // grab user input
  var user = document.getElementById("user").value;
  var password = document.getElementById("password").value;
  // var login = document.getElementById("login").value;

  if (password == "") {
    alert("We need more information...");
  }

  // user object
  var userData = {
    user: user,
    password: password,
    // login: login
  };

  console.log(userData);
  userCheck = function (userData) {
    // pull the data from api users
    $.get("api/users", function (data) {
      // iterate through the users in the api
      for (var i = 0; i < data.length; i++) {
        // check the user data against what is in the database
        if (data[i].user == userData.user && data[i].password == userData.password) {
          console.log("user exists");
          console.log("next step!")

          // open the sucess modal if the user passes the check
          $('#successModal').modal();
          $('#successModal').modal('open');
          // when users click continue on the modal, pass user to the next page
          document.getElementById("continueButton").href = "/platforms";
          return (userData);
        } else {
          console.log("user doesn't exist")
          $('#failModal').modal();
          $('#failModal').modal('open');
          // when users click continue on the modal, pass user to the next page
          document.getElementById("retryButton").href = "/login";

        }
      }
    })
    // if (userData.isUser == true) {
    // console.log("next step!")
    //         $('#successModal').modal();
    //         $('#successModal').modal('open');
    //         document.getElementById("continueButton").href = "/platforms";

    // }
    //  else {
    //   console.log("sorry")
    //     }
  }
  userCheck(userData);
}
//   $.ajax({
//     url: "/check",
//     type: "post",
//     data: JSON.stringify(data),
//     processData: false,
//     contentType: "application/json; charset=utf-8",
//     success: function(data) {
//       if (data.success) {
//         if (data.modal) {
//           $('#successModal').modal();
//           $('#successModal').modal('open');
//           document.getElementById("continueButton").href = "/" + data.nextPage;
//         } else {
//           window.location.href = "/" + data.nextPage;
//         }
//       } else {
//         setFailedResponse();
//         document.getElementById("onePassword").value = "";
//         document.getElementById("onePassword").focus();
//         document.getElementById("onePassword").blur();
//       }
//     },
//     error: function(jqXhr, textStatus, errorThrown) {
//       // console.log("Whoops");
//     }
//   });
// }

// function setFailedResponse() {
//   document.getElementById("responseText").innerHTML = "No good...";
//   setTimeout("clearedFailedResponse()", 2000);
// }

// function clearedFailedResponse() {
//   document.getElementById("responseText").innerHTML = " ";
// }


// function submitStep() {
//   // grab user input
//   var user = document.getElementById("user").value;
//   var password = document.getElementById("password").value;
//   var isUser = false;
//   // var login = document.getElementById("login").value;

//   if (password == "") {
//     alert("We need more information...");
//   }

//   // user object
//   var userData = {
//     user: user,
//     password: password,
//     isUser: isUser
//     // login: login
//   };

//   console.log(userData);
//   userCheck = function(userData){
// $.get("api/users", function (data) {
//   // check the user data against what is in the database
//   for (var i =0; i < data.length; i++) {
//     // console.log (data[i])
//     if (data[i].user == userData.user && data[i].password == userData.password) {
//       console.log ("user exists");
//       userData.isUser = true;
//       console.log (userData.isUser);
//       return (userData);
//     } 
//     // else {
//     //   console.log ("user doesn't exist")
//     // }
//   }
// })
// if (userData.isUser == true) {
//   console.log("next step!")
//           $('#successModal').modal();
//           $('#successModal').modal('open');
//           document.getElementById("continueButton").href = "/platforms";

// } else {
//   console.log("sorry")
//     }
//   }
//   userCheck(userData);
// }
// //   $.ajax({
// //     url: "/check",
// //     type: "post",
// //     data: JSON.stringify(data),
// //     processData: false,
// //     contentType: "application/json; charset=utf-8",
// //     success: function(data) {
// //       if (data.success) {
// //         if (data.modal) {
// //           $('#successModal').modal();
// //           $('#successModal').modal('open');
// //           document.getElementById("continueButton").href = "/" + data.nextPage;
// //         } else {
// //           window.location.href = "/" + data.nextPage;
// //         }
// //       } else {
// //         setFailedResponse();
// //         document.getElementById("onePassword").value = "";
// //         document.getElementById("onePassword").focus();
// //         document.getElementById("onePassword").blur();
// //       }
// //     },
// //     error: function(jqXhr, textStatus, errorThrown) {
// //       // console.log("Whoops");
// //     }
// //   });
// // }

// // function setFailedResponse() {
// //   document.getElementById("responseText").innerHTML = "No good...";
// //   setTimeout("clearedFailedResponse()", 2000);
// // }

// // function clearedFailedResponse() {
// //   document.getElementById("responseText").innerHTML = " ";
// // }