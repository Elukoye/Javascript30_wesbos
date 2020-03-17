const inventors =[
    {first:'Al',last:'Baba',year:1980,passed:2002},
    {first:'All',last:'bBaba',year:1980,passed:2003},
    {first:'Albabu',last:'Babaaa',year:1960,passed:2004},
    {first:'Aliyah',last:'mBaba',year:1940,passed:2020},
    {first:'Alladin',last:'Baaab',year:1958,passed:2012},
    {first:'Al-nudin',last:'Bbabma',year:1970,passed:2015},
]

const People =[
    'Ben, Black',"Jon,Whiskers","Paul,Garret","Pipper ,peet",
    'en, Blak',"Jon,Whisk","ul,Garre","per ,peeti",
    'Barn, Blaq',"shon,kers","Pau,Ga","whipper ,pete",
    'Yen, lack',"Yvon,iskers","Paullette,ret","Yipper ,peetah",
    'GWen, Bluck',"tonny,ers","Pau,warret","peirr ,leet",
    'Boyd, plack',"Jonah,hiss","Paulo,Gappet","Pypper ,pit"
]

// filter inventors born in 1980
const eighties = inventors.filter(inventor =>{
    if( inventor.year > 1979 && inventor.year < 1990){
        return true;
    }
});
console.log(eighties)

// map out first and last names of inventors
const fullNames = inventors.map(inventor =>`${inventor.first} ${inventor.last}`)
console.log(fullNames);

// sort inventors birthdate from youngest to oldest
const order = inventors.sort((a,b)=> a.year > b.year ? 1 : -1)
console.log(order)

// reduce -> how many years did all the inventors live ?
const totalYears = inventors.reduce((total,inventor)=> {
    return total + (inventor.passed - inventor.year)
},0)
console.log(totalYears)

// sort inventors by years lived 
const yearsLived = inventors.sort((a,b) => {
    const oldest = a.passed  - a.year 
    const next = b.passed -b.year 
    return oldest > next ?  -1 : 1
})
console.log(yearsLived)


// sort the people array alphabetically
const alphabeticalOrder = People.sort((lastOne,nextOne) => {
    const [alast,afirst] = lastOne.split(", ");
    const [blast,bfirst] = nextOne.split(", ");
    return alast > blast ? 1 : -1
})
console.log(alphabeticalOrder)

const data = ['car','car', 'truck','truck','bike','walk','car','van','bike',
'walk','car','van','car','truck']
// sum up instances of each using reduce 
const transportation = data.reduce((obj,item) => {
    if(!obj[item]){
        obj[item]=0
    }obj[item] += 1;
    return obj
},{})
console.log(transportation)


