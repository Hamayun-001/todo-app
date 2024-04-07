// let http = new XMLHttpRequest();

// http.open('get' , 'data.jason', true);

// http.send();

// http.onload=function(){
//     if(this.readyState == 4 && this.status == 200){

//         let products = JSON.parse(this,responseText);

// script.js

// fetch('./data.json')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         // Do something with the JSON data here
//     })
//     .catch(error => console.error('Error fetching JSON:', error));

// const initialTasks = [
//     {
//       id: 1,
//       task: "Task 1",
//     },
//     {
//       id: 2,
//       task: "Task 2",
//     },
//     {
//       id: 3,
//       task: "Task 3",
//     },
//   ];
  
//   class TodoApp {
//     constructor() {
//       this.editMode = false;
//       this.editableTaskId = "";
//       this.tasks = initialTasks;
//       this.renderTasks();
//     }
// 



feather.replace();

      // fetching Json data

         fetch('./data.json')
         .then(response => response.json())
         .then(data => {
         console.log(data);
         const taskList = document.getElementById('taskList');
         data.tasks.forEach(task => {
             const listItem = document.createElement('li');
             listItem.textContent = task.task;
             taskList.appendChild(listItem);
        });
    })

  