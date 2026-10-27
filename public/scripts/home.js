document.getElementById("form").onsubmit = () => {

    // reset error messages and validation
    clearErrorMessages();
    var isValid = true;

    let destination = document.getElementById("destination").value;
    if (destination == "none") {                                               // check if a valid option was selected
        document.getElementById("err-dest").style.display = "block";    // if fail: display error message
        isValid = false;                                                // mark entire form as invalid until next submit
    }

    let count = document.getElementById("travelers").value;
    if (count == null || count < 1) {
        document.getElementById("err-count").style.display = "block";
        isValid = false;
    }
    
    return isValid;                                                     // submit only if data was valid
};

function clearErrorMessages() {
    let errors = document.getElementsByClassName("err");  // select all error messages
    for (let i = 0; i < errors.length; i++) {               // for each message
        errors[i].style.display = "none";                   // set as invisible
    }
}