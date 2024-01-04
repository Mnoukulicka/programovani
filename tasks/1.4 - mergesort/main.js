function setup() {
    noCanvas();

    print(`List: ${randomList}`);

    print(`Sorted: ${mergesort(randomList)}`);
}
function merge(listA, listB) {
    let out = []
    var length = listA.length + listB.length
    for (let i = 0; i < length; i++){
        var minA = listA.length > 0 ? listA[0] : 1000
        var minB = listB.length > 0 ? listB[0] : 1000
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
function findMin(list) {
    var a = list[0]
    for (let i = 0; i < list.length; i++){
        if (a > list[i]) a = list[i]
    }
    return a
}
// Doplňte funkci mergesort, aby rekurzivně setřídila seznam
// Princip je jednoduchý:
//      - abychom setřídili seznam, stačí nám setřídit zvlášť jeho levou polovinu a
//        zvlášť jeho pravou polovinu a slít obě setřízené poloviny pomocí naší merge funkce
//      - na setřízení každé poloviny můžeme znovu použít funkci mergesort (která tedy setřídí poloviny každé poloviny atd.)
//      - seznam, který má pouze jeden prvek je vždy setřízený
// Trik je v tom že funkce může zavolat sama sebe
// Tomu se říká rekurze
// Je to často velmi jednoduchý způsob jak naprogramovat něco složitého, ale pozor na to aby opakované volání funkce někdy skončilo
// Je velmi lehké pomocí rekurze vytvořit program, který nikdy neskončí
function mergesort(list) {
    if (list.length == 1)
        return list
    var length = list.length/2
    var left = list.slice(0, length)
    var right = list.slice(length, list.length)
    
    left = mergesort(left)
    right = mergesort(right)
    return merge(left,right)
} 