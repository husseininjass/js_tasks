// task1
// let a = {
//     name: "hussein"
// }
// let b = {
//     name : "hussein"
// }
// if(a.name === b.name){
//     console.log("same")
// }
// else{
//     console.log("not same");
// }
// ####################################################>
//task2
// const copy_to_Clipboard = str => {
//     const el = document.createElement('textarea');
//     el.value = str;
//     el.setAttribute('readonly', '');
//     el.style.position = 'absolute';
//     el.style.left = '-9999px';
//     document.body.appendChild(el);
//     const selected =
//       document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
//     el.select();
//     document.execCommand('copy');
//     document.body.removeChild(el);
//     if (selected) {
//       document.getSelection().removeAllRanges();
//       document.getSelection().addRange(selected);
//     }
//   };
// #################################################################>
// task3
// const csv_to_array = (data, delimiter = ',', omitFirstRow = false) =>
//   data
//     .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
//     .split('\n')
//     .map(v => v.split(delimiter));

// console.log(csv_to_array('a,b\nc,d')); 
// console.log(csv_to_array('a;b\nc;d', ';')); 
// console.log(csv_to_array('head1,head2\na,b\nc,d', ',', true));
// ######################################################################>
// task4

// const CSV_to_JSON = (data, delimiter = ',') => {
//     const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
//     return data
//       .slice(data.indexOf('\n') + 1)
//       .split('\n')
//       .map(v => {
//         const values = v.split(delimiter);
//         return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
//       });
//   };
//   console.log(CSV_to_JSON('col1,col2\na,b\nc,d')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
//   console.log(CSV_to_JSON('col1;col2\na;b\nc;d', ';')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
// #################################################################################>
// task5

// const JSON_to_CSV = (arr, columns, delimiter = ',') =>
//   [
//     columns.join(delimiter),
//     ...arr.map(obj =>
//       columns.reduce(
//         (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
//         ''
//       )
//     )
//   ].join('\n');

// console.log(JSON_to_CSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y']));
// console.log(JSON_to_CSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y'], ';'));
// ######################################################################################>
// task6

// const dig = (obj, target) =>
//   target in obj
// ? obj[target]
//     : Object.values(obj).reduce((acc, val) => {
//         if (acc !== undefined) return acc;
//         if (typeof val === 'object') return dig(val, target);
//       }, undefined);

// const data = {
//   level1: {
//     level2: {
//       level3: 'some data'
//     }
//   }
// };

// const dog = {
//     "status": "success",
//     "message": "https://images.dog.ceo/breeds/african/n02116738_1105.jpg"
// }
// console.log(dig(data, 'level3'));
// console.log(dig(data, 'level4'));
// console.log(dig(dog, 'message'));
// ########################################################################################>
// task7
// const digitize = n => [...`${n}`].map(i => parseInt(i));

// console.log(digitize(123));
// console.log(digitize(1230));
// #####################################################################>
// task8

// const pull = (arr, ...args) => {
//     let argState = Array.isArray(args[0]) ? args[0] : args;
//     let pulled = arr.filter((v, i) => !argState.includes(v));
//     arr.length = 0;
//     pulled.forEach(v => arr.push(v));
//     return pulled;
//   };
//   let arra1 = ['a', 'b', 'c', 'a', 'b', 'c'];
//   console.log(pull(arra1, 'a', 'c'));
//   let arra2 =  ['a', 'b', 'c', 'a', 'b', 'c'];
//   console.log(pull(arra2, 'b'));
// ###############################################################################>
// task9
 
// const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
// console.log(powerset([1, 2]));
// console.log(powerset([1, 2, 3]));
// console.log(powerset([1, 2, 3, 4]));
// #####################################################################################>
// task10

// const pull_at_Index = (arr, pullArr) => {
//     let removed = [];
//     let pulled = arr
//       .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
//       .filter((v, i) => !pullArr.includes(i));
//     arr.length = 0;
//     pulled.forEach(v => arr.push(v));
//     return removed;
//   };
//   let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
//   console.log(pull_at_Index(arra1, [1, 3]));
//   let arra2 =  [1, 2, 3, 4, 5, 6, 7];
//   console.log(pull_at_Index(arra2, [4]));
  


