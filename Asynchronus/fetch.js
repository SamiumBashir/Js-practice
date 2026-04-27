const processUserData = async () => {
  try {
    console.log("Loading...");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const evenusers = users.filter((user) => user.id % 2 === 0);
    const mappedUsers = evenusers.map((user) => {
      return {
        userName: user.name,
        city: user.address.city,
      };
    });
    const totalNameLength = mappedUsers.reduce((total, user) => {
      return total + user.userName.length;
    }, 0);

    console.log(mappedUsers);
    console.log(totalNameLength);
  } catch (error) {
    console.log("Can't Find Data", error);
  }
};

processUserData();
