/**
 * Created by piniu on 14.08.14.
 */
describe('day2', function () {
    var answer = window.day2;

    describe('multiplyElementOfArray', function () {

        it('should array where elements with odd index are multiply by 4 and even index element are multiply by 3', function () {
            expect(answer.multiplyElementOfArray([2, 3, 4, 5])).toEqual([6, 12, 12, 20]);
        });

        it('should return unchanged array of string when input is a string array', function () {
            expect(answer.multiplyElementOfArray(["a", "b", "c", "d"])).toEqual(["a", "b", "c", "d"]);
        });

        it('should return  array with multipli numbers elements and unchanged string element when input is a string and number array', function () {
            expect(answer.multiplyElementOfArray(["a", 2, "c", 3])).toEqual(["a", 8, "c", 12]);
        });

    });

    describe('maxArray', function () {

        it('should return max element from array', function () {
            expect(answer.maxArray([2, 5, 7, 1, 3, 20, 10, 19])).toEqual(20);
        });

        it('should return false if array not contain numbers ', function () {
            expect(answer.maxArray(["a", "b", "c"])).toBeFalsy();
        });

        it('should return false when array contain numbers and other elements', function () {
            expect(answer.maxArray(["a", 7, "c", 3, "ala", "jankowalski", 10])).toBeFalsy();
        });
    });

    describe('swapString', function () {

        it('should swap string in array', function () {
            expect(answer.swapString(["ala", "ma", "kota"], "ala", "marysia")).toEqual(["marysia", "ma", "kota"]);
        });
        it('should return false if stringToSwap not exist in array', function () {
            expect(answer.swapString(["ala", "ma", "kota"], "marysia", "kot")).toBeFalsy();
        });
    });

    describe('getObject', function () {

        var list = [
            {name: "Jan", age: 10},
            {name: "Ala", age: 14},
            {name: "Andrzej", age: 30},
            {name: "Maria", age: 55}
        ];

        it('should return object from list', function () {
            expect(answer.getObject(list, "Ala")).toEqual({name: "Ala", age: 14});
        });

        it('should return false if object not exist', function () {
            expect(answer.getObject(list, "Rafał")).toBeFalsy();
        });
    });

    describe('doAdult', function () {

        var list = [
            {name: "Jan", age: 10},
            {name: "Ala", age: 14},
            {name: "Andrzej", age: 30},
            {name: "Maria", age: 55}
        ];
        var teenAge = list[0].age;
        var adultAge = list[3].age;

        beforeEach(function () {
            answer.doAdult(list);
        });
        iit('should change person age', function () {
            expect(list[0].age).not.toEqual(teenAge);
        });
        iit('should change person age to 18 if age<18', function () {
            expect(list[1].age).toEqual(18);
        });
        iit('should dont change age if aga>18', function () {
            expect(list[3].age).toEqual(adultAge);
        });

    });
});

