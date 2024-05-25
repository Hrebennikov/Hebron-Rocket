// task 10
const body = document.getElementById("body");

let users = [{
    name: 'Vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
  }, {
    name: 'Petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
  }, {
    name: 'Kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
  }, {
    name: 'Olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
  }, {
    name: 'Max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
  }, {
    name: 'Anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
  }, {
    name: 'Oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
  }, {
    name: 'Andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
  }, {
    name: 'Masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
  }, {
    name: 'Olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
  }, {
    name: 'Max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
  }];


for (const user of users) {
    // console.log(user.name);
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <p>${user.name}</p>
    <p>Age: ${user.age}</p>
    <p>Status: ${user.status}</p>
    `;
    body.appendChild(newDiv);

    // Address
    let addressUser = document.createElement("p");
    addressUser.innerHTML = `
    <p>Address: ${user.address.city}, ${user.address.country}, ${user.address.street}, ${user.address.houseNumber}</p>
    `;
    body.appendChild(addressUser);
}
