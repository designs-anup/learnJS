const programming = ["js", "cpp", "rb", "swift", "java", "py"]

// const coadingValues = programming.forEach((item) => {
//     console.log(item);
// })

// console.log(coadingValues); // undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
const newNums = myNums.filter( (num) => num > 4 )
console.log(newNums);
*/

/*
const newNums = []
myNums.forEach((item)=>{
    if(item > 4){
        newNums.push(item)
    }
})
console.log(newNums);
*/

const books = [
    {title : 'Book One', genre : 'Friction', publish : 1981, edition : 2004},
    {title : 'Book Two', genre : 'Non-Friction', publish : 1992, edition : 2008},
    {title : 'Book Three', genre : 'History', publish : 1999, edition : 2007},
    {title : 'Book Four', genre : 'Non-Friction', publish : 1989, edition : 2010},
    {title : 'Book Five', genre : 'Science', publish : 1909, edition : 2014},
    {title : 'Book Six', genre : 'Friction', publish : 1987, edition : 1996},
    {title : 'Book Seven', genre : 'History', publish : 1986, edition : 2010},
    {title : 'Book Eight', genre : 'Non-Friction', publish : 2001, edition : 2006},
    {title : 'Book Nine', genre : 'Science', publish : 2005, edition : 2015},
]

const userBooks = books.filter((item)=>{
    return item.genre === 'History'
})

console.log(userBooks);