import { useContext, createContext, useEffect, useState } from "react";
import { UserProviderProps, IUserState } from "../../interface/user";
import axios from "axios";
import { useModal } from "../modal/index";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserState);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState({});
  const [userLoginEmail, setUserLoginEmail] = useState("");
  const [userLoginPassword, setUserLoginPassword] = useState("");
  const { hideModalLogin, showModalSucess, hideModalRegister } = useModal();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [celphone, setCellphone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [buyer, setBuyer] = useState(true);
  const [seller, setSeller] = useState(false);

  useEffect(() => GetUser());

  const LoginFunction = () => {
      axios
        .post("http://localhost:3000/login", {email: userLoginEmail, password: userLoginPassword})
        .then((response) => {
          sessionStorage.setItem("user", JSON.stringify(response.data.token));
          hideModalLogin();
          toast.success("Login realizado com sucesso!");
        })
        .catch((error) => toast.error(error.response.data.message));
 };

  const UserRegisterFunction = () => {

    axios
      .post("http://localhost:3000/users/register", {name, email, celphone, password, confirmPassword, buyer, seller})
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
      .catch((error) => toast.error(error.response.data.message));
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
        });
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        setUserLoginEmail,
        setUserLoginPassword,
        LoginFunction,
        UserRegisterFunction,
        GetUser,
        name,
        setName, 
        setEmail, 
        setCellphone, 
        setPassword,  
        setConfirmPassword, 
        setBuyer, 
        setSeller,
        seller,
        buyer
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
