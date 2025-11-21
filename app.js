window.onload = function() {
    const button = document.getElementById("search-btn");

    button.addEventListener("click", function() {
        fetch("superheroes.php")
            .then(response => response.text())
            .then(data => {
                alert(data); // show whole list in an alert
            })
            .catch(error => {
                console.error("Error:", error);
            });
    });
};
