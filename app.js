document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("lookup-form");
  const input = document.getElementById("search");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop page reload

    const query = input.value.trim();
    let url = "superheroes.php";

    if (query !== "") {
      url += "?query=" + encodeURIComponent(query);
    }

    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        resultDiv.innerHTML = data; 
      })
      .catch((error) => {
        console.error("Error:", error);
        resultDiv.innerHTML = "<p>There was a problem with the request.</p>";
      });
  });
});
