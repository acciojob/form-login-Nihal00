function getFormvalue() {
    var firstNameInput = document.getElementById('fname');
	var lastNameInput = document.getElementById('lname');

	var firstName = firstNameInput.value;
	var lastName = lastNameInput.value;

	window.alert(firstName + " " + lastName);

}

// document.getElementsByTagName('input').addEventListner('click', getFormvalue);