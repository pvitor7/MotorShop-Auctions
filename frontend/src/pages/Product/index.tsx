import * as S from "./style";
import * as C from "../../components/index";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useVehicle } from "../../providers/vehicles";
import { convertInitialsName } from "../../utils/index";
import { useUser } from "../../providers/user/index";
import { useState, useEffect, useRef } from "react";
import { ICommentPropsCard, IComment } from "../../interface/propsComponents";
import { Vehicle } from "../../interface/vehicle/index";
import TimeAuction from "../../img/icons/time.svg";
import { timeAuction } from "../../utils/index";
import { IoIosClose } from "react-icons/io";
import { useModal } from "../../providers/modal";
import { AiOutlineLoading } from "react-icons/ai";
import { motion } from "framer-motion";

const Product = () => {
  const {
    listCars,
    listMotorcycles,
    listVehicles,
    vehicle,
    setId,

    setSale,
    setAuction,
    setStatus,
    setNewComment,
    setNewOffer,
    setNewPhoto,
    NewCommentVehicle,
    NewOfferFunction,
    NewPhotoFunction,
    VehicleUpdateFunction,
  } = useVehicle();
  const { inOnModalAddPhoto, setInOnModalAddPhoto } = useModal();
  const { user } = useUser();
  const { id }: any = useParams();

  const [inputDisabled, setInputDisabled] = useState(true);
  const [timeForAuction, setTimeForAuction]: any = useState();
  const [vehicleExistis, setVehicleExists] = useState(false);
  const [modalSale, setModalSale] = useState(false);

  const openModalSale = () => {
    setModalSale(true);
  };

  const closeModalSale = () => {
    setModalSale(false);
  };

  const confirmSale = () => {
    setStatus(false);
    setSale(false);
    setAuction(false);
    setTimeout(() => {
      VehicleUpdateFunction();
    }, 1000);
    setModalSale(false);
  };

  useEffect(() => {
    setInterval(() => {
      setVehicleExists(true);
    }, 200);
  });

  const newOfferFunction = () => {
    setTimeout(() => {
      NewOfferFunction();
    }, 1000);
  };

  const commentFunction = () => {
    setTimeout(() => {
      NewCommentVehicle();
    }, 1000);
  };

  useEffect(() => {
    setId(id);
    user.email ? setInputDisabled(false) : setInputDisabled(true);
    if (vehicle) {
      setInterval(() => {
        vehicle?.dateAuction &&
          setTimeForAuction(timeAuction(vehicle.dateAuction));
      }, 1000);
    }
  }, [id, user]);

  const initialsName = convertInitialsName(vehicle?.username);
  const intialsProfile = convertInitialsName(user.name);
  const priceBRL = Number(vehicle?.price).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const kmLabel = Number(vehicle?.km).toLocaleString();

  return (
    <>
      <C.Header />
      <S.ProductPageStyled>
        <section className="div--main">
          <S.ContainerIMG
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img src={vehicle?.img} />
          </S.ContainerIMG>

          <S.ContainerInfoProduct
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h3>{vehicle?.heading}</h3>

            <div>
              <C.LabelAgeKm info={vehicle?.year} />
              <C.LabelAgeKm info={`${kmLabel} KM`} />
            </div>
            <label>{priceBRL}</label>
            <div>
              <C.ButtonUI
                text="Comprar"
                color="primary"
                variant="contained"
                setBoolean={openModalSale}
              />
            </div>
          </S.ContainerInfoProduct>

          <S.ContainerDescription>
            <h3>Descri????o</h3>
            <p>{vehicle?.description}</p>
          </S.ContainerDescription>

          <section className="aside--mobile">
            {vehicle && <C.Aside vehicle={vehicle} />}
          </section>

          {vehicleExistis && (
            <S.ContainerComments>
              {vehicle &&
                vehicle?.comments?.map((comment: any, index: number) => {
                  const initialsNameComment = convertInitialsName(
                    comment.user_name
                  );

                  return (
                    <S.LiCard>
                      <C.UserIcon
                        key={index}
                        color={""}
                        theme={"red"}
                        name={comment.user_name}
                        initials={initialsNameComment}
                      />
                      <p>{comment.comment}</p>
                    </S.LiCard>
                  );
                })}
            </S.ContainerComments>
          )}
          {vehicleExistis && (
            <S.ContainerNewComments>
              {user && (
                <C.UserIcon name={user.name} initials={intialsProfile} />
              )}
              <C.InputText
                setFunction={setNewComment}
                color="primary"
                placeholder={"Digite seu coment??rio"}
                multiline
                rows={3}
                disabled={inputDisabled}
              />
              <C.ButtonUI
                setBoolean={commentFunction}
                text="Comentar"
                color="primary"
                variant="contained"
              />
            </S.ContainerNewComments>
          )}
        </section>

        <aside>
          {vehicle && <C.Aside vehicle={vehicle} />}

          {vehicleExistis && (
            <S.ListOffersStyled>
              <h2>Lances</h2>

              <S.AuctionTimeStyled className="auction-time">
                <img src={TimeAuction} className="img--time-auction" alt="" />
                <p> {vehicle?.auction ? timeForAuction : "Inativo"} </p>
              </S.AuctionTimeStyled>

              <ul>
                {vehicle.auction &&
                  vehicle?.offers
                    ?.map((offer: any, index: number) => {
                      const priceOffer = Number(offer.offer).toLocaleString(
                        "pt-BR",
                        { style: "currency", currency: "BRL" }
                      );
                      return (
                        <li>
                          <p>{priceOffer}</p>
                        </li>
                      );
                    })
                    .reverse()}
              </ul>

              {!inputDisabled && timeForAuction !== "Encerrado" && (
                <div>
                  <C.InputText
                    setFunction={setNewOffer}
                    color="primary"
                    multiline
                    rows={1}
                    disabled={inputDisabled}
                    type="number"
                  />
                  <C.ButtonUI
                    setBoolean={newOfferFunction}
                    text="Enviar"
                    color="primary"
                    variant="contained"
                  />
                </div>
              )}
            </S.ListOffersStyled>
          )}
        </aside>
      </S.ProductPageStyled>

      <C.Footer />

      {user && modalSale && (
        <S.ModalSale>
          <form>
            <h2>Informa????es da compra</h2>
            <p>
              {" "}
              <span> Modelo: </span> {vehicle?.heading}{" "}
            </p>
            <p>
              {" "}
              <span>Propriet??rio: </span> {vehicle?.username}{" "}
            </p>
            <p>
              {" "}
              <span> Valor: </span> {priceBRL}{" "}
            </p>
            <p>
              {" "}
              <span> Quilometragem: </span> {kmLabel}{" "}
            </p>
            {/* <p> <span>Informe sua senha: </span> <C.InputText setFunction={setNewOffer} color="primary" type="password"/> </p> */}

            <div>
              <C.ButtonUI
                text="Confirmar"
                variant="contained"
                color="primary"
                setBoolean={confirmSale}
              />
              <C.ButtonUI
                text="Cancelar"
                color="secondary"
                variant="contained"
                setBoolean={closeModalSale}
              />
            </div>
          </form>
        </S.ModalSale>
      )}

      {inOnModalAddPhoto && (
        <S.ModalAddPhotoStyled className="modal--add-Photo">
          <form className="form--add-photo">
            <button
              onClick={(e) => {
                e.preventDefault();
                setInOnModalAddPhoto(false);
              }}
            >
              <IoIosClose className="close--Modal" />
            </button>
            <p>
              {" "}
              <input
                type="text"
                placeholder="Insira o endere??o da imagem"
                onChange={(e) => {
                  setNewPhoto(e.target.value);
                }}
              />{" "}
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  NewPhotoFunction();
                }}
              >
                Enviar
              </button>
            </p>
          </form>
        </S.ModalAddPhotoStyled>
      )}
    </>
  );
};

export default Product;
