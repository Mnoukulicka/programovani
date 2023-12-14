function setup() {
    noCanvas();

    print(`List: ${randomList}`);

    print(`Sorted: ${mySort(randomList)}`);
}

function findMin(list) {
    var a = list[0]
    for (let i = 0; i < list.length; i++){
        if (a > list[i]) a = list[i]
    }
    return a
}

// Doplňtě funkci mySort, aby vrátila setřízený seznam (od nejmenšího po největší)
// Užitečné funkce:
//      list.indexOf(x) - vrátí index položky x (na kolikáté pozici se v seznamu nachází)
//      list.splice(index, count) - smaže několik položek se seznamu
//          - začne na pozici index a smaže count položek
//          - speciálně tedy list.splice(index, 1) smaže položku na pozici index
//      list.push(x) - přidá na konec seznamu novou položku s hodnotou x
//      while(cond) - opakuje něco dokud platí podmínka cond (funguje podobně jako for)
// Tip - můžete vždy najít nejmenší číslo v seznamu, smazat ho a přidat ho do nového seznamu,
// nový seznam bude potom obsahovat stejná čísla jako původní, ale ve správněm pořadí
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






// alternativně můžete zkusit použít algoritmus 'bubble sort', který prochází seznam po dvojicích a
// prohazuje dvojice které jsou špatně seřazené, dokud není seznam celý správně seřazený
// např. seznam [2, 3, 1]
//      (2, 3) jsou správně
//      (3, 1) ne => prohodíme
//      máme seznam [2, 1, 3]
//      (2, 1) nejsou správně => prohodíme
//      máme seznam [1, 2, 3]
//      hotovo