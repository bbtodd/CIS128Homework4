var select_bkgrnd = document.getElementById("change_background");
const wrapper_bkgrnd = document.getElementById('wrapper');
select_bkgrnd.addEventListener("change", updateBackground);



function updateBackground(event) {
    console.log(select_bkgrnd.value);

  if (select_bkgrnd.value == 'white') {
      document.body.style.backgroundImage = 'none';
  } else if (select_bkgrnd.value == 'blue') {
      document.body.style.backgroundImage = "url('images/lightblue.jpg')";
  } else if (select_bkgrnd.value == 'gold') {
      document.body.style.backgroundImage = "url('images/lightgold.jpg')";
  }
}

var inputBox = "";

function setName()
{
    
inputBox = document.getElementById("name");
    
if(typeof(Storage)!=="undefined")    
  {
  if (localStorage.name)
    {
     localStorage.setItem('name', inputBox.value);
    }
  else
    {
     localStorage.setItem('name', inputBox.value);
    }
  document.getElementById("msg").innerHTML="Hello, " + localStorage.name + ", it's nice to see you again.";
  }
else
  {
  document.getElementById("msg").innerHTML="Your browser doesn't support local storage.";
  }
}

  if (localStorage.getItem("name") != null) {
      document.getElementById("msg").innerHTML="Hello, " + localStorage.name + ", it's nice to see you again.";
    }


