// Listen for the 'DOMContentLoaded' event to ensure the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the "Add Task" button, input field, and task list
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize an array to hold tasks
    let tasks = [];

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Define the function to add tasks
    function addTask(taskText, save = true) {
        // If no task text provided, retrieve and trim the value from the input field
        if (typeof taskText === 'undefined') {
            taskText = taskInput.value.trim();
        }

        // Check if the task input is empty
        if (taskText === "") {
            alert("Please enter a task."); // Prompt user to enter a task
            return; // Exit the function if empty
        }

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Set the text content to the task
        listItem.classList.add('task-item'); // Add a class to the list item for styling

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Set button text
        removeButton.className = 'remove-btn'; // Assign class for styling

        // Add an event listener to the remove button
        removeButton.onclick = function() {
            // Remove the list item from the task list
            taskList.removeChild(listItem);
            // Remove the task from the tasks array
            tasks = tasks.filter(task => task !== taskText);
            // Update Local Storage
            localStorage.setItem('tasks', JSON.stringify(tasks));
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);
        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';

        // Save the task to the array and Local Storage if needed
        if (save) {
            tasks.push(taskText); // Add to tasks array
            localStorage.setItem('tasks', JSON.stringify(tasks)); // Save to Local Storage
        }
    }

    // Attach event listener to the "Add Task" button
    addButton.addEventListener('click', function() {
        addTask(); // Call addTask function when button is clicked
    });

    // Allow adding tasks by pressing the "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(); // Call addTask function if Enter is pressed
        }
    });

    // Load tasks when the page is loaded
    loadTasks(); 
});
