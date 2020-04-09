var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}


Restaurant.prototype.reservarHorario = function(horarioReservado) {

            var nuevoArray = this.horarios.filter(horarios => horarios != horarioReservado);

            this.horarios=nuevoArray;

            return;

}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}



Restaurant.prototype.obtenerPuntuacion = function() {
    
    var promedio=this.promedio();

    return promedio;

};



Restaurant.prototype.sumatoria = function(calificaciones){
    
    if (calificaciones.length === 0) {
        return 0;
    }else
        var sumatoria = 0;
        for (var i = 0; i < calificaciones.length; i++) {
        sumatoria += calificaciones[i]
        };
        
        return sumatoria;
};


Restaurant.prototype.promedio = function() {

    if (this.calificaciones.length === 0) {
        return 0;
    }else
        var promedio = this.sumatoria(this.calificaciones) / this.calificaciones.length;
        return Math.round(promedio * 10) / 10;
    };


