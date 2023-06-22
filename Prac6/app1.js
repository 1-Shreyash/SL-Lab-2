function passid_validation(passid, mx, my) {
  var passid_len = passid.value.length;
  if (passid_len == 0 || passid_len >= my || passid_len <= mx) {
    alert(
      "Password should not be empty / length be between " + mx + " to " + my
    );
    passid.focus();
    return false;
  }
  return true;
}
function userid_validation(uid, mx, my) {
  var uid_len = uid.value.length;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    alert(
      "User Id should not be empty / length be between " + mx + " to " + my
    );
    uid.focus();
    return false;
  }
  return true;
}
function allnumeric(uzip) {
  var numbers = /^[0-9]+$/;
  if (uzip.value.match(numbers)) {
    return true;
  } else {
    alert("ZIP code must have numeric characters only");
    uzip.focus();
    return false;
  }
}
function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
}
function validGender(mGen, fGen, oGen) {
  x = 0;
  if (mGen.checked) {
    x++;
  }
  if (fGen.checked) {
    x++;
  }
  if(oGen.checked)
    x++;
  if (x == 0) {
    alert("Select Male/Female/Others");
    mGen.focus();
    return false;
  } else {
    window.location.reload();
    return true;
  }
}
function validLang(l1,l2,l3,l4) {
    x = 0;
    if (l1.checked) {
      x++;
    }
    if (l2.checked) {
      x++;
    }
    if(l3.checked)
      x++;

    if(l4.checked)
    x++;
    if (x == 0) {
      alert("Select any language");
      mGen.focus();
      return false;
    } else {
      window.location.reload();
      return true;
    }
  }
function countryselect(ucountry) {
  if (ucountry.value == "") {
    alert("Select your country from the list");
    ucountry.focus();
    return false;
  } else {
    return true;
  }
}
function allLetter(uname) {
  var letters = /^[A-Za-z]+$/;
  if (uname.value.match(letters)) {
    return true;
  } else {
    alert("Username must have alphabet characters only");
    uname.focus();
    return false;
  }
}
function userid_validation(uid, mx, my) {
  var uid_len = uid.value.length;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    alert(
      "User Id length must be 5 to 13"
    );
    uid.focus();
    return false;
  }
  return true;
}
function validateForm() {
  var uid = document.forms["registrationForm"]["uid"];
  userid_validation(uid, 5, 13);

  var password1 = document.forms["registrationForm"]["password1"];
  var password2 = document.forms["registrationForm"]["password2"];
  passid_validation(password1);
  passid_validation(password2);
  if (password1.value != password2.value) {
    alert("password must be same!");
  }

  var name = document.forms["registrationForm"]["name"];
  allLetter(name);

  var country = document.forms["registrationForm"]["country"];
  countryselect(country);

  var zip = document.forms["registrationForm"]["zipCode"];
  allnumeric(zip);

  var email = document.forms["registrationForm"]["email"];
  ValidateEmail(email);

    var gender = document.forms["registrationForm"]["gender"]; 
    validGender(gender[0],gender[1],gender[2]);

    var lang = document.forms["registrationForm"]["lang"];
    validLang(lang[0],lang[1],lang[2],lang[3]);
}
