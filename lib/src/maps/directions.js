"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitSystem = exports.TravelMode = void 0;
// ? enum tomado de la libreria de google.maps,
// ? ya que no permite cargar durante tiempo de ejecución
var TravelMode;
(function (TravelMode) {
    TravelMode["BICYCLING"] = "BICYCLING";
    TravelMode["DRIVING"] = "DRIVING";
    TravelMode["TRANSIT"] = "TRANSIT";
    TravelMode["WALKING"] = "WALKING";
})(TravelMode = exports.TravelMode || (exports.TravelMode = {}));
// ? enum tomado de la libreria de google.maps,
// ? ya que no permite cargar durante tiempo de ejecución
var UnitSystem;
(function (UnitSystem) {
    UnitSystem[UnitSystem["IMPERIAL"] = 0] = "IMPERIAL";
    UnitSystem[UnitSystem["METRIC"] = 1] = "METRIC";
})(UnitSystem = exports.UnitSystem || (exports.UnitSystem = {}));
//# sourceMappingURL=directions.js.map