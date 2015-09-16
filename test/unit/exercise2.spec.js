(function ()
{
    'use strict';

    describe('exercise2', function ()
    {
        var exercise2 = window.exercise2;
        describe('createObject', function ()
        {
            it('should return object with 15, 1 and 3 set as the properties values', function ()
            {
                expect(exercise2.createObject(15, 1, 3)).toEqual({property1: 15, property2: 1, property3: 3});
            });
            it('should return object with John, Smith and 1 set as the properties values', function ()
            {
                expect(exercise2.createObject('John', 'Smith', 1)).toEqual({property1: 'John', property2: 'Smith', property3: 1});
            });
            it('should return object with undefined, text and 15 set as the properties values', function ()
            {
                expect(exercise2.createObject(undefined, 'text', 15)).toEqual({property1: undefined, property2: 'text', property3: 15});
            });
        });

        describe('reverseNumber', function ()
        {
            it('should reverse the number', function ()
            {
                expect(exercise2.reverseNumber(1234)).toEqual(4321);
            });
            it('should not return a string', function ()
            {
                expect(exercise2.reverseNumber(5678)).not.toBe('8765');
            });
            it('should return false when "number" is string', function ()
            {
                expect(exercise2.reverseNumber('abcs')).toBe(false);
            });
            it('should return single number', function ()
            {
                expect(exercise2.reverseNumber(5)).toBe(5);
            });
        });

        describe('squareOrCube', function ()
        {
            it('should return array of square odd numbers and cube even numbers', function ()
            {
                expect(exercise2.squareOrCube([1, 2, 3, 4])).toEqual([1, 8, 9, 64]);
                expect(exercise2.squareOrCube([5, 6, 7, 8])).toEqual([25, 216, 49, 512]);
            });
            it('should return array of square odd numbers', function ()
            {
                expect(exercise2.squareOrCube([1, 3, 5, 7])).toEqual([1, 9, 25, 49]);
            });
            it('should return array of cube even numbers', function ()
            {
                expect(exercise2.squareOrCube([2, 4, 8, 10])).toEqual([8, 64, 512, 1000]);
            });

        });

        describe('swapString', function ()
        {
            it('should swap string in array', function ()
            {
                expect(exercise2.swapString(['Maria', 'has', 'a cat'], 'Maria', 'Jane')).toEqual(['Jane', 'has', 'a cat']);
                expect(exercise2.swapString(['Maria', 'has', 'a cat'], 'has', 'does not have')).toEqual(['Maria', 'does not have', 'a cat']);
            });

            it('should swap every string in array', function ()
            {
                expect(exercise2.swapString(['Maria', 'has', 'a cat', 'and', 'Maria', 'has', 'a dog'], 'Maria', 'Jane'))
                        .toEqual(['Jane', 'has', 'a cat', 'and', 'Jane', 'has', 'a dog']);
                expect(exercise2.swapString(['Maria', 'has', 'a cat', 'and', 'Maria', 'has', 'a dog'], 'has', 'does not have'))
                        .toEqual(['Maria', 'does not have', 'a cat', 'and', 'Maria', 'does not have', 'a dog']);
            });
            it('should return false when "searchString" does not exist in array', function ()
            {
                expect(exercise2.swapString(['Maria', 'has', 'a cat'], 'Jane', 'Dog')).toBeFalsy();
            });
        });

        describe('multiplyElementOfArray', function ()
        {
            it('should return array where elements with odd index are multiply by 4 and even index element are multiply by 3', function ()
            {
                expect(exercise2.multiplyElementOfArray([2, 3, 4, 5])).toEqual([6, 12, 12, 20]);
                expect(exercise2.multiplyElementOfArray([1, 8, 10, 10])).toEqual([3, 32, 30, 40]);
            });

            it('should return unchanged array of string', function ()
            {
                expect(exercise2.multiplyElementOfArray(['a', 'b', 'c', 'd'])).toEqual(['a', 'b', 'c', 'd']);
            });

            it('should return array with multiply numbers elements and unchanged string element', function ()
            {
                expect(exercise2.multiplyElementOfArray(['a', 2, 'c', 3])).toEqual(['a', 8, 'c', 12]);
            });
        });

        describe('maxArray', function ()
        {

            it('should return maximum element from array', function ()
            {
                expect(exercise2.maxArray([2, 5, 7, 1, 3, 20, 10, 19])).toEqual(20);
                expect(exercise2.maxArray([1, 1, 1, 1, 1, 2, 2, 2])).toEqual(2);
            });

            it('should return false when array not contain numbers ', function ()
            {
                expect(exercise2.maxArray(['a', 'b', 'c'])).toBe(false);
            });

            it('should return false when array contain numbers and other elements', function ()
            {
                expect(exercise2.maxArray(['a', 7, 'c', 3, 'ala', 11, 10])).toBe(false);
            });
        });

        describe('getObject', function ()
        {
            var list = [
                {name: 'John', age: 10},
                {name: 'Jack', age: 14},
                {name: 'Jenny', age: 30},
                {name: 'Maria', age: 55}
            ];

            it('should return object from list', function ()
            {
                expect(exercise2.getObject(list, 'Maria')).toEqual({name: 'Maria', age: 55});
                expect(exercise2.getObject(list, 'Jack')).toEqual({name: 'Jack', age: 14});
            });

            it('should return false if object not exist', function ()
            {
                expect(exercise2.getObject(list, 'Martin')).toBe(false);
            });
        });

        describe('doAdult', function ()
        {
            var peopleArray = [
                {name: 'John', age: 10},
                {name: 'Jack', age: 14},
                {name: 'Jenny', age: 30},
                {name: 'Maria', age: 55},
                {name: 'Steve', age: 17}
            ];

            var peopleArray2 = [
                {name: 'John', age: 18},
                {name: 'Jack', age: 17},
                {name: 'Jenny', age: 10},
                {name: 'Maria', age: 15},
                {name: 'Steve', age: 90}
            ];
            var adultList = [
                {name: 'John', age: 18},
                {name: 'Jack', age: 18},
                {name: 'Jenny', age: 30},
                {name: 'Maria', age: 55},
                {name: 'Steve', age: 18}
            ];
            var adultList2 = [
                {name: 'John', age: 18},
                {name: 'Jack', age: 18},
                {name: 'Jenny', age: 18},
                {name: 'Maria', age: 18},
                {name: 'Steve', age: 90}
            ];

            beforeEach(function ()
            {
                exercise2.doAdult(peopleArray);
                exercise2.doAdult(peopleArray2);
            });

            it('should update peopleArray', function ()
            {
                expect(peopleArray).toEqual(adultList);
                expect(peopleArray2).toEqual(adultList2);
            });
        });

        describe('findTheBiggerBox', function ()
        {
            describe('general', function ()
            {
                it('should return second box', function ()
                {
                    expect(exercise2.findTheBiggerBox(8, 6, 5)).toEqual(2);
                    expect(exercise2.findTheBiggerBox(8, 12, 5)).toEqual(2);
                });
                it('should return first box', function ()
                {
                    expect(exercise2.findTheBiggerBox(8, 2, 1)).toEqual(1);
                    expect(exercise2.findTheBiggerBox(10, 3, 5)).toEqual(1);
                });
            });
            describe('when parameters are not numbers', function ()
            {
                it('should return false when "x" is a string)', function ()
                {
                    expect(exercise2.findTheBiggerBox('text', 9, 2)).toBe(false);
                });
                it('should return false when "y" is a string)', function ()
                {
                    expect(exercise2.findTheBiggerBox(9, 'text', 2)).toBe(false);
                });
                it('should return false when "z" is a string)', function ()
                {
                    expect(exercise2.findTheBiggerBox(9, 2, 'text')).toBe(false);
                });
            });
        });

        describe('makePerson', function ()
        {
            it('should return object with firstName, lastName and age', function ()
            {
                expect(exercise2.makePerson('John', 'Smith', 23)).toEqual({firstName: 'John', lastName: 'Smith', age: 23});
                expect(exercise2.makePerson('Jack', 'Swan', 44)).toEqual({firstName: 'Jack', lastName: 'Swan', age: 44});
            });
        });

        describe('invertString', function ()
        {
            it('should return inverse the string', function ()
            {
                expect(exercise2.invertString('Test1312')).toEqual('2131tseT');
                expect(exercise2.invertString('a b c d')).toEqual('d c b a');
            });
            it('should return false when "str" is a number', function ()
            {
                expect(exercise2.invertString(234)).toBe(false);
            });
        });

        describe('factorial', function ()
        {
            it('should return factorial of 1', function ()
            {
                expect(exercise2.factorial(1)).toEqual([1, 1]);
            });
            it('should return factorial of 4', function ()
            {
                expect(exercise2.factorial(4)).toEqual([1, 1, 2, 6, 24]);
            });
            it('should return factorial of 7', function ()
            {
                expect(exercise2.factorial(7)).toEqual([1, 1, 2, 6, 24, 120, 720, 5040]);
            });

        });
        describe('sumObject', function ()
        {
            it('should sum all values of properties', function ()
            {
                expect(exercise2.sumObject({param0: 2, param1: 5, param2: 9, param3: 2, param4: 20})).toEqual(38);
                expect(exercise2.sumObject({param0: 1, param1: 2, param2: 3, param3: 2})).toEqual(8);
                expect(exercise2.sumObject({param0: 10, param1: 11})).toEqual(21);
            });

        });
    });
})();
