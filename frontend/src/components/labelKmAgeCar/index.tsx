import { Label } from "../../interface/propsComponents";
import { LabelAgeKmStyled } from "./styled";


const LabelAgeKm = ({info}: Label) => {
    return(
        <LabelAgeKmStyled>
            {info}
        </LabelAgeKmStyled>
    )
}

export {LabelAgeKm};