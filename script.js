// Listen for the 'DOMContentLoaded' event to ensure the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the "Add Task" button, input field, and task list
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the function to add tasks
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // Check if the task input is empty
        if (taskText === "") {
            alert("Please enter a task."); // Prompt user to enter a task
            return; // Exit the function if empty
        }

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Set the text content to the task

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Set button text
        removeButton.className = 'remove-btn'; // Assign class for styling

        // Add an event listener to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(listItem); // Remove the list item from the task list
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);
        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Attach event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Allow adding tasks by pressing the "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(); // Call addTask function if Enter is pressed
        }
    });

    // Optional: Invoke addTask on DOMContentLoaded (if you want to add a default task)
    // Uncomment the line below if desired
    // addTask();
});
