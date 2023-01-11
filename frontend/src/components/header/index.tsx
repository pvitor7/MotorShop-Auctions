import MotorShop from "../../img/Motors-shop.svg";
import Menu from "../../img/Menu-Header.svg";
import CloseMenu from "../../img/Close-Menu.svg";
import { useState, useEffect } from "react";
import { useModal } from "../../providers/modal";
import { useUser } from "../../providers/user/index";
import { Redirect, useHistory } from "react-router-dom";
import { convertInitialsName } from "../../utils/index";
import {UserIcon} from "../iconUser/index";
import { HeaderStyled, MenuStyled, MenuProfileStyled } from "./style";
import { motion } from "framer-motion"
import { AiOutlineLoading } from "react-icons/ai";

export const Header = () => {
  const { user } = useUser();
  const {
    inOnSucess,
    setInOnSucess,
    showModalSucess,
    hideModalSucess,
    showModalAnnouncement,
    inOnLogin,
    setInOnLogin,
    showModalLogin,
    hideModalLogin,
    setInOnRegister,
  } = useModal();

  const history = useHistory();
  const [yLoginRegister, setYLoginRegister] = useState(0);
  const [y, setY] = useState(-400);
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuProfile, setOpenMenuProfile] = useState(false);
  const [initialsName, setInitialsName] = useState("");
  const [userExistis, setUserExists] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setUserExists(true);
    }, 2000);
  }, [user]);

  useEffect(() => {
    if (user.name) {
      setInitialsName(convertInitialsName(user.name));
    }
  }, [user]);


  const openCloseMenuProfile = () => {
    setYLoginRegister(0);
    setTimeout(() => {
      return y > 0 ? setY(-400) : setY(400);
    }, 500);
  };

  const openCloseMenuLoginRegister = () => {
    setOpenMenuProfile(false);
    setTimeout(() => {
      return yLoginRegister > 0 ? setYLoginRegister(0) : setYLoginRegister(600);
    }, 500);
  };

  return (
    <>
      <HeaderStyled>
        <img className="logo-MotorsShop" src={MotorShop} 
        onClick={()=> history.push("/")} alt="" />

        <nav className="nav--menu-desktop">
          <button className="nav--menu-desktop-button">Carros</button>
          <button
            className="nav--menu-desktop-button"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            Motos
          </button>

          <button className="nav--menu-desktop-button">Leilão</button>

          <div className="nav--login-register-desktop">
            <div id="div-line"></div>

            {initialsName ? 
            (
              <div onClick={() => openCloseMenuProfile()}>
                <UserIcon 
                  name={user.name}
                  initials={initialsName}
                />
              </div> 
            ) : (
              !userExistis ?
              (<AiOutlineLoading className="loading-user"/>)
                :
              (<form>
                <h4
                  onClick={() => setInOnLogin(true)}
                  className="nav--menu-desktop-h4"
                >
                  Fazer Login
                </h4>
                <button
                  onClick={(e) => { 
                    e.preventDefault()
                    setInOnRegister(true) 
                  }}
                  className="nav--menu-desktop-button-register"
                >
                  Cadastrar
                </button>
              </form>)
            )}
          </div>
        </nav>

        <nav className="nav-menu">
          {user.initialsName && (
            <div onClick={() => openCloseMenuProfile()}>
            <UserIcon 
              name={user.name}
            />
          </div>
          )}
          {user ? (
            <div>
              <button className="menu-mobile-icon" onClick={()=> openCloseMenuProfile()}>
                <UserIcon name={user.name} />
              </button>
              <button 
                onClick={() => {
                  setOpenMenu(true);
                  openCloseMenuLoginRegister();
                }}
              >
                <img src={Menu} alt="" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                openCloseMenuLoginRegister();
              }}
            >
              {" "}
              <img src={CloseMenu} alt="" />{" "}
            </button>
          )}
        </nav>
      </HeaderStyled>

      {openMenu && (
        <MenuStyled
          animate={{ y: yLoginRegister }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <nav className="nav--menu-mobile">
            <button
              className="nav--menu-mobile-button"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              Carros
            </button>
            <button
              className="nav--menu-mobile-button"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              Motos
            </button>

            <button
              onClick={() => {
                setOpenMenu(false);
              }}
              className="nav--menu-mobile-button"
            >
              Leilão
            </button>
          </nav>

          {!initialsName && (
            <div className="nav--login-register-mobile">
              <h4
                className="nav--menu-mobile-h4"
                onClick={() => {
                  setOpenMenu(false);
                  setInOnLogin(true);
                }}
              >
                Fazer Login
              </h4>
              <button
                className="mobile-button-register"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenMenu(false);
                  setInOnRegister(true);
                }}
              >
                Cadastrar
              </button>
            </div>
          )}
        </MenuStyled>
      )}

      <MenuProfileStyled
        animate={{ y }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <button onClick={() => {
            history.push("/profile");
          }}>Perfil</button>
        <button>Editar endereço</button>
        <button>Minhas Compras</button>
        <button
          onClick={() => {
            sessionStorage.clear();
            openCloseMenuProfile();
            history.push("/");
          }}
        >
          Sair
        </button>
      </MenuProfileStyled>
    </>
  );
};
