export interface Directions {
  origin: string;
  destination: string;
  mode: TravelMode;
  units: UnitSystem;
}

// ? enum tomado de la libreria de google.maps,
// ? ya que no permite cargar durante tiempo de ejecución
export enum TravelMode {
  BICYCLING = 'BICYCLING',
  DRIVING = 'DRIVING',
  TRANSIT = 'TRANSIT',
  WALKING = 'WALKING',
}

// ? enum tomado de la libreria de google.maps,
// ? ya que no permite cargar durante tiempo de ejecución
export enum UnitSystem {
  IMPERIAL = 0.0,
  METRIC = 1.0,
}
