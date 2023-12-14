function setup() {
    noCanvas();

    print(`ListA: ${sortedListA}`);
    print(`ListB: ${sortedListB}`);

    print(`Merged: ${merge(sortedListA, sortedListB)}`);
}
function findMin(list) {
    var a = list[0]
    for (let i = 0; i < list.length; i++){
        if (a > list[i]) a = list[i]
    }
    return a
}
function mySort(list) {
    var list2 = []
    var min = list[0]
    var lenght = list.lenght
    for (let i = 0; i < lenght; i++){
      min = findMin(list)
      list2.push (findMin(list))
      list.splice(list.indexOf(min), 1)
    }
    return list2
}
// Funkce merge dostance dva setřízené seznamy.
// Doplňte ji, aby seznamy 'slila' do jednoho setřízeného seznamu.
// Není potřeba nic znovu třídit, stačí přidávat do výsledného seznamu ve správném pořadí
function merge(listA, listB) {
    let out = []
    var a = sortedListA[0]
    for (let i = 0; i < sortedListA.lenght; i++){
        out.push sortedListA[i]
        out.push sortedListB[i]
    }
    mySort(out)

    return out;
}