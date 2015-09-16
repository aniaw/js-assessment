(function ()
{
    'use strict';

    describe('exercise3', function ()
    {
        var exercise3 = window.exercise3;
        var boxList1 = {box1: {height: 10, width: 5, length: 5}, box2: {height: 7, width: 2, length: 7}, box3: {height: 5, width: 7, length: 10}};
        var boxList2 = {box1: {height: 1, width: 9, length: 1}, box2: {height: 1, width: 2, length: 2}, box3: {height: 3, width: 3, length: 3}};

        describe('countVowels', function ()
        {
            it('should return count of vowels ', function ()
            {
                expect('I am some text'.countVowels()).toEqual(5);
                expect('aeiouy'.countVowels()).toEqual(6);
            });
            it('should return 0 for empty string', function ()
            {
                expect(''.countVowels()).toEqual(0);
            });
        });

        describe('arrayToString', function ()
        {
            it('should return string from the array of strings', function ()
            {
                expect(['one', 'two', 'three'].arrayToString()).toEqual('one two three');
            });
            it('should return string from the array of strings and numbers', function ()
            {
                expect(['one', 2, 'three', 4].arrayToString()).toEqual('one 2 three 4');
            });
            it('should return from the array of different types of elements', function ()
            {
                expect([false, 0, 'one', 2].arrayToString()).toEqual('false 0 one 2');
            });
        });

        describe('addNumber', function ()
        {
            var numbers = [1, -2, 10, 4, 5];

            it('should add number 10 to number 1', function ()
            {
                expect(numbers[0].addNumber(10)).toEqual(11);
            });
            it('should add number 15 to number 10', function ()
            {
                expect(numbers[2].addNumber(15)).toEqual(25);
            });
            it('should add number -2 to number 20', function ()
            {
                expect(numbers[1].addNumber(20)).toEqual(18);
            });
        });

        describe('isInTheRange', function ()
        {
            var number = 123;
            it('should return true when number is in the range', function ()
            {
                expect(number.isInTheRange(11, 140)).toEqual(true);
                expect(number.isInTheRange(122, 125)).toEqual(true);
            });
            it('should return undefined when "stop" is less than "start"', function ()
            {
                expect(number.isInTheRange(42, 21)).toEqual(undefined);
            });
            it('should return false when number is out of the range', function ()
            {
                expect(number.isInTheRange(1, 21)).toEqual(false);
            });
        });


        describe('delProperty', function ()
        {
            it('should return book object without numPages property', function ()
            {
                expect(exercise3.book.delProperty('numPages')).toEqual({
                    title: 'The Lord of the Rings',
                    author: 'John Ronald Reuel Tolkien',
                    comments: ['Good book!', 'I really like this book'],
                    delProperty: jasmine.any(Function)
                });
            });

            it('should return book object without title property', function ()
            {
                expect(exercise3.book.delProperty('title')).toEqual({
                    author: 'John Ronald Reuel Tolkien',
                    comments: ['Good book!', 'I really like this book'],
                    delProperty: jasmine.any(Function)
                });
            });
            it('should return book object without comments property', function ()
            {
                expect(exercise3.book.delProperty('comments')).toEqual({
                    author: 'John Ronald Reuel Tolkien',
                    delProperty: jasmine.any(Function)
                });
            });

            it('should return book object without comments property', function ()
            {
                expect(exercise3.book.delProperty('delProperty')).toEqual({author: 'John Ronald Reuel Tolkien'});
            });

        });

        describe('propertyNames', function ()
        {
            it('should return array of property names and values', function ()
            {
                expect(exercise3.propertyNames({name: 'John', age: 34, email: 'john@email.com'})).toEqual([
                    ['name', 'John'],
                    ['age', 34],
                    ['email', 'john@email.com']
                ]);

                expect(exercise3.propertyNames({a: 1, b: false, c: 'text'})).toEqual([
                    ['a', 1],
                    ['b', false],
                    ['c', 'text']
                ]);
            });

            it('should return empty array when object has no properties', function ()
            {
                expect(exercise3.propertyNames({})).toEqual([]);
            });
        });

        describe('mergeObject', function ()
        {
            describe('when input values are objects', function ()
            {

                it('should return object with properties from two objects', function ()
                {
                    expect(exercise3.mergeObject({name: 'John', age: 34}, {email: 'john@email.com', gender: 'male'})).toEqual({
                        name: 'John',
                        age: 34,
                        email: 'john@email.com',
                        gender: 'male'
                    });

                    expect(exercise3.mergeObject({title: 'The Lord of the Rings'}, {
                        author: 'John Ronald Reuel Tolkien',
                        comments: ['Good book!', 'I really like this book']
                    })).toEqual({
                        title: 'The Lord of the Rings',
                        author: 'John Ronald Reuel Tolkien',
                        comments: ['Good book!', 'I really like this book']
                    });
                });
            });

            describe('when input values are not objects', function ()
            {
                it('should return false when mergeFrom is not object', function ()
                {
                    expect(exercise3.mergeObject(true, {title: 'The Lord of the Rings', comments: ['Good book!']})).toEqual(false);
                });

                it('should return false when mergeFrom is not object', function ()
                {
                    expect(exercise3.mergeObject({name: 'John', age: 11}, 'Jack')).toEqual(false);
                });
            });
        });

        describe('countCharInProperties', function ()
        {
            var book;
            beforeEach(function ()
            {
                book = {
                    title: 'The Lord of the Rings',
                    author: 'John Ronald Reuel Tolkien'
                };
            });
            it('should count the numbers of "a" character in all properties of an object', function ()
            {
                expect(exercise3.countCharInPropertiesValues(book, 'a')).toEqual(1);
            });
            it('should count the numbers of "l" character in all properties of an object', function ()
            {
                expect(exercise3.countCharInPropertiesValues(book, 'l')).toEqual(4);
            });
            it('should count the numbers of "r" character in all properties of an object', function ()
            {
                expect(exercise3.countCharInPropertiesValues(book, 'r')).toEqual(4);
            });
            it('should count the numbers of "e" character in all properties of an object', function ()
            {
                expect(exercise3.countCharInPropertiesValues(book, 'e')).toEqual(5);
            });
        });

        describe('getWidth', function ()
        {
            it('should return the array with boxes width', function ()
            {
                expect(exercise3.getWidth(boxList1)).toEqual(['box1: 5', 'box2: 2', 'box3: 7']);
                expect(exercise3.getWidth(boxList2)).toEqual(['box1: 9', 'box2: 2', 'box3: 3']);
            });

            it('should return empty array if the list is empty', function ()
            {
                expect(exercise3.getWidth({})).toEqual([]);
            });
        });

        describe('getVolume', function ()
        {
            it('should return volume of boxes in string array, last element should be sum of all volumes saved as number', function ()
            {
                expect(exercise3.getVolume(boxList1)).toEqual(['box1 volume: 250', 'box2 volume: 98', 'box3 volume: 350', 698]);
                expect(exercise3.getVolume(boxList2)).toEqual(['box1 volume: 9', 'box2 volume: 4', 'box3 volume: 27', 40]);
            });
            it('should return empty array if the list is empty', function ()
            {
                expect(exercise3.getVolume({})).toEqual([0]);
            });

        });

        describe('getMaxVolume', function ()
        {
            it('should max volume from array contains boxes', function ()
            {
                expect(exercise3.getMaxVolume(boxList1)).toEqual(350);
                expect(exercise3.getMaxVolume(boxList2)).toEqual(27);
            });
        });

        describe('changePropertyName', function ()
        {
            var person;
            beforeEach(function ()
            {
                person = {firstName: 'John', secondName: 'Smith', age: 35};
            });

            it('should change "firstName" to "name" property', function ()
            {
                expect(exercise3.changePropertyName(person, 'firstName', 'name')).toEqual(true);
                expect(person).toEqual({name: 'John', secondName: 'Smith', age: 35});
            });

            it('should change "secondName" to "lastName" property', function ()
            {
                expect(exercise3.changePropertyName(person, 'secondName', 'lastName')).toEqual(true);
                expect(person).toEqual({firstName: 'John', lastName: 'Smith', age: 35});
            });
            it('should return false when property to change not exist', function ()
            {
                expect(exercise3.changePropertyName(person, 'email', 'contact')).toEqual(false);
            });

        });

        describe('makeObject', function ()
        {
            it('should make object from 2D array', function ()
            {
                expect(exercise3.makeObject([
                    ['name', 'John'],
                    ['mode', 'normal'],
                    ['age', 31]
                ])).toEqual({name: 'John', mode: 'normal', age: 31});
                expect(exercise3.makeObject([
                    ['a', 0],
                    ['b', 1]
                ])).toEqual({a: 0, b: 1});
            });

            it('should return false when array has more than 2 dimensions', function ()
            {
                expect(exercise3.makeObject([
                    ['name', 'first'],
                    ['type', 1, 3],
                    ['mode', 'normal']
                ])).toBe(false);
            });

            it('should return false when array has less than 2 dimensions', function ()
            {
                expect(exercise3.makeObject([
                    ['name'],
                    ['type', 1, 3],
                    ['mode', 'normal']
                ])).toBe(false);
            });
        });
    });
})();
