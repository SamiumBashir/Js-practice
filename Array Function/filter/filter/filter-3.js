const friends = ['Abir', 'Hasan', 'Sumi', 'Rakibul', 'Joy', 'Muntasir'];

const shortNameFriends = friends.filter(friend => {
    return friend.length <= 4
})

console.log(shortNameFriends);