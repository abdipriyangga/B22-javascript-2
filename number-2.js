const nama = [
"Abigail", "Alexandra", "Alison",
"Amanda", "Angela", "Bella",
"Carol", "Caroline", "Carolyn",
"Deirdre", "Diana", "Elizabeth",
"Ella", "Faith", "Olivia", "Penelope"]

function searchName(huruf, pembatas, callback) {
    const nameFilter = nama.filter((kata) => {
        return kata.toLowerCase().includes(huruf)
    })
    if(nameFilter != 0)
    {
        return nameFilter.slice(0, pembatas)
    }
    else
    {
        console.log("Kata tidak Cocok!")
    }
    callback(nameFilter) 
}

const showName = (lists) => {
  console.log("ini callback")
  lists.map(list => console.log(lists))
}
console.log(searchName("an", 3, showName))