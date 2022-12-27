import * as S from "./styled";
import { useHistory } from "react-router-dom";
import ButtonUI from "../../components/buttonUI";
import { IComment, IAsideProps } from "../../interface/propsComponents";
import { useState, useEffect } from "react";
import { useUser } from "../../providers/user/index";
import { convertInitialsName } from "../../utils/index";
import { UserIcon } from "../iconUser";
import { useModal } from "../../providers/modal";
import ModalGalery from "../Modals/modalImage/index";
import * as C from "../";
import { BiImageAdd } from "react-icons/bi";
import { AiOutlineLoading } from "react-icons/ai";

const Aside = ({ vehicle }: IAsideProps) => {
  const [motor, setMotor]: any = useState();
  const { showModalImageGalery, inOnModalGalery, setInOnModalAddPhoto } =
    useModal();
  const initialsName = convertInitialsName(vehicle?.username);
  const [photo, setPhoto]: any = useState("");
  const history = useHistory();
  const [vehicleExistis, setVehicleExists] = useState(false);

  const openModalImage = (url: any) => {
    showModalImageGalery();
    setPhoto(url);
  };

  const toHomePage = () => {
    history.push("/");
  };

  useEffect(() => {
    setInterval(() => {
      setVehicleExists(true);
    }, 2000);
  }, [vehicle]);

  return (
    <>
      <S.AsideStyled>
        <S.ContainerGalery>
          <h3>
            Fotos
            <button
              onClick={(e) => {
                e.preventDefault();
                setInOnModalAddPhoto(true);
              }}
            >
              {" "}
              <BiImageAdd />{" "}
            </button>{" "}
          </h3>

          <ul>
            {vehicle.photos?.map((photo: any) => {
              if (vehicleExistis && photo.url) {
                return (
                  photo.url && <img src={photo.url} onClick={() => openModalImage(photo.url)}/>
                );
              } else {
                return <AiOutlineLoading className="loading-photo" />
              }
            })}
          </ul>
        </S.ContainerGalery>

        <S.ContainerOwnerProduct>
          {vehicleExistis ?
          <>
          <UserIcon name={vehicle?.username} initials={initialsName} />

          <h4>{vehicle?.username}</h4>

          <p className="description">{vehicle?.description}</p>

          <C.ButtonUI
            setBoolean={toHomePage}
            text="Ver todos os anúncios"
            color="secondary"
            variant="contained"
          /> 
          </>
          : 
          <AiOutlineLoading className="loading-photo" /> 
          }
        </S.ContainerOwnerProduct>
      </S.AsideStyled>
      {inOnModalGalery && <ModalGalery photo={photo} />}
    </>
  );
};

export default Aside;
