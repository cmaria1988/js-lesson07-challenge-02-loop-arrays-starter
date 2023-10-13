var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];

//Log out the programmingLanguages
console.log(programmingLanguages);

//for...of loops
for (var pl of programmingLanguages){
  console.log(`I want to learn ${pl}`);
}

//foreach
programmingLanguages.forEach(function(pl, index){
  var newpl = pl.toUpperCase();
  console.log(`${index+1}. ${newpl}`);
});

//filter
var updatedLanguange = programmingLanguages.filter(function(item){
  return item.includes("y");
});

//Log out the updatedLanguanges
console.log(updatedLanguange);