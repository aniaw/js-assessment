describe('day2', function () {
    var answer = window.day2;

    describe('createArrayObject', function () {
        iit('should return array object numeric', function () {
            expect(answer.createArrayObject(15, 1, 3)).toEqual({property1: 15, property2: 1, property3: 3});
        });
        iit('should return array object string and numeric', function () {
            expect(answer.createArrayObject('asdas', 'asd', 3)).toEqual({property1: 'asdas', property2: 'asd', property3: 3});
        });

        iit('should return array object string and numeric with undefined', function () {
            expect(answer.createArrayObject(undefined, 'asd', 3)).toEqual({property1: undefined, property2: 'asd', property3: 3});
        });

    });

    describe("testIsAnyReturnFunction", function () {
        iit('should return true', function () {
            expect(answer.testIsAnyReturnFunction(true)).isTrue;
            expect(answer.testIsAnyReturnFunction(true)).toEqual(true);

        });
        iit('should return false or undefined', function () {
            expect(answer.testIsAnyReturnFunction(false)).toBe(undefined);
            expect(answer.testIsAnyReturnFunction(false)).toBeFalsy();
        });
    });

    describe("arrayFunction", function () {
        iit('Should return depends of index even a square not even cube. ', function () {
            expect(answer.arrayFunction([1, 2, 3, 4])).toEqual([1, 4, 9, 16]);

        });
    });

    describe("subString", function () {
        iit('should return array string change string', function () {
            expect(answer.subString("kota", ['Ala', 'ma', 'kota'], 'psa')).toEqual(['Ala', 'ma', 'psa']);

        });
    });
    describe("addPropertiesToObjectCheckNumber", function () {
        iit('should return change object input value number', function () {
            expect(answer.addPropertiesToObjectCheckNumber({properties1: 20, properties2: 30}, "properties3", 1234)).toEqual({properties1: 20, properties2: 30, properties3: 1234});

        });

        iit("should return change object input string asd", function () {
            expect(answer.addPropertiesToObjectCheckNumber({properties1: 20, properties2: 30}, 'properties3', 'asd')).toEqual({properties1: 20, properties2: 30, properties3: 'asd'});

        });
    });


});