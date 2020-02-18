const generateHTML = function (team){

  //beginning of main
  let main = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <link rel = "stylesheet" href= "./style.css">
</head>
<body>
  <div class="jumbotron jumbotron-fluid bg-primary">
    <div class="container">
      <h1 class="display-4 font-weight-bold">My Team</h1>
    </div>
  </div>
  <main>
    <div class="container">
      <div class="row">`

  let teamInfo =''
  let textNode =''
  for(let i=0; i<team.length; i++){
    switch(team[i].getRole()){
      case 'Manager':
        textNode = `
        <div class="col-sm-4 cardStyle">
        <div class="card border-danger">
          <h3 class="card-header bg-danger">${team[i].name}</h3>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${team[i].id}</li>
              <li class="list-group-item">Role:${team[i].getRole()}</li>
              <li class="list-group-item">Email: ${team[i].email}</li>
              <li class="list-group-item">Office Number &#9742: ${team[i].officeNumber}</li>
            </ul>
          </div>
        </div>
      </div>
        `
        break
      case 'Engineer':
        textNode = `
        <div class="col-sm-4 cardStyle">
        <div class="card border-danger">
          <h3 class="card-header bg-danger">${team[i].name}</h3>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${team[i].id}</li>
              <li class="list-group-item">Role:${team[i].getRole()}</li>
              <li class="list-group-item">Email: ${team[i].email}</li>
              <li class="list-group-item">Github Username &#128435: ${team[i].github}</li>
            </ul>
          </div>
        </div>
      </div>
        `
        break
      case 'Intern':
        textNode = `
        <div class="col-sm-4 cardStyle">
        <div class="card border-danger">
          <h3 class="card-header bg-danger">${team[i].name}</h3>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${team[i].id}</li>
              <li class="list-group-item">Role:${team[i].getRole()}</li>
              <li class="list-group-item">Email: ${team[i].email}</li>
              <li class="list-group-item">School &#127979:: ${team[i].school}</li>
            </ul>
          </div>
        </div>
      </div>
        `
        break
    }
    teamInfo = teamInfo + textNode
  }

  main = main + teamInfo
  // ending of main
  let mainFin = `</div>
    </div>
  </main>
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>`

main = main + mainFin



return main
}





module.exports = generateHTML