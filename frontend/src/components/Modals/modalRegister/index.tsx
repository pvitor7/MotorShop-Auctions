import * as S from "./style"
import * as C from "../../index";
import { useEffect, useState} from "react";
import { useUser } from "../../../providers/user/index"
import { useModal } from "../../../providers/modal";

function ModalRegister() {

  const { hideModalRegister, showModalRegister, inOnRegister } = useModal();

  const { 
    UserRegisterFunction,
    setName, 
    setEmail, 
    setCellphone, 
    setPassword,  
    setConfirmPassword, 
    setBuyer, 
    setSeller,
    seller,
    buyer,
    name
  } = useUser();


  const [initialsName, setInitialsName] = useState("");
  
  useEffect(() => {
      const splitName = name?.split(" ");
      splitName.length > 1 ? setInitialsName(splitName[0][0] + splitName[1][0]) : setInitialsName(splitName[0][0]);
  }, [name]);

  const createUser = () => {
    UserRegisterFunction();
  };

  const isBuyer = () => {
    return buyer ? setBuyer(false) : setBuyer(true);
  };

  const isAnnunciate = () => {
    return seller ? setSeller(false) : setSeller(true);
  };

  const modal = inOnRegister
    ? "modal containerModal"
    : "modal containerModal hidden";

  return (
    <S.ContainerStyled>
      <section className={modal}>
        <div className="modal">
          <div className="modalHeader">
            <h1>Cadastro</h1>
            <button className="removedModal" onClick={() => hideModalRegister()}>
              x
            </button>
          </div>

          <form
            className="modalBody"
            onSubmit={(e) => {
              e.preventDefault();
              createUser();
            }}
          >
            <C.InputText
              setFunction={setName}
              label="Nome"
              placeholder="Ex: Samuel Leoão"
              required
              color="secondary"
            />

            <C.InputText
              setFunction={setEmail}
              label="Email"
              required
              placeholder="Ex: samuel@mail.com"
              color="secondary"
            />

            <C.InputText
              setFunction={setCellphone}
              label="Telefone"
              placeholder="(00)0-0000-0000"
              required
              color="secondary"
            />

            <div className="div--adress">
              <C.ButtonUI
                setBoolean={isBuyer}
                type="submit"
                text="Comprador"
                color="primary"
                variant={buyer ? "contained" : "outlined"}
              />

              <C.ButtonUI
                setBoolean={isAnnunciate}
                type="submit"
                text="Anunciante"
                color="primary"
                variant={seller ? "contained" : "outlined"}
              />
            </div>

            <C.InputText
              setFunction={setPassword}
              label="Senha"
              placeholder="Senha"
              required
              color="secondary"
              type="password"
            />

            <C.InputText
              setFunction={setConfirmPassword}
              label="Confirmar senha"
              placeholder="Confirmar senha"
              required
              color="secondary"
              type="password"
            />

            <C.ButtonUI
              setBoolean={createUser}
              text="Finalizar Cadastro"
              color="primary"
              variant="contained"
              type="submit"
            />
          </form>
        </div>
      </section>
    </S.ContainerStyled>
  );
}

export default ModalRegister;
