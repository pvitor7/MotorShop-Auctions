import * as S from "./style";
import { useState } from "react";
import * as C from "../../../components/index";
import { useModal } from "../../../providers/modal";
import { useVehicle } from "../../../providers/vehicles";

function ModalEditAnnouncement() {
  const { inOnEditAnnouncement, setInOnEditAnnouncement, hideModalEditAnnouncement } =
  useModal();
  const { 
    vehicle,
    setNewVehicle, 
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
    setTypeVehicle,
    VehicleUpdateFunction,
    DeleteVehicleFunction
  } = useVehicle();


  const modal = inOnEditAnnouncement
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

  const carTrue = () => {
    setCar(true);
    setMotorcycle(false);
    setTypeVehicle("car");
  }
  
  const motorcycleTrue = () => {
    setMotorcycle(true);
    setCar(false);
    setTypeVehicle("motorcycle");
    
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
            <h1>Editar anúncio</h1>
            <button
              className="removedModal"
              onClick={() => hideModalEditAnnouncement()}
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
              placeholder={vehicle?.heading}
              color="secondary"
            />

            <div className="div--field">
              <C.InputText
                setFunction={setAge}
                type="number"
                label="Ano"
                rows={1}
                placeholder={vehicle?.year}
                color="secondary"
              />

              <C.InputText
                setFunction={setKm}
                label="Quilometragem"
                rows={1}
                placeholder={vehicle?.km}
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
              placeholder={vehicle?.description}
              color="secondary"
            />

            <div className="div--field">
              <C.ButtonUI
                setBoolean={carTrue}
                type="submit"
                text="Carro"
                color="primary"
                variant={car ? "contained" : "outlined"}
              />

              <C.ButtonUI
                setBoolean={motorcycleTrue}
                type="submit"
                text="Moto"
                color="primary"
                variant={motorCycle ? "contained" : "outlined"}
              />
            </div>

            <div className="div--field">
              <C.ButtonUI
                setBoolean={VehicleUpdateFunction}
                type="submit"
                text="Salvar"
                color="primary"
                variant="outlined"
              />
              <C.ButtonUI
                setBoolean={DeleteVehicleFunction}
                type="submit"
                text="Excluir anúncio"
                color="primary"
                variant="outlined"
              />
            </div>
          </form>
        </div>
      </section>
    </S.ContainerStyled>
  );
}

export default ModalEditAnnouncement;
