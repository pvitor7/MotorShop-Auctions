import { Modalprops } from "../../../interface/modal";
import { ContainerStyled } from "./style";
import { Button, ThemeProvider } from "@mui/material";
import { createTheme } from "@material-ui/core/styles";
import { useModal } from "../../../providers/modal";

function ModalSucess() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4529E6",
        contrastText: "#fff",
      }
    },
  });

  const { 
    inOnSucess, 
    hideModalSucess,
    showModalLogin
} = useModal();

  const modal = inOnSucess
    ? "modal containerModal"
    : "modal containerModal hidden";

  return (
    <ContainerStyled>
    
      <section className={modal}>
        
        <div className="modal">
          
          <div className="modalHeader">
            
            <h1>Sucesso!</h1>
            <button className="removedModal" onClick={() => hideModalSucess()}> x </button>
          
          </div>

          <form onSubmit={(e)=> {
            e.preventDefault();
            hideModalSucess();
            showModalLogin();
          }} className="modalBody">
          
            <h4>Sua conta foi criada com sucesso!</h4>
            
            <p>Agora você vai poder ver seus negócios crescendo em grande escala</p>
            
            <ThemeProvider theme={theme}>
              <Button size="small" color="primary" variant="contained" type="submit">
                Ir para o login
              </Button>
            </ThemeProvider>
            
          </form>
          
        </div>
        
      </section>
      
    </ContainerStyled>
  );
}

export default ModalSucess;