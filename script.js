let heBtn = document.getElementById("button1");
let heb = document.getElementById("button2");
let loginBtu = document.getElementById("button3");
//let name_Button1 = document.getElementById("nameButton");
let fastname = document.getElementById("EditText1").value;

//let heb = document.querySelector('Button');

heBtn.addEventListener('click',showMsg);
heb.addEventListener('click',intputMsg);
loginBtu.addEventListener('click',login_f);
name_Button1.addEventListener('click',hi);

function showMsg(){
	//alert("hello world");
	//let name = prompt("Enter your name");
	
	let name = document.getElementById("EditText1").value;
	
	if(name != ""){
		heb.textContent = 'Hello ' + name;
	}
	else{
		alert("Your Text is empty");
	}
	
	//document.write(name);
}

function intputMsg(){
	if(document.getElementById("EditText1").value != ""){
		alert("hello " + document.getElementById("EditText1").value)
	}
	else{
		alert("hello world");
	}
}

function login_f(){
	if(document.getElementById("PassWord1").value == "pubg"){
		window.location.href = "page1.html";
		var name_space = document.getElementById("EditText1").value;
		localStorage.setItem("textvalue",name_space);
		
	}
	else{
		alert("rong Password");
	}
}

