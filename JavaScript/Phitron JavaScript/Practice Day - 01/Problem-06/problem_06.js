var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let longestFriend = friends[0];

for (let i = 1; i < friends.length; i++) {
  if (friends[i].length > longestFriend.length) {
    longestFriend = friends[i];
  }
}

console.log("Longest friend name:", longestFriend);
