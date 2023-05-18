function getFormvalue() {
    //Write your code here
	let firstName = document.getElementByName("fname").value;
	let lastName = document.getElementByName("lname").value;

	alert(firstName + " " + lastName);
}

// document.getElementsByTagName('input').addEventListner('click', getFormvalue);