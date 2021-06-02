var menu = document.getElementById("HamburgerMenu");
var RightSidebar = document.getElementById("RightSidebar");
var close = document.getElementById("Close");

menu.addEventListener("click",function(){


  menu.querySelector("span:nth-child(1)").style.transform = "rotate(45deg)";
  menu.querySelector("span:nth-child(3)").style.opacity = "0"; 
  let third = menu.querySelector("span:nth-child(2)");
  third.style.marginTop = "-10px";
  third.style.transform = "rotate(-45deg)";
  
  
    RightSidebar.style.right = "0%";
  
 
  
      
});




close.addEventListener("click",hidebar);
document.querySelectorAll(".hide").forEach(item =>{
  
  item.addEventListener("click",hidebar);

})



function hidebar(){

  menu.querySelector("span:nth-child(1)").style.transform = "rotate(0deg)";
  menu.querySelector("span:nth-child(3)").style.opacity = "1"; 
  let third = menu.querySelector("span:nth-child(2)");
  third.style.marginTop = "0";
  third.style.transform = "rotate(0deg)";


  if(screen.width<=400)
  {
     RightSidebar.style.right = "-120%";
  }
  else
  {
    RightSidebar.style.right = "-70%";
  }

}




//Scroll Button BACK TO TOP JS
window.addEventListener('scroll', function () {

  if (document.documentElement.scrollTop > 181) {

      document.getElementById('backtotop').style.display = "block";
  }

  else {
      document.getElementById('backtotop').style.display = "none";
  }

})

const topscroll = document.querySelector("#backtotop");
topscroll.addEventListener("click", function () {
  window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"

  });
});


//Fetching Real Time fetching Data From BBC-News
function BBCTrending() {

  //Fetch Api

  var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=1e11213d2b9844e4948feee117eaec89';
  var req = new Request(url);
  fetch(req).then((data) => {
      return data.json();
  }).then((result) => {

 
     console.log(result);
      



  }).catch((error) => {
      console.log(error);
  });

}

BBCTrending();