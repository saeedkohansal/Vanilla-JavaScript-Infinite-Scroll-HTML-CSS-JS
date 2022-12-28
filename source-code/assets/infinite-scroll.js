let currentPage = 1; // Data pagination


// Infinite scroll feature | Works perfectly on Desktop & Mobile versions
function infiniteScroll() {
    // Getting elements
    const spinnerIcon = document.querySelector(".spinner");
    const addNewData = document.querySelector(".data");

    // Define options
    const itemPerLoad = 6; // How much items per load
    const maxItems = 20; // Maximum items

    // Detecting the end of the page (When the user reaches the bottom of the page)
    const endOfThePage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

    // If the user reaches the bottom of the page
    if (endOfThePage) {
        // Page counter
        currentPage++;

        // Before we reach the maximum number of items (How much data we want to display)
        if (currentPage <= maxItems) {
            // Load & display new items (For example 6 items per load)
            for (let i = 0; i < itemPerLoad; i++) {
                // Create & display new element with new data
                const newItem = document.createElement("h1");

                // Set class with loading animation
                newItem.setAttribute(
                    "class", "animate__animated animate__zoomInUp animate__slower"
                );

                // Set text for new item
                newItem.innerText = "Datalist " + currentPage;

                // Add new item to the target
                addNewData.append(newItem);

                // Display spinner icon
                spinnerIcon.style.display = "block";
            }
        } else if (document.querySelector(".the-end") == null) {
            /*
            When we reach the `maxItems`
            Create `.the-end` element only once
            */

            // Create & display new element with new data
            const newItem = document.createElement("h1");

            // Set `the-end` class with animation
            newItem.setAttribute("class",
                "the-end animate__animated animate__jello animate__slower animate__infinite"
            );

            // Set text for new item
            newItem.innerText = "The End!";

            // Add new item to the target
            addNewData.append(newItem);

            // Hide spinner icon
            spinnerIcon.style.display = "none";
        }
    }
}


// Run when page is being scrolled
window.addEventListener("scroll", infiniteScroll);