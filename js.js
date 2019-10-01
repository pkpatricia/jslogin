/*

localStorage.setItem();
localStorage.getItem();
localStorage.removeItem();
localStorage.length();
localStorage.key();
localStorage.clear();

*/

let userid = form.userid.value;
let password = form.password.value;

function check(form)
{
 /*the following code checkes whether the entered userid and password are matching*/
 if (userid == 'myuserid' && password == 'mypassword')
  {
    window.open('myPage.html');
    localStorage.setItem('userid', 'myuserid');
    localStorage.setItem('password', 'mypassword');
    alert('Welcome!' + localStorage.getItem('userid'));
  }
 else
 {
   alert("Error Password or Username");
  }
}