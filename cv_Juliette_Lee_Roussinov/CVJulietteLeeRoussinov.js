function UpdateMonth(){
    var d = new Date();
    var months = ["January", "February", "March", "April", "May","June", "July", "August", "September",
    "Octeber", "November", "December"];
    document.getElementById("IMGDate").innerHTML = months[d.getMonth()] + ", " + d.getFullYear();
}

/*Assignment 7*/
fetch('https://reqres.in/api/users?page=1').then(response => response.json()).then(responseJSON => createUsersList(responseJSON.data)).catch(err => console.log(err));

function createUsersList(users){
  console.log(users);

  const curr_main = document.querySelector("main");

  for(let user of users){
    const section = document.createElement('section');
    section.innerHTML=`

    <div style="border:3px solid black;text-align:center;background-color:white;padding:20px;">
        <img src="${user.avatar}" alt="Profile Picture" style="width:140px"><br>
      <span><b>User ID:</b> ${user.id} <br> <b>First Name:</b> ${user.first_name} <br> <b>Last Name:</b> ${user.last_name}</span>
      <br>
      <a href="mailto:${user.email}">Send Email</a>
    </div>
    `;
    curr_main.appendChild(section);
  }
}
