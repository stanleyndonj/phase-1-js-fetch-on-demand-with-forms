const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page
        const input = document.querySelector("input#searchByID");

        // Fetch the movie data based on the input ID
        fetch(`http://localhost:3000/movies/${input.value}`)
            .then((response) => response.json())
            .then((data) => {
                // Display the movie data on the page
                const title = document.querySelector("section#movieDetails h4");
                const summary = document.querySelector("section#movieDetails p");

                title.innerText = data.title;
                summary.innerText = data.summary;
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                // Optionally handle errors, e.g., if the ID doesn't exist
                const title = document.querySelector("section#movieDetails h4");
                const summary = document.querySelector("section#movieDetails p");

                title.innerText = 'Movie not found';
                summary.innerText = '';
            });
    });
};

document.addEventListener("DOMContentLoaded", init);
