
var injectSections = (a, b) => {

    var newArr = [];
    for (var i = 0; i < a.length; i++) {
        var item = a[i];
        newArr.push('{ff}',item);
    }

    console.log(newArr);
    for (var j = 0; j < b.length; j++) {
        var itemJ = b[j];
        newArr[itemJ.index] = itemJ.content;
    };

    newArr.splice(newArr.indexOf('{ff}'), 1);
    console.log(newArr);
};

var result = injectSections(
  ['item1', 'item2', 'item3', 'item4', 'item5'],
  [
    { content: 'section1', index: 0 },
    { content: 'section2', index: 2 }
  ]
) // => ['section1', 'item1', 'item2', 'section2', 'item3', 'item4', 'item5']
