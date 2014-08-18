/**
 * Created by piniu on 14.08.14.
 */
(function () {
    'use strict';

    window.day2 = {

        //Napisz funkcje która wykorzytuje tablice wyrażeń funkcyjnych i modyfikuje podana tablice liczb mnożąc liczby
        //o indeksach parzystych przez 3 ,a nieparzystych przez 4
        multiplyElementOfArray: function (tab) {
            var fun = [function (a) {
                return a * 3;
            }, function (a) {
                return a * 4
            }];
            for (var i = 0; i < tab.length; i++) {
                if (typeof tab[i] == "number") {
                    if (i % 2 == 0) {

                        tab[i] = fun[0](tab[i]);

                    } else {

                        tab[i] = fun[1](tab[i]);

                    }
                }

            }
            return tab;
        },

        //Napisz funkcje zwracajaca maksymalny element z tablicy
        maxArray: function (tab) {
            var max = tab[0];
            for (var i = 0; i < tab.length; i++) {
                if (typeof tab[i] == "number") {
                    if (tab[i] > max) {
                        max = tab[i];
                    }
                } else {
                    return false;
                }
            }
            return max;

        },

        //Napisz funckje podmieniająca wybrany string w tablicy stringów
        swapString: function (tab, stringToSwap, stringToAdd) {
            for (var i = 0; i < tab.length; i++) {
                if (tab[i] == stringToSwap) {
                    tab[i] = stringToAdd;
                    return tab;
                }
            }
            return false;

        },

        //Napisz funkcje zwracajaca obiekt o określonej nazwie z tablicy obiektów
        getObject: function (list, name) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].name == name) {
                    return list[i];
                }
            }
            return false;

        },

        //Napisz funkcje modyfikujaca liste osob w taki sposób, że osoba ponizej 18 lat zostaje wpisane 18.
        //Pozostale informacje są niemodyfikowane
        doAdult: function (list) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].age < 18) {
                    list[i].age = 18;
                }
            }
        }

    };
})();