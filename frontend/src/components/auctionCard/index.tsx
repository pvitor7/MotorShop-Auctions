import { UserIcon } from "../iconUser";
import { LabelAgeKm } from "../labelKmAgeCar";
import { AuctionCardStyle } from "./styled";
import TimeAuction from "../../img/icons/time.svg";
import { ActionCardProps } from "../../interface/propsComponents";
import { Vehicle } from "../../interface/vehicle/index";
import { useEffect, useState } from "react";
import ArrowAuctionIcon from "../../img/icons/arrow-auctionCard.svg";
import { useHistory } from "react-router-dom";

import { timeAuction } from "../../utils";

const AuctionCard = ({ car }: ActionCardProps) => {
  const history = useHistory();

  const [initialsName, setInitialsName] = useState("");
  const [timeForAuction, setTimeForAuction]: any = useState();

  const priceBRL = Number(car?.price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  const kmLabel = Number(car?.km).toLocaleString();
  

  useEffect(() => {
    
    setInterval(()=>{
        car && setTimeForAuction(timeAuction(car.dateAuction));
    }, 1000)

    if(car){
      const splitName = car?.username.split(" ");
      splitName.length > 1 ? setInitialsName(splitName[0][0] + splitName[1][0]) : setInitialsName(splitName[0][0]);
    }
  }, []);

  return (
    <AuctionCardStyle
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    }}
    theme={car?.img}>
      <label>
        <img src={TimeAuction} alt="" />
        { car?.auction ? timeForAuction : "Inativo"}
      </label>
      <h3>{car?.heading}</h3>
      <p className="p--descriptionCar">{car?.description}</p>

      <p>
        <UserIcon
          color={""}
          theme={"red"}
          name={car?.username}
          initials={initialsName}
        />
      </p>

      <div>
        <div>
          <LabelAgeKm info={car?.year} />
          <LabelAgeKm info={`${kmLabel} KM`} />
        </div>
        <span>{priceBRL}</span>
      </div>

      <button onClick={() => history.push(`product/${car?.id}`)} >
        <p>Acessar p??gina do leil??o</p>
        <img src={ArrowAuctionIcon} alt="" />
      </button>
    </AuctionCardStyle>
  );
};

export default AuctionCard;
