import ButtonStyled from "./styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLOptionElement> {
    color?: string;
    theme?: string;
    border?: string;
}

const Button:React.FC<ButtonProps> = ({name, color, theme}: ButtonProps) => {
    return(
        <ButtonStyled color={color} theme={theme}>
           {name}
        </ButtonStyled>
    )
}

export default Button;

