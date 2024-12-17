
function x(people) {
return totalAge = people.reduce((acc, { age }) => {
    return acc + age; 
  }, 0);

}

const people = [
    { name: 'Juan', age: 25 },
    { name: 'Ana', age: 30 },
    { name: 'Carlos', age: 22 },
  ];

  console.log(x(people));