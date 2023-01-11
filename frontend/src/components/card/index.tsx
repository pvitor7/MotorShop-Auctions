import { Vehicle, VehiclesProps } from "../../interface/vehicle";
import { UserIcon } from "../iconUser";
import ButtonUI from "../buttonUI";
import { LiCard, DivCard, Span } from "./style";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";
import { useModal } from "../../providers/modal/index";
import { useVehicle } from "../../providers/vehicles/index";
import { useUser } from "../../providers/user/index";

const Card = ({ vehicle }: VehiclesProps) => {
  const [initialsName, setInitialsName] = useState("");
  const {
    id,
    username,
    heading,
    description,
    km,
    img,
    year,
    auction,
    price,
    userId,
    status
  }: Vehicle = vehicle;

  const { setId } = useVehicle();
  const { user } = useUser();

  const {
    showModalEditAnnouncement
  } = useModal();

  useEffect(() => {
    if (username) {
      const splitName = username?.split(" ");
      splitName.length > 1
        ? setInitialsName(splitName[0][0] + splitName[1][0])
        : setInitialsName(splitName[0][0]);
    }
  }, []);

  const history = useHistory();
  const priceBRL = Number(price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  const kmLabel = Number(km).toLocaleString();
  
  const openEditModal = () => {
    setId(vehicle.id)
    showModalEditAnnouncement();
  }


  return (
    <LiCard
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    }}
    onClick={()=> history.push(`/product/${id}`)} 
    >
    
      <figure>
        {status ? 
        <span className="auction  Active">Ativo</span>
          :
        <span className="auction  Inactive">Vendido</span>

      }

        <img src={img} alt="" />
      </figure>

      <h3>{heading}</h3>

      <p>{description}</p>

      <UserIcon 
        color={""}
        theme={"red"}
        name={username}
        initials={initialsName}
      />

      <DivCard>
        <div>
          <Span>{kmLabel} KM</Span>
          <Span>{year}</Span>
        </div>
        <span>{priceBRL}</span>
      </DivCard>

      {user.id == userId && 
      <div className="div-buttons">
          <ButtonUI text="Editar" color="secondary" variant="outlined" 
          setBoolean={openEditModal} 
          />
          <ButtonUI text="Ver como" color="secondary" variant="outlined" />
      </div>
      }
    </LiCard>
  );
};

export default Card;
