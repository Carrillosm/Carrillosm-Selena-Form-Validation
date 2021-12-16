// Use insert() function to insert the number in textview.
function insert(num) 
{
document.form1.textview.value = document.form1.textview.value + num;
}

// Use equal() function to return the result based on passed values.
function equal()
{
var exp = document.form1.textview.value;
if(exp)
{
document.form1.textview.value = eval(exp)
}
}

/* Here, we create a backspace() function to remove the number at the end of the numeric series in textview. 
function backspace()
{
var exp = document.form1.btn.value;
document.form1.btn.value = exp.substring(0, exp.length - 1); from total length ? 
} */


{
	var firstname=document.registration.firstname;
	var lastname=document.registration.lname;
	var gendername=document.registration.gname;
	var mobilenumber=document.registration.number;

	if(allLettername(firstname))
	{
		if(allLetterlast(lname))
		{
			if(genderselect(gname))
			{
				if(Mobile(number))
					{
					}
			}
		}
	}
	return false;
}	

function allLettername(firstname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(firstname.value.length==0)
	{
		alert('Please enter first name');
		firstname.focus();
		return false;
	}

	else if(firstname.value.match(letters))
	{
		return true;
		
	}
	else
	{
		alert('First name must have alphabet characters only');
		firstname.focus();
		return false;
	}
}

function allLetterlast(lname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(lname.value.length==0)
	{
		alert('Please enter last name');
		fname.focus();
		return false;
	}
	else if(lname.value.match(letters))
	{
		return true;
		
	}
	else
	{
		alert('last name must have alphabet characters only');
		fname.focus();
		return false;
		
	}
}

function genderselect(gname)
{
	if(gname.value == "Default")
	{
		alert('Select your gender');
		gname.focus();
		return false;
	}
	else
	{
		return true;
	}
}

function Mobile(number)
{ 
	var numbers = /^[0-9]+$/;
	if(number.value.length==0 )
	{
		alert('Please enter contact number');
		fname.focus();
		return false;
	}
	else if(number.value.length>10)
	{
		alert('Please enter a valid contact number');
		fname.focus();
		return false;

	}
	else if(number.value.match(numbers))
	{
		alert('Form Succesfully Submitted');
		window.location.reload();
		return true;
	}
	else
	{
		alert('Please check your contact number');
		return false;
	}
}
