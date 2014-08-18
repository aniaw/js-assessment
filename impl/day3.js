(function () {
    'use strict';

    // Do typu string dopisz  funkcje zliczajaca samogloski w dowolnym strungu
    String.prototype.countVowels = function () {
        var count = 0;
        var tmp = this.toLocaleLowerCase();
        for (var i = 0; i < this.length; i++) {
            if (tmp.charAt(i) == "a" || tmp.charAt(i) == "e" || tmp.charAt(i) == "i" || tmp.charAt(i) == "o" || tmp.charAt(i) == "y" || tmp.charAt(i) == "u") {
                count++;
            }

        }
        return count;

    };
    // Do typu array dopisz funkce zlepiajaca wszystkie elementy tablicy w jeden string. Separatorem jest spacja
    Array.prototype.arrayToString = function () {
        var str = "";
        for (var i = 0; i < this.length; i++) {
            str += this[i] + " ";
        }
        str = str.substring(0, str.length - 1);
        return str;

    };

    window.day3 = {
        // Dopisz funkcje w srodku obiektu usuwajaca z podanego obiektu wybrany atrybut i zwracajacy zmodyfikowany obiekt
        book: {
            title: "Kot w butach",
            author: "Jan Kowalski",
            numPages: 149,
            comments: "Good book!",

            // ...
            delProperty: function (property) {
                delete this[property];
                return this;
            }

        },

        // Napisz funkcje przyjmujaca dowolny obiekt i zwrawacaja w tablicy stringow nazwy atrybutow danego obiektu oraz ich wartosc
        propertyNames: function (obj) {
            var properties = [];
            for (var prop in obj) {
                properties.push([prop, obj[prop]]);
            }
            return properties;
        },

        // Napisz funkcje laczaca dwa dowolne obiekty (wszystkie atrybuty w jednym obiekcie)
        mergeObject: function (obj1, obj2) {
            if (typeof obj1 != "object" || typeof obj2 != "object") {
                return false;
            }
            for (var prop in obj2) {
                obj1[prop] = obj2[prop];
            }

            return obj1;
        },


    };
})();
