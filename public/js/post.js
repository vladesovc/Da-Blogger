// Function to handle the post submission
const postFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the post form
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the dashboard or do something else
            document.location.replace('/dashboard');
        } else {
            alert('Post failed to upload. Please try again.');
        }
    }
};

// Add an event listener to the post form
document.querySelector('.post-form').addEventListener('submit', postFormHandler);