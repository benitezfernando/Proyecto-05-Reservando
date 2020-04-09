
var expect = chai.expect;

describe("Testeando las funcionalidades de la aplicación.", function(){
    var restaurant;
    




        describe("Testeando la función reservarHorario", function(){    

            it("Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo. Los horarios disponibles que tiene el restaurant son 15:00hs, 19:00hs y 22:30hs. Pasamos como reserva 22:30 y verificamos que correctamente se elimino del arreglo original del restaurant.",function(){
                
                restaurant=new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["15:00", "19.00","22:30"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
                restaurant.reservarHorario("22:30");

                expect(restaurant.horarios).eql(["15:00", "19.00"]);
            });

            it("Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual. Los horarios disponibles que tiene el restaurant son 15:00hs, 19:00hs y 22:30hs. Pasamos como reserva 22:00hs y verificamos que el arreglo original del restaurant no fue modificado.",function(){
                restaurant=new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["15:00", "19.00","22:30"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
                restaurant.reservarHorario("22:00");

                expect(restaurant.horarios).eql(["15:00", "19.00","22:30"]);
            });

            it("Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual.",function(){
                restaurant=new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["15:00", "19.00","22:30"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
                restaurant.reservarHorario();

                expect(restaurant.horarios).eql(["15:00", "19.00","22:30"]);
            });
        });
        

        
        
        describe("Testeá la función obtenerPuntuación.", function(){    

            it("Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente. Se pasaron las puntuaciones 9, 5, 7, 6 y 7 obteniendo un promedio de 6.8.",function(){
                restaurant=new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["15:00", "19.00","22:30"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
                expect(restaurant.obtenerPuntuacion()).to.equal(6.8);
            });

            it("Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.",function(){
                restaurant=new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["15:00", "19.00","22:30"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
                restaurant.calificaciones=[];
                expect(restaurant.obtenerPuntuacion()).to.equal(0);
            });


        });

        describe("Testeá la función calificar().", function(){    

            it("Testeando la funcion calificar(). Calificamos con la puntuacion 9 un restaurant y verificamos que dicha calificacion quede almacenada.",function(){
                restaurant=new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["15:00", "19.00","22:30"], "../img/desayuno2.jpg", []);
                // restaurant.calificaciones=[];
                restaurant.calificar(9);

                expect(restaurant.calificaciones).eql([9]);
            });
        });


        describe("Testeá la función buscarRestaurante(id).", function(){    

            it("Testeá la función buscarRestaurante(id) obteniendo un restaurant a traves de su id. Utilizamos el id 3. Verificamos que la funcion devuelve el valor esperado.",function(){
                var listadoTest = new Listado([
                    new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                    new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                    new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),]);

                var resultadoObtenidoDelId=listadoTest.buscarRestaurante(3);




                expect(resultadoObtenidoDelId.nombre).to.equal("Burgermeister");
            });
        });


        describe("Testeá la función obtenerRestaurantes() con filtros.", function(){    

            it("Testeá la función obtenerRestaurantes() para comprobar su funcionamiento. Utilizamos los filtros: Hamburguesa, Berlín, 11:30",function(){
                var listadoTest = new Listado([
                    new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                    new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                    new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),]);

                var resultadoObtenidoDelFiltro=listadoTest.obtenerRestaurantes("Hamburguesa", "Berlín", "11:30");



                expect(resultadoObtenidoDelFiltro[0].nombre).to.equal("Burgermeister");
            });
        });



        describe("Testeando las reservas", function(){    

            it("Testeá Que un restaurante calcule correctamente su precio base con los valores: Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, DES1)",function(){
                

                var listadoDeReservas =
                    new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, 'DES1');

                
                expect(listadoDeReservas.precioBase()).to.equal(2800);
            });

            it("Testeá Que un restaurante calcule correctamente su precio Final con los valores: Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, DES200)",function(){
                

                var listadoDeReservas =
                new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");


                
                expect(listadoDeReservas.precioTotal()).to.equal(100);
            });
        });

        







        
});