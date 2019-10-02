/*

localStorage.setItem();
localStorage.getItem();
localStorage.removeItem();
localStorage.length();
localStorage.key();
localStorage.clear();

*/

function check()
{
  var userid = document.getElementById('userid').value;
  var password = document.getElementById('password').value;
  //var name = name_element.value;
  /*the following code checkes whether the entered userid and password are matching*/
 if ((userid == 'myuserid') && (password == 'mypassword'))
  {
    localStorage.setItem('userid', 'myuserid');
    localStorage.setItem('password', 'mypassword');
    
    
    alert('Welcome! ' + localStorage.getItem('userid') + ' !!!!') ;

    //window.close('login.html');
    //window.open("", "_self");
    window.open('myPage.html', "_self");
    
  }
 else
 {
   alert("Error Password or Username");
   window.location.reload();
  }
}

function isLoggedIn() 
{
  var x = localStorage.getItem('userid');

    if (x != undefined) {
      alert('Welcome! ' + localStorage.getItem('userid') + ' !!!!') ;
      //window.close('login.html');
      //window.open('myPage.html');
      window.open('myPage.html', "_self");
    
      
    }

}

function logout()
{

  //localStorage.removeItem('userid');
  //localStorage.removeItem('password');
  localStorage.clear();
  alert('You Are Logged Out!');
  //window.close('mypage.html');
  //window.open('login.html');
  window.open('login.html', "_self");
    
}


