/*

localStorage.setItem();
localStorage.getItem();
localStorage.removeItem();
localStorage.length();
localStorage.key();
localStorage.clear();

*/

document.querySelector('form').addEventListener('submit', function(e){

    var myuserid = document.getElementById('userid').value;
    var mypassword = document.getElementById('password').value;

    //const task = document.getElementById('task').value;
  
    //let tasks;

    //const myuserid = JSON.parse(localStorage.getItem('myuserid'));
  
  
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      isLoggedIn = JSON.parse(localStorage.getItem('userid'));
    }
  
    //tasks.push(task);

    if(myuserid)
  
    localStorage.setItem('isLoggedIn', 'YES');
  
    alert('Password Correct');
  
    e.preventDefault();
  });
  
  /* const tasks = JSON.parse(localStorage.getItem('tasks'));
  
  tasks.forEach(function(task){
    console.log(task);
  }); */