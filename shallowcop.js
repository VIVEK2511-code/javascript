let p1 = {
    name: "vivek",
    age: 22,
    college: "rit",

    address: {
        state: "bihar",
        district: "sheohar",
        post: "sarwarpur"
    }
}

let p2 = {
    ...p1   // Shallow copy
}

p2.name = "golu";
p2.age = 20;
  //p2.address.state="up"
  //spread opearator(shallow copy) cant copy to ineer object of object

console.log(p1);
console.log(p2);
