import * as S from "./style";
import { useState } from "react";
import * as C from "../../../components/index";
import { useModal } from "../../../providers/modal";
import { useVehicle } from "../../../providers/vehicles";

function ModalAnnouncement() {
  const { inOnAnnouncement, setInOnAnnouncement, hideModalAnnouncement } =
  useModal();
  const { setNewVehicle, 
    NewVehicleFunction,  
    sale,
    car,
    auction,
    motorCycle,
    setSale,
    setAuction,
    setCar,
    setMotorcycle,
    setHeading,
    setDateAuction,
    setAge,
    setKm,
    setPrice,
    setDescription,
    setImgCape,
    setImgGalery1,
    setImgGalery2,
    setImgGalery3,
    setTypeVehicle } = useVehicle();

  const modal = inOnAnnouncement
    ? "modal containerModal"
    : "modal containerModal hidden";

  const saleOrAuction = () => {
    if (sale) {
      setSale(false);
      setAuction(true);
    } else {
      setSale(true);
      setAuction(false);
    }
  };

  const carOrMotorcycle = () => {
    if (car) {
      setCar(false);
      setMotorcycle(true);
      setTypeVehicle("motorcycle");
    } else {
      setCar(true);
      setMotorcycle(false);
      setTypeVehicle("car");
    }
  };

  const createVehicle = () => {


    setTimeout(() => {
      NewVehicleFunction();
    }, 1000);
  };

  return (
    <S.ContainerStyled>
      <section className={modal}>
        <div className="modal">
          <div className="modalHeader">
            <h1>Criar anúncio</h1>
            <button
              className="removedModal"
              onClick={() => hideModalAnnouncement()}
            >
              x
            </button>
          </div>

          <form
            className="modalBody"
            onSubmit={(e) => {
              e.preventDefault();
              createVehicle();
            }}
          >
            <p>Tipo de anúncio</p>

            <div className="div--field">
              <C.ButtonUI
                type="submit"
                setBoolean={saleOrAuction}
                text="Venda"
                color={"primary"}
                variant={sale ? "contained" : "outlined"}
              />

              <C.ButtonUI
                type="submit"
                setBoolean={saleOrAuction}
                text="Leilão"
                color={"primary"}
                variant={auction ? "contained" : "outlined"}
              />
            </div>

            <C.InputText
              setFunction={setDateAuction}
              disabled={auction ? false : true}
              type="date"
              label="Data do leilão"
              placeholder="Tipo de anúncio"
              color="secondary"
            />

            <p>Informações do veículo</p>

            <C.InputText
              setFunction={setHeading}
              label="Título"
              placeholder="Título do anúncio"
              color="secondary"
            />

            <div className="div--field">
              <C.InputText
                setFunction={setAge}
                type="number"
                label="Ano"
                rows={1}
                placeholder="Digitar ano"
                color="secondary"
              />

              <C.InputText
                setFunction={setKm}
                label="Quilometragem"
                rows={1}
                placeholder="0"
                color="secondary"
              />

              <C.InputText
                setFunction={setPrice}
                label="Preço"
                rows={1}
                placeholder="Digitar preço"
                color="secondary"
              />
            </div>

            <C.InputText
              multiline
              rows={3}
              setFunction={setDescription}
              label="Descrição"
              placeholder="Digitar descrição"
              color="secondary"
            />

            <div className="div--field">
              <C.ButtonUI
                setBoolean={carOrMotorcycle}
                type="submit"
                text="Carro"
                color="primary"
                variant={car ? "contained" : "outlined"}
              />

              <C.ButtonUI
                setBoolean={carOrMotorcycle}
                type="submit"
                text="Moto"
                color="primary"
                variant={motorCycle ? "contained" : "outlined"}
              />
            </div>

            <C.InputText
              multiline
              label="Imagem da capa"
              setFunction={setImgCape}
              placeholder="https://image.com"
              color="secondary"
            />

            <C.InputText
              multiline
              label="1ª Imagem da galeria"
              setFunction={setImgGalery1}
              placeholder="https://image.com"
              color="secondary"
            />

            <C.InputText
              multiline
              label="2ª Imagem da galeria"
              setFunction={setImgGalery2}
              placeholder="https://image.com"
              color="secondary"
            />

            <C.InputText
              multiline
              label="3ª Imagem da galeria"
              setFunction={setImgGalery3}
              placeholder="https://image.com"
              color="secondary"
            />

            <div className="div--field">
              <C.ButtonUI
                setBoolean={hideModalAnnouncement}
                type="submit"
                text="Cancelar"
                color="primary"
                variant="outlined"
              />
              <C.ButtonUI
                setBoolean={createVehicle}
                type="submit"
                text="Criar anúncio"
                color="primary"
                variant="contained"
              />
            </div>
          </form>
        </div>
      </section>
    </S.ContainerStyled>
  );
}

export default ModalAnnouncement;
