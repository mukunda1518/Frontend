
// GET
let options = {
    method: "GET"
}
let url = "https://gorest.co.in/public-api/users";

fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        console.log(jsonData);
    });


// POST

// let data = {
//     name: "Rahul",
//     email: "rahul1234@gmail.com",
//     gender: "Male",
//     status: "Active"
    
// };
// let options = {
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//         Authorization: 'Bearer c37a73163d46981db40dd68a9872a511c915977a4c3ec5306d5eb0340741378f'
//     },
//     body: JSON.stringify(data)
// }

// let url = "https://gorest.co.in/public-api/users";

// fetch(url, options)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(jsonData) {
//         console.log(jsonData);
//     });


// // PUT


// let data = {
//     name: "Rahul 123"
    
// };
// let options = {
//     method: "PUT",
//     headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//         Authorization: 'Bearer c37a73163d46981db40dd68a9872a511c915977a4c3ec5306d5eb0340741378f'
//     },
//     body: JSON.stringify(data)
// }

// let url = "https://gorest.co.in/public-api/users/5102";

// fetch(url, options)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(jsonData) {
//         console.log(jsonData);
//     });


// // DELETE

// let options = {
//     method: "DELETE",
//     headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//         Authorization: 'Bearer c37a73163d46981db40dd68a9872a511c915977a4c3ec5306d5eb0340741378f'
//     }
// }

// let url = "https://gorest.co.in/public-api/users/5102";

// fetch(url, options)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(jsonData) {
//         console.log(jsonData);
//     });