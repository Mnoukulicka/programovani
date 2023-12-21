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
    var length = list.length
    for (let i = 0; i < length; i++){
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
    var length = listA.length + listB.length
    for (let i = 0; i < length; i++){
        var minA = listA.length > 0 ? listA[0] : 1000
        var minB = listB.length > 0 ? listB[0] : 1000
        print(minA, minB)
        if (listB.length == 0 || minA < minB) {
            out.push(minA)
            listA.splice(0, 1)
        }
        else {
            out.push(minB)
            listB.splice(0, 1)
        }
        if (listA.length == 0)  minA = 101
        if (listB.length == 0)  minB = 101
    }
    return out;
}   