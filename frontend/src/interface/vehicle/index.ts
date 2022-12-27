import { ReactNode } from "react";
import { ICommentPropsCard, IComment } from "../propsComponents/index"


export interface Vehicle {
  id:             string;
  username?:     string;
  heading:       string;
  img:           string;
  description:   string;
  km:            string;
  year:          string;
  price:         string;
  photos?:        any;
  auction:        boolean;
  comments?:      IComment[];
  offers?:        Object[];
  dateAuction?:    string;
}

export interface VehiclesProps {
  owner?: Boolean;
  vehicle: Vehicle;
}

export interface IVehicle {
  id: string;
  heading: string;
  status: string;
  year: string;
  km: string;
  price: string;
  description: string;
  published: Boolean;
  img: string;
  created_at: string;
  updated_at: string;
  auction:    boolean;
  categorieId: string;
  userId: string;
  category: string;
}

export interface IVehicleContext {
  listVehicles: IVehicle[];
  listCars: IVehicle[];
  listMotorcycles: IVehicle[];
  vehicle: Vehicle;
  newVehicle: Object;
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
