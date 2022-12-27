import { useContext, createContext, useEffect, useState } from "react";
import { UserProviderProps, IUserState } from "../../interface/user";
import axios from "axios";
import { useModal } from "../modal/index";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserState);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState({});
  const [userCreate, setUserCreate] = useState({});
  const [userLogin, setUserLogin] = useState({});

  const { hideModalLogin, showModalSucess, hideModalRegister } = useModal();

  const LoginFunction = () => {
    axios
      .post("http://localhost:3000/login", userLogin)
      .then((response) => {
        hideModalLogin();
        toast.success("Login realizado com sucesso!");
        sessionStorage.setItem("user", JSON.stringify(response.data.token));
      })
      .catch(() => toast.error("Ops! Algo deu errado!"));
  };

const UserRegisterFunction = () => {
    axios
      .post("http://localhost:3000/users/register", userCreate)
      .then(() => {
        toast.success("Usuário criado!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        hideModalRegister();
        showModalSucess();
      })
      .catch(() => toast.error("Ops! Algo deu errado!"));
};


const GetUser = () => {
    if (sessionStorage.getItem("user")) {
      const token = JSON.parse(sessionStorage.getItem("user") || "");
      axios
        .get("http://localhost:3000/users/vehicles", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch(() => toast.error("Ops! Algo deu errado!"));
    }
  };

  return (
    <UserContext.Provider
      value={{
        userCreate,
        setUserCreate,
        user,
        setUser,
        setUserLogin,
        LoginFunction,
        UserRegisterFunction,
        GetUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
