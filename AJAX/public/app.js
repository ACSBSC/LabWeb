function storeTask(){
  console.log("Function");
  let taskDescription = document.getElementById('task_description').value;
  console.log(taskDescription);

  //let taskDescriptionJQ = $('#task_description').val();
  //console.log(taskDescriptionJQ);


  let body = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ description: taskDescription })
  };
  fetch('/tasks', body)
    .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        throw "Error en la llamada Ajax";
      }
    })
    .then(task => {
      document.getElementById('task_description').value = '';
      addTask(task);
    })
    .catch(error => {
      console.log('Error: ', error);
    })



}

function addTask(task) {
  let html =
  `
  <div class="card my-3">
    <div class="card-body">
      <p class="card-text">${task.description}</p>
      <form action="/tasks/${task.id}/done" method="POST">
        <a href="javascript:;" onclick="parentNode.submit();" class="card-link">Done</a>
      </form>
    </div>
  </div>
  `;
  let node = document.createRange().createContextualFragment(html);
  document.getElementById('tasksList').prepend(node);
}

function doneTask(taskId) {

  console.log("taskId");
  console.log(taskId);

  let body = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: taskId })
  };
  fetch('/done', body)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw "Error en la llamada Ajax a done";
      }
    })
    .then(task => {
      let html =
      `
      <div id="${task.id}" class="card my-3 bg-warning">
      <div class="card-body">
        <p class="card-text">${task.description}</p>
        <a href="javascript:;"  onclick="deleteTask(${task.id});"  class="card-link">Delete</a>
      </div>
      </div>
      `;
      console.log("html new");
      console.log(html);
      document.getElementById(taskId).innerHTML = html;
    })
    .catch(error => {
      console.log('Error: ', error);
    })
}


function deleteTask(taskId) {

  console.log("taskId");
  console.log(taskId);

  let body = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: taskId })
  };
  fetch('/delete', body)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw "Error en la llamada Ajax a done";
      }
    })
    .then(task => {
      console.log(taskId);
      var div = document.getElementById(taskId);
      div.parentNode.removeChild(div);
    })
    .catch(error => {
      console.log('Error: ', error);
    })
}
