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
    window.open('myPage.html');
    
    alert('Welcome!' + localStorage.getItem('userid'));
  }
 else
 {
   alert("Error Password or Username");
  }
}