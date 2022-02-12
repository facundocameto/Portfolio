gmail_but = document.getElementById("gmail_but");
var tch_hideable = document.getElementById("tch_hideable");
var tch_hideable_2 = document.getElementById("tch_hideable_2");
var hideable_3 = document.getElementById("hideable_3");
var timer = 0;
//setInterval(function(){console.log(timer);}, 500)

function copyMail()
{
    var gmailInv = document.getElementById('gmail_inv');
    gmailInv.select();
    gmailInv.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(gmailInv.value);
    this.focus();
};
gmail_but.addEventListener("click", copyMail);

function hideOrShow()
{
  var hideable = document.getElementById("hideable");
  var hideable_2 = document.getElementById("hideable_2");
  if (hideable_2.style.width == "0%")
  {
    setTimeout(function(){ hideable.style.display = "flex"; }, 800);
    hideable_2.style.width = "22%";

  }
  else
  {
    hideable.style.display = "none";
    hideable_2.style.width = "0%";
  }
}

function hideOrShowHid3()
{
  if (timer == 0){
    if (hideable_3.style.display = "none"){
      timer = 2100;
      hideable_3.style.display = "block";
      hideable_3.style.opacity = 1;
      setTimeout(function(){ hideable_3.style.opacity = 0; }, 1500);
      setTimeout(function(){ hideable_3.style.display = "none";}, 2100);
      setTimeout(function(){ timer = 0;}, 2100);
    }
  }
}

tch_hideable.addEventListener("click", hideOrShow);
gmail_but.addEventListener("click", hideOrShowHid3);
tch_hideable_2.addEventListener("click", hideOrShow);
document.addEventListener("DOMContentLoaded", hideOrShow);
