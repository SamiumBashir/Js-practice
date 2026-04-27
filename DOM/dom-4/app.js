const btn = document.getElementById("fetch__btn");
const container = document.getElementById("user__container");

btn.addEventListener("click", async () => {
  container.innerHTML = `<p>Loading</p>`;
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    const data = await response.json();
    container.innerHTML = `
                    <div class="card">
                        <h3>${data.name}</h3>
                        <p>Email: ${data.email}</p>
                        <p>City: ${data.address.city}</p>
                    </div>
                `;
  } catch (error) {
    container.innerHTML = `<p>Error ! please try again</p>`
  }
});
