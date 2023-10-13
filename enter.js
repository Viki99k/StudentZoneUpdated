document.addEventListener("DOMContentLoaded", function () {
    const nameForm = document.getElementById("bored-activity");
    const nameInput = document.getElementById("name");
    const ageInfoContainer = document.getElementById("ageInfo");

    nameForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = nameInput.value;

        // Make an API call to the Agify API
        fetch(`https://api.agify.io/?name=${name}`)
            .then((response) => response.json())
            .then((data) => {
                const age = data.age;
                const count = data.count;

                // Display the predicted age
                ageInfoContainer.innerHTML = `
                    <h2>Predicted Age for "${name}": ${age} years (based on ${count} samples)</h2>
                `;
            })
            .catch((error) => {
                console.error("Error fetching age data:", error);
                ageInfoContainer.innerHTML = "Unable to predict age.";
            });
    });
});

