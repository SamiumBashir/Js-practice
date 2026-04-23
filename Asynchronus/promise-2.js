function getUserData(userId) {
  return new Promise((resolve, reject) => {
    console.log("Checking...");
    setTimeout(() => {
      if (userId === 101) {
        resolve({ id: 101, name: "Nothing", role: "Nothing"});
      } else {
        reject("User Not Found");
      }
    }, 1500);
  });
}

async function showResult() {
  try {
    const result = await getUserData(101);
    console.log(result);
  } catch (error) {
    console.log("error");
  }
}

showResult();
