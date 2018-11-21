// set up a friend to test route

var friendsArray = [
    {
        "name":"Boris",
        "photo":"https://images.pexels.com/photos/37547/suit-business-man-business-man-37547.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260.jpeg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
    },
    {
        "name": "Clyde",
        "photo":"https://images.pexels.com/photos/4618/man-person-hat-fur.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260.jpeg",
        "scores":[
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ]
    },
    {
        "name": "lillix",
        "photo":"https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260.jpeg",
        "scores":[
            2,
            4,
            1,
            2,
            3,
            3,
            5,
            1,
            1,
            5 
        ]

    },
    {
        "name": "Meatloaf",
        "photo": "https://i.pinimg.com/236x/89/52/33/895233fb703b85c8b0f5bb8967eee354--meatloaf-musician-meatloaf-singer.jpg",
        "scores":[
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            1,
            5
        ]
    }
  ];
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;