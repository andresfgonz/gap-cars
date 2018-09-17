export interface Car {
  name: string;
  brand: string;
  brandLogo: string;
  model: string;
  year: number;
  imageUrl: string;
  price: string;
  engine?: CarEngine;
  dimensions?: CarDimensions;
}

export interface CarEngine {
  fuelTankCapacity: number;
  fuellingSystem: string;
  horsePower: string;
  torque: string;
  cylinderCapacity: number;
  valvesPerCylinder: number;
  compressionRation: string;
}

export interface CarDimensions {
  width: number;
  height: number;
  length: number;
}
