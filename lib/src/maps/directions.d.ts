export interface Directions {
    origin: string;
    destination: string;
    mode: TravelMode;
    units: UnitSystem;
}
export declare enum TravelMode {
    BICYCLING = "BICYCLING",
    DRIVING = "DRIVING",
    TRANSIT = "TRANSIT",
    WALKING = "WALKING"
}
export declare enum UnitSystem {
    IMPERIAL = 0,
    METRIC = 1
}
