const product={
    title : "BAll Pen",
    rating : 4.5 ,
    isDeal : true,
    offer:5,
    price: 1000.50
};

console.log(product);

const profile={
    userName:"Xenium HS",       //string
    posts:124,          //number
    followers: 33344420,        //number
    following:21,       //number
    isFollow:true       //boolean
};
console.log(profile);

console.log(profile.isFollow);
console.log(profile["following"]);
let array="Xenium"
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    document.writeln(element);
    
}
for (let i ; i<10;i++){
    console.log(i);
}