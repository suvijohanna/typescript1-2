interface User {
  username: string;
  email: string;
  bio?: string;
}

const user1: User = {
  username: "maija1",
  email: "maija@example.com",
  bio: "oispa kaljaa",
};

const user2: User = {
  username: "matti1",
  email: "matti@example.com",
};

function displayUserInfo(user: User): void {
  console.log("Username:", user.username);
  console.log("Email:", user.email);

  if (user.bio) {
    console.log("Bio:", user.bio);
  } else {
    console.log("Bio: puuttuu");
  }
}

displayUserInfo(user1);
displayUserInfo(user2);
