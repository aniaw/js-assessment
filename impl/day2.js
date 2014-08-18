/**
 * Created by kronos on 14.08.14.
 */
(function () {
    'use strict';

    window.day2 = {
        //Napisz funckje przyjmująca 3 parametry która z tych parametrów będzie tworzyć obiekt.

        createArrayObject: function (obj1, obj2, obj3) {
            var obj = {property1: obj1, property2: obj2, property3: obj3};
            console.log(obj);
            return obj;
        },


        //Napisz funkcje która będzie sprawdzać co jest zwracane z kiedy się wartość zwracana jest true a kiedy return jest pusty.

        testIsAnyReturnFunction: function (condition) {
            if (condition) {
                return true;
            } else {
                return;
            }
        },

        //Napisz funkcje która będzie wykorzystywać tablce funcji o podanych zależnościach stworzy tablicę.

        arrayFunction: function (array) {
            var multiply = [function (a) {
                return a * a
            }, function (a) {
                return a * a * a
            }];
            for (var i = 0; i < array.length; i++) {
                if (i % 2 == 0) {
                    array[i] = multiply[0](array[i]);
                }
                else {
                    array[i] = multiply[0](array[i]);
                }
            }
            return array;
        },

        //Napisz funkcje która będzie wyszukiwać zadany string i bęðzie go zamieniać na inny.

        subString: function (searchString, list, changeString) {
            for (var i = 0; i < list.length; i++) {
                if (list[i] == searchString) {
                    list[i] = changeString;
                }
            }
            return list;
        },

        //Napisz funkcje która będzie dodawać właściwość do obiektu przyjmuje parametry obiekt, nazwę własności i wartość.

        addPropertiesToObjectCheckNumber: function (object, nameProperties, value) {
            object[nameProperties] = value;
            return object;




        }


    };


})();