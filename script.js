function doubleAndTriple() {
    // Get the input value
    const inputValue = parseFloat(document.getElementById("inputValue").value);

    // validation
    if (!isNaN(inputValue)) {
        const outputList = document.getElementById("outputList");

        // Clear previous list items
        outputList.innerText = "";


        // Calculate double and triple values
        const doubleValue = inputValue * 2;
        const tripleValue = inputValue * 3;

        // Create list items and add to the output list

        const doubleListItem = document.createElement("li");
        doubleListItem.textContent = "Double: " + doubleValue;
        outputList.appendChild(doubleListItem);



        const tripleListItem = document.createElement("li");
        tripleListItem.textContent = "Triple: " + tripleValue;
        outputList.appendChild(tripleListItem);
    }
}