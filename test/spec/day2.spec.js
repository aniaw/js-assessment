(function () {
    var answer = window.day2;

    describe('findTheBiggerBox', function () {
        iit('should return 2 (#box)', function () {
            expect(answer.findTheBiggerBox(8, 6, 5)).toEqual(2);
        });
        iit('should return 1 (#box)', function () {
            expect(answer.findTheBiggerBox(5, 1, 1)).toEqual(1);
        });
        iit('should return false for string value (#box)', function () {
            expect(answer.findTheBiggerBox(9, "string1", 2)).toBeFalsy();
        });


    });
    describe('makePerson', function () {
        iit('should return object Dawid Zegar', function () {
            expect(answer.makePerson("Dawid", "Zegar", 23)).toEqual({firstName: "Dawid", lastName: "Zegar", age: 23});
        });
        iit('should return object Jan Kowalski', function () {
            expect(answer.makePerson("Jan", "Kowalski", 44)).toEqual({firstName: "Jan", lastName: "Kowalski", age: 44});
        });


    });
    describe('invertString', function () {

        iit('should return 1tseT', function () {
            expect(answer.invertString("Test1")).toEqual("1tseT");
        });
        iit('should return false', function () {
            expect(answer.invertString(234)).toBeFalsy();
        });


    });
    describe('factorial', function () {

        iit('should return [1, 1]', function () {
            expect(answer.factorial(1)).toEqual([1, 1]);
        });
        iit('should return 6 element = 720', function () {
            expect(answer.factorial(7)[6]).toEqual(720);
        });

    });
    describe('sumObject', function () {

        iit('should return 38', function () {
            expect(answer.sumObject({param0: 2, param1: 5, param2: 9, param3: 2, param4: 20})).toEqual(38);
        });


    });

})();