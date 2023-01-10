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
import { motion } from "framer-motion";

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
      <S.AsideStyled
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
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
              return (
                photo.url && (
                  <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                    src={photo.url}
                    onClick={() => openModalImage(photo.url)}
                  />
                )
              );
            })}
          </ul>
        </S.ContainerGalery>

        <S.ContainerOwnerProduct
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <UserIcon name={vehicle?.username} initials={initialsName} />

          <h4>{vehicle?.username}</h4>

          <C.ButtonUI
            setBoolean={toHomePage}
            text="Ver todos os anúncios"
            color="secondary"
            variant="contained"
          />
        </S.ContainerOwnerProduct>
      </S.AsideStyled>
      {inOnModalGalery && <ModalGalery photo={photo} />}
    </>
  );
};

export default Aside;
