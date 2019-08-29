var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];

console.log(JSON.stringify(items));


items.sort(
    function (a, b) {
        return b.name.length - a.name.length;
    }
)

console.log(JSON.stringify(items));



