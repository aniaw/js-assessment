(function () {
    var answer = window.day3;

    describe('book.delProperty', function () {
        it('should return book without numPages', function () {
            expect(answer.book.delProperty("numPages")).toEqual({title: "Kot w butach", author: "Jan Kowalski", comments: "Good book!", delProperty: jasmine.any(Function)});
        });
        it('should answer undefined for request numPages', function () {
            expect(answer.book.delProperty("numPages").numPages).toEqual(undefined);
        });


    });


    describe('propertyNames', function () {
        it('should array of property names and values', function () {
            expect(answer.propertyNames({name: "Jan", age: 34})).toEqual([
                ["name", "Jan"],
                ["age", 34]
            ]);
        });
        it('should array of indeks and values', function () {
            expect(answer.propertyNames(["raz", "dwa"])).toEqual([
                ["0", "raz"],
                ["1", "dwa"]
            ]);
        });


    });
    describe('mergeObject', function () {
        it('should return one object cointins all atributes', function () {
            expect(answer.mergeObject({name: "Jan", age: 34}, {title: "Kot w butach", comments: "Good book!"})).toEqual({ name: 'Jan', age: 34, title: 'Kot w butach', comments: 'Good book!' });
        });
        it("should return false if any arguement are string", function () {
            expect(answer.mergeObject({name: "Jan", age: 34}, "ala")).toBeFalsy();
        });
        it("should return false if any arguement are boolean", function () {
            expect(answer.mergeObject(true, {title: "Kot w butach", comments: "Good book!"})).toBeFalsy();
        });


    });
    describe('countVowes', function () {
        it("should return 4", function () {
            expect("String Testowy".countVowels()).toEqual(4);
        });
        it("should return 0 for empty string", function () {
            expect("".countVowels()).toEqual(0);
        });

    });
    describe('arrayToString', function () {
        it("should return 'raz dwa trzy'", function () {
            expect(["raz", "dwa", "trzy"].arrayToString()).toEqual("raz dwa trzy");
        });
        it("should return 'raz 2 trzy 4'", function () {
            expect(["raz", 2, "trzy", 4].arrayToString()).toEqual("raz 2 trzy 4");
        });
        it("should return 'false 0 1 2'", function () {
            expect([false, 0, 1, 2].arrayToString()).toEqual("false 0 1 2");
        });


    });


})();