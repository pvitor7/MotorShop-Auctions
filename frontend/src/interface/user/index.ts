import { ReactNode } from "react";
import { IVehicle } from '../vehicle/index';

export interface UserProviderProps {
    children: ReactNode;
}

export interface IUserState{
    user: IUser;
    userCreate: Object;
    setUser: (data: boolean) => void;
    setUserCreate: (data: Object) => void;
    setUserLoginEmail: (email: string) => void;
    setUserLoginPassword: (password: string) => void;
    LoginFunction: () => void;
    UserRegisterFunction: () => void;
    GetUser: () => void;
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