import { FooterStyle } from "./style"
import MotorFooter from "../../img/icons/logo-footer.svg";
import arrowFooter from "../../img/icons/arrow-footer.svg";

const Footer = () => {
    return(
        <FooterStyle>
            <img className="footer--logo" src={MotorFooter} alt="" />
            <p>© 2022 -  Todos os direitos reservados.</p>
            <img className="footer--arrow" src={arrowFooter} alt="" />
        </FooterStyle>
    )
}

export default Footer;