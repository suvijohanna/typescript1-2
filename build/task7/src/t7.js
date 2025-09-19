"use strict";
const user1 = {
    username: "maija1",
    email: "maija@example.com",
    bio: "oispa kaljaa",
};
const user2 = {
    username: "matti1",
    email: "matti@example.com",
};
function displayUserInfo(user) {
    console.log("Username:", user.username);
    console.log("Email:", user.email);
    if (user.bio) {
        console.log("Bio:", user.bio);
    }
    else {
        console.log("Bio: puuttuu");
    }
}
displayUserInfo(user1);
displayUserInfo(user2);
