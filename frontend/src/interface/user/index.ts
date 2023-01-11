import { ReactNode } from "react";
import { IVehicle } from '../vehicle/index';

export interface UserProviderProps {
    children: ReactNode;
}

export interface IUserState{
    user: IUser;
    setUser: (data: boolean) => void;
    setUserLoginEmail: (email: string) => void;
    setUserLoginPassword: (password: string) => void;
    LoginFunction: () => void;
    UserRegisterFunction: () => void;
    GetUser: () => void;

    setName: (data: string) => void;
    setEmail: (email: string) => void;
    setCellphone: (cellphone: string) => void;
    setPassword: (password: string) => void;
    setConfirmPassword: (confirmPassword: string) => void;
    setBuyer: (buyer: boolean) => void;
    setSeller: (seller: boolean) => void;
    
    seller: boolean;
    buyer: boolean;
    name: string;
}

export interface ILoginState{
    user: Object;
    setUser: (data: Object) => void;
}

export interface IUser{
    id?: string; 
    name?: string; 
    email?: string; 
    password?: string; 
    initialsName?: string;
    celphone?: string; 
    created_at?: string; 
    is_active?: boolean;
    updated_at?: string; 
    vehicles?:  IVehicle[];

}