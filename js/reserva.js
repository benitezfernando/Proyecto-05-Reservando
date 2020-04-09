var Reserva = function (horario, cantidadPersonas, precioPersona, codigoDeDescuento) {
    this.horario = horario;
    this.cantidadPersonas = cantidadPersonas;
    this.precioPersona = precioPersona;
    this.codigoDeDescuento = codigoDeDescuento;
};





Reserva.prototype.precioBase = function () {
    
    return this.precioPersona * this.cantidadPersonas;
    
};

Reserva.prototype.precioTotal = function () {

    var precioBaseReserva = this.precioBase();
    var desc = this.sumaDeDescuentos();
    var adicionales = this.sumaDeAdicionales();
    var baseMasAdicionales = precioBaseReserva + adicionales;

    return  baseMasAdicionales - desc;

};


Reserva.prototype.descuentoPorGrupos = function () {
    
    var descuento = 0;

    if (this.cantidadPersonas >= 4 && this.cantidadPersonas <= 6) {
        descuento = (5 / 100) * this.precioBase();
    }
    else if (this.cantidadPersonas >= 7 && this.cantidadPersonas <= 8) {
        descuento = (10 / 100) * this.precioBase();
    }
    else if (this.cantidadPersonas > 8) {
        descuento = (15 / 100) * this.precioBase();
    }
    
    return descuento
};

Reserva.prototype.descuentoPorCodigo = function () {
    var descuento = 0;

    if (this.codigoDeDescuento === 'DES15') {
        descuento = (15 / 100) * this.precioBase();
   }
   else if (this.codigoDeDescuento === 'DES200') {
        descuento = 200;
   }
   else if (this.codigoDeDescuento === 'DES1') {
        descuento = this.precioPersona
   }     
   
   return descuento
};


Reserva.prototype.adicionalPorHorario = function () {
    if (this.horario.getHours() >= 13 && this.horario.getHours() <= 14 || this.horario.getHours() >= 20 && this.horario.getHours() <= 21) {
        return (5 / 100) * this.precioBase();
    }else 
        return 0;
        
};

Reserva.prototype.adicionalPorFinDeSemana = function () {


    if (this.horario.getDay() === 0 || this.horario.getDay() === 6 || this.horario.getDay() === 5) {
        return (10 / 100) * this.precioBase();
    }else 
        return 0;

};

Reserva.prototype.sumaDeAdicionales = function () {
    return this.adicionalPorFinDeSemana() + this.adicionalPorHorario();
};

Reserva.prototype.sumaDeDescuentos = function () {
    return this.descuentoPorGrupos() + this.descuentoPorCodigo()
};

