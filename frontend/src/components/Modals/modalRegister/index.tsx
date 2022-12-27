import * as S from "./style"
import * as C from "../../index";
import { useEffect, useState} from "react";
import { useUser } from "../../../providers/user/index"
import { useModal } from "../../../providers/modal";

function ModalRegister() {

  const { hideModalRegister, showModalRegister, inOnRegister } = useModal();

  const { setUserCreate, UserRegisterFunction } = useUser();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [celphone, setCellphone] = useState("");
  const [password, setPassword] = useState("");
  const [initialsName, setInitialsName] = useState("");

  const [userBuyer, setUserBuyer] = useState(true);
  const [userAnnunciate, setUserAnnunciate] = useState(false);

  useEffect(() => {
      const splitName = name?.split(" ");
      splitName.length > 1 ? setInitialsName(splitName[0][0] + splitName[1][0]) : setInitialsName(splitName[0][0]);
  }, [name]);

  const createUser = () => {
    setUserCreate({ name, email, initialsName, celphone, password });
    UserRegisterFunction();
  };

  const isBuyer = () => {
    return userBuyer ? setUserBuyer(false) : setUserBuyer(true);
  };

  const isAnnunciate = () => {
    return userAnnunciate ? setUserAnnunciate(false) : setUserAnnunciate(true);
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
            
            <C.InputText
              // setFunction={setCpf}
              label="CPF"
              placeholder="000.000.000-00"
              // required
              color="secondary"
            />

            <C.InputText
              // setFunction={setBirthDate}
              label="Data de nascimento"
              placeholder="00/00/00"
              // required
              type="date"
              color="secondary"
            />

            <C.InputText
              // setFunction={setDescription}
              label="Descrição"
              placeholder="Digitar descrição"
              // required
              color="secondary"
            />

            <label>Informações de endereço</label>

            <C.InputText
              // setFunction={setPostalCode}
              label="CEP"
              placeholder="00000-000"
              // required
              color="secondary"
            />

            <div className="div--adress">
              <div className="div--field">
                <C.InputText
                  // setFunction={setCountry}
                  label="Estado"
                  placeholder="Digitar estado"
                  // required
                  color="secondary"
                />
              </div>

              <div className="div--field">
                <C.InputText
                  // setFunction={setCity}
                  label="Cidade"
                  placeholder="Digitar cidade"
                  // required
                  color="secondary"
                />
              </div>
            </div>

            <C.InputText
              // setFunction={setStreet}
              label="Rua"
              placeholder="Digitar rua"
              // required
              color="secondary"
            />

            <div className="div--adress">
              <div className="div--field">
                <C.InputText
                  // setFunction={setNumberAdress}
                  label="Número"
                  placeholder="ex: apart 307"
                  type="number"
                  // required
                  color="secondary"
                />
              </div>

              <div className="div--field">
                <C.InputText
                  // setFunction={setComplement}
                  label="Complemento"
                  placeholder="Digitar complemento"
                  // required
                  color="secondary"
                />
              </div>
            </div>

            <div className="div--adress">
              <C.ButtonUI
                setBoolean={isBuyer}
                type="submit"
                text="Comprador"
                color="primary"
                variant={userBuyer ? "contained" : "outlined"}
              />

              <C.ButtonUI
                setBoolean={isAnnunciate}
                type="submit"
                text="Anunciante"
                color="primary"
                variant={userAnnunciate ? "contained" : "outlined"}
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
              // setFunction={setConfirmPassword}
              label="Confirmar senha"
              placeholder="Confirmar senha"
              // required
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
