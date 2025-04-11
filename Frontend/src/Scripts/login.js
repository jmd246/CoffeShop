document.getElementById("login-form").addEventListener("submit", async function (e) {
    e.preventDefault();
    const tableContainer = document.createElement("div");
    tableContainer.id = 'table-container';
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password })
    });

    const productLink = document.createElement('a');
    productLink.href = '../Pages/products.html';
    productLink.innerText = 'Browse Our selection of Books and Coffee';

    const messageElement = document.getElementById("message");

    if (response.ok) {
        const data = await response.json();
        console.log(response.headers.get("userId"));
        localStorage.setItem("userId",response.headers.get('userId'));
        console.log("localstorage   "   +  localStorage.getItem('userId'));
        messageElement.textContent = "login successful! " + JSON.stringify(data.orders,null,2);
        messageElement.style.color = "green";
        window.location.href = "userDashBoard.html";

        
    }
     else {
        const errorText = await response.text();
        messageElement.textContent = "Error: " + errorText;
        messageElement.style.color = "red";
    }
});



