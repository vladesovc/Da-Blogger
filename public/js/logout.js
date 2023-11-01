const logoutUser = async () => {
    try {
        // Send a request to the logout API endpoint
        const response = await fetch('/api/users/logout', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/login');
        } else {
            alert('Logout failed. Please try again. Or dont. Its really up to you.');
        }
    } catch (err) {
        console.err('Error within logout process', err);
    }
};


document.querySelector('.logout-button').addEventListener('click', async (event) => {
    event.preventDefault();


    await logoutUser();
});