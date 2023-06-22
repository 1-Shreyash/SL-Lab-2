function OptCard(){
    upi = document.getElementById("upi");
    card = document.getElementById("card");
    var paymentMethod = document.forms["registrationForm"]["paymentMethod"];
        if(paymentMethod.value == "UPI"){
            card.style.display = "none";
            upi.style.display = "block";
        }
        if(paymentMethod.value == "Card"){
            card.style.display = "block";
            upi.style.display = "none";
        }
}
function validateForm() {
      // Personal Information
      var name = document.forms["registrationForm"]["name"].value;
      var email = document.forms["registrationForm"]["email"].value;
      var mobile = document.forms["registrationForm"]["mobile"].value;
      var dob = document.forms["registrationForm"]["dob"].value;
    
      // Educational Information
      var xMarks = document.forms["registrationForm"]["xMarks"].value;
      var xiMarks = document.forms["registrationForm"]["xiMarks"].value;

      // Payment Details
      var paymentMethod = document.forms["registrationForm"]["paymentMethod"].value;
      var cardNumber = document.forms["registrationForm"]["cardNumber"].value;
      var upiID = document.forms["registrationForm"]["upiID"].value;

      // Validate Personal Information
      if (name == "") {
        alert("Please enter your name.");
        return false;
      }

      if (!/^[a-zA-Z ]+$/.test(name)) {
        alert("Name should not contain digits or special characters.");
        return false;
      }

      if (email == "") {
        alert("Please enter your email address.");
        return false;
      }

      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
      }

      if (mobile == "") {
        alert("Please enter your mobile number.");
        return false;
      }
    //   alert(mobile)

      if (!/^[7-9]\d{9}$/.test(mobile)) {
        alert("Mobile number should be 10 digits long and start with 7, 8, or 9.");
        return false;
      }

      var today = new Date();
      var dobDate = new Date(dob);
      if(dob=="")
        alert("Date of birth should not be blank")
      var age = today.getFullYear() - dobDate.getFullYear();

      if (age <= 18 || age >= 25) {
        alert("Age should be between 18 and 25.");
        return false;
      }

      // Validate Educational Information
      if (xMarks == "") {
        alert("Please enter your X marks.");
        return false;
      }

      if (xiMarks == "") {
        alert("Please enter your XII marks.");
        return false;
      }

      if (paymentMethod == "Card") {
        if (cardNumber == "") {
          alert("Please enter your card number.");
          return false;
        }

        // You can add additional card validation logic here.
      }

      if (paymentMethod == "UPI") {
        if (upiID == "") {
          alert("Please enter your UPI ID.");
          return false;
        }
      }
    }