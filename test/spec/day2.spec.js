(function () {
    var answer = window.day2;

    describe("diffqube", function () {
        iit('Napisz funkcje ktora oblicza roznice dwoch szescianow a oraz b. wyswietl wynik w konsoli', function () {
            expect(answer.diffqube(2, 3).toEqual(-19));
        });
    });

    describe("przydz", function () {
        iit('Napisac funcje ktora przyjmuje wzrost osoby(od 150 cm do 220) i przydziela osoby do odpowiedniej kategorii', function () {
            expect(answer.przydz(160).toEqual("Jestes niskiego wzrostu"));

        });
    });
    describe("fx", function () {
        iit('Zadeklarowac dowolna macierz cyfr i pomnozyc kazdy el. przed 3.', function () {
            expect(answer.fx([3, 6, 1]).toEqual([9, 18, 3]));
        });
    });


    describe("names", function () {
        iit('Napisac funkcje ktora skleja stringi w poniższej podmacierzy', function () {
            expect(answer.names(["Jan", "Kowalski"]).toEqual(["Jan Kowalski"]));
        });
    });


    describe("addPropertiesToObjectCheckNumber", function () {
        iit('Zadeklaruj tablice 2 funkcji.1 funkcja mnozy argument x2 druga funkcja przeksztalca argument na silnie', function () {
            expect(answer.f1(5).toEqual(10));
        });
    });

    describe("addPropertiesToObjectCheckNumber", function () {
        iit('Factorial ', function () {
            expect(answer.f2(6).toEqual('6!'));
        });
    });


})();