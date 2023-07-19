const usernames = [
    "User1",
    "User2",
    "NotABot",
    "Lizzz",
    "Programanda"
];

const emails = [
    "User1@gmail.com",
    "User2@gmail.com",
    "notabot@hotmail.com",
    "lizzz@example.com",
    "programanda@example.com"
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUser = () =>`${getRandomArrItem(usernames)}`;

const getRandomEmail = () => `${getRandomArrItem(emails)}`;

module.exports = {getRandomUser, getRandomEmail};
