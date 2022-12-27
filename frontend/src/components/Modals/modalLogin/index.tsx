import { Modalprops } from "../../../interface/modal";
import { ContainerStyled } from "./style";
import { useState } from "react";
import { FormContainer } from "react-hook-form-mui";
import { useModal } from "../../../providers/modal";
import { useUser } from "../../../providers/user";
import { motion } from 'framer-motion';
import * as C from "../../index";

function ModalLogin() {
  
  const { 
    inOnLogin, 
    setInOnLogin, 
    showModalLogin, 
    hideModalLogin,
    showModalRegister
 } = useModal();


  const modal = inOnLogin
    ? "modal containerModal"
    : "modal containerModal hidden";

    const { user, setUserLogin, LoginFunction} = useUser();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginFunction = () => {
      setUserLogin({email, password});
      LoginFunction()
    }

    const registerFunction = () => {
      hideModalLogin();
      showModalRegister();
    }

  return (
    <ContainerStyled>
      <section className={modal}>
        <div className="modal">

          <div className="modalHeader">
            <h1>Login</h1>
            <button className="removedModal" onClick={() => hideModalLogin()}>x</button>
          </div>

          <motion.form>
            <div className="modalBody">
            
              <C.InputText setFunction={setEmail} label="Usuário" placeholder="Usuário"  color="secondary"/>
              <C.InputText setFunction={setPassword} label="Senha" placeholder="Senha"  color="secondary"/>
            
              <a href=" ">Esqueci minha senha</a>
              <C.ButtonUI 
              setBoolean={loginFunction}  text="Entrar"
              type="submit" color="primary" variant="contained"/> 

              <label className="label--register">Ainda não possui conta?</label>
              <C.ButtonUI setBoolean={registerFunction} type="submit" text="Cadastrar" color="primary" variant="outlined" />
              
            </div>
          
          </motion.form>
        
        </div>
      
      </section>
    
    </ContainerStyled>
  );
}

export default ModalLogin;
