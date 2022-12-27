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

const Product = () => {
  const {
    listCars,
    listMotorcycles,
    listVehicles,
    vehicle,
    setId,

    setNewComment,
    setNewOffer,
    setNewPhoto,
    NewCommentVehicle,
    NewOfferFunction,
    NewPhotoFunction,
  } = useVehicle();
  const { inOnModalAddPhoto, setInOnModalAddPhoto } = useModal();

  const [newCommentState, setNewCommentState] = useState("");
  const [inputDisabled, setInputDisabled] = useState(true);
  const [offer, setOffer] = useState(0);
  const { id }: any = useParams();
  const { user } = useUser();
  const [timeForAuction, setTimeForAuction]: any = useState();
  const [urlNewPhoto, setUrlNewPhoto] = useState("");
  const [vehicleExistis, setVehicleExists] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setVehicleExists(true);
    }, 2000);
  });

  useEffect(() => {
    setId(id);
    user.email ? setInputDisabled(false) : setInputDisabled(true);
    if (vehicle) {
      setInterval(() => {
        vehicle.dateAuction &&
          setTimeForAuction(timeAuction(vehicle.dateAuction));
      }, 1000);
    }
  }, [id, user]);

  const commentFunction = () => {
    setNewComment(newCommentState);
    setTimeout(() => {
      NewCommentVehicle();
    }, 1000);
  };

  const newOfferFunction = () => {
    setNewOffer(Number(offer));

    setTimeout(() => {
      NewOfferFunction();
    }, 200);
  };

  const initialsName = convertInitialsName(vehicle.username);
  const intialsProfile = convertInitialsName(user.name);
  const priceBRL = Number(vehicle.price).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      <C.Header />
      <S.ProductPageStyled>
        <section className="div--main">
          <S.ContainerIMG>
            {vehicleExistis ? (
              <img src={vehicle.img} />
            ) : (
              <AiOutlineLoading className="loading-icon" />
            )}
          </S.ContainerIMG>

          <S.ContainerInfoProduct>
            {vehicleExistis ? (
              <>
                <p>{vehicle.heading}</p>

                <div>
                  <C.LabelAgeKm info={vehicle.year} />
                  <C.LabelAgeKm info={vehicle.km} />
                </div>
                <label>{priceBRL}</label>
                <div>
                  <C.ButtonUI
                    text="Comprar"
                    color="primary"
                    variant="contained"
                  />
                </div>
              </>
            ) : (
              <AiOutlineLoading className="loading-icon" />
            )}
          </S.ContainerInfoProduct>

          <S.ContainerDescription>
            <h3>Descrição</h3>
            <p>{vehicle.description}</p>
          </S.ContainerDescription>

          <section className="aside--mobile">
            {vehicle && <C.Aside vehicle={vehicle} />}
          </section>

          {vehicleExistis && (
            <S.ContainerComments>
              {vehicle &&
                vehicle.comments?.map((comment: any, index: number) => {
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
                setFunction={setNewCommentState}
                color="primary"
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
              {user && (
                <div className="comments-standart">
                  <label onClick={() => setNewComment("Gostei muito!")}>
                    Gostei muito!
                  </label>
                  <label onClick={() => setNewComment("Incrível!")}>
                    Incrível!
                  </label>
                  <label
                    onClick={() =>
                      setNewComment("Recomendarei para meus amigos!")
                    }
                  >
                    Recomendarei para meus amigos!
                  </label>
                </div>
              )}
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
                <p> {vehicle.auction ? timeForAuction : "Inativo"} </p>
              </S.AuctionTimeStyled>

              <ul>
                {vehicle &&
                  vehicle.offers
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

              {!inputDisabled && timeForAuction != "Encerrado" && (
                <div>
                  <C.InputText
                    setFunction={setOffer}
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
                placeholder="Insira o endereço da imagem"
                onChange={(e) => {
                  setUrlNewPhoto(e.target.value);
                }}
              />{" "}
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setNewPhoto(urlNewPhoto);

                  setTimeout(() => {
                    NewPhotoFunction();
                  }, 2000);
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
