import { ReactNode } from "react";
import { ICommentPropsCard, IComment } from "../propsComponents/index"


export interface Vehicle {
  id:             string;
  username?:      string;
  heading:        string;
  img:            string;
  description:    string;
  km:             string;
  year:           string;
  price:          string;
  photos?:        any;
  auction:        boolean;
  comments?:      IComment[];
  offers?:        Object[];
  dateAuction?:   string;
  userId:         string;
  status:         boolean;
}

export interface VehiclesProps {
  owner?: Boolean;
  vehicle: Vehicle;
}

export interface IVehicle {
  id:             string;
  heading:        string;
  status:         boolean;
  year:           string;
  km:             string;
  price:          string;
  description:    string;
  published:      Boolean;
  img:            string;
  created_at:     string;
  updated_at:     string;
  auction:        boolean;
  categorieId:    string;
  userId:         string;
  category:       string;
}

export interface IVehicleContext {
  listVehicles:   IVehicle[];
  listCars:       IVehicle[];
  listMotorcycles: IVehicle[];
  vehicle:        Vehicle;
  newVehicle:     Object;
  setNewPhoto: (url: string) => void;
  setNewOffer: (offer: number) => void;
  setNewVehicle: (vehicle: Object) => void;
  setId: (id: String) => void;
  setListVehicles?: (vehicles: IVehicle[]) => void;
  setNewComment: (comment: String) => void;
  NewCommentVehicle: () => void;
  NewVehicleFunction: () => void;
  NewOfferFunction: () => void;
  NewPhotoFunction: () => void;
  DeleteVehicleFunction: () => void;
  VehicleUpdateFunction: () => void;


  sale: boolean;
  car: boolean;
  auction: boolean;
  motorCycle: boolean;
  setSale: (data: boolean) => void;
  setAuction: (data: boolean) => void;
  setCar: (data: boolean) => void;
  setMotorcycle: (data: boolean) => void;
  setStatus: (data: boolean) => void;
  setHeading: (data: string) => void;
  setDateAuction: (data: string) => void;
  setAge: (data: string) => void;
  setKm: (data: string) => void;
  setPrice: (data: string) => void;
  setDescription: (data: string) => void;
  setImgCape: (data: string) => void;
  setImgGalery1: (data: string) => void;
  setImgGalery2: (data: string) => void;
  setImgGalery3: (data: string) => void;
  setTypeVehicle: (data: string) => void;
}

export interface ListVehicleProviderProps {
  children: ReactNode;
}

export interface IVehicleRegister {
  newVehicle: Object;
  setNewVehicle: (vehicle: Object) => void;
}

export interface NewVehicleProviderProps {
  children: ReactNode;
}
