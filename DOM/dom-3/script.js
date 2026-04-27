const jsonString = `{
        "name" = "Alu",
        "email" = "alu@gmail.com"
        "skills" = ['js', 'css', 'c++']
}`;

const btn = document.getElementById("load-btn");
const userContainer = document.getElementById("user-container");

btn.addEventListener("click", () => {
  const user = JSON.parse(jsonString);

  const skillList = user.skills.map((skill) => `li ${Skill}`).join("");

  const htmlCard = ` <div>
    <h2>${user.name}</h2>
    <p>${user.email}</p>
    <div>
        <h2>Skill List</h2>
        <ul>
            ${skillList}
        </ul>
    </div>
</div>`;

  userContainer.innerHTML = htmlCard;
});
