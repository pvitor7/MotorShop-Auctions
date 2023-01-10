import { useContext, createContext, useState, useEffect } from "react";
import {
  IVehicleContext,
  ListVehicleProviderProps,
} from "../../interface/vehicle/index";
import axios from "axios";
import { toast } from "react-toastify";
import { useModal } from "../modal";

export const VehicleContext = createContext({} as IVehicleContext);

export const VehicleProvider = ({ children }: ListVehicleProviderProps) => {
  const { hideModalAnnouncement, setInOnModalAddPhoto, hideModalEditAnnouncement } = useModal();

  const [id, setId]: any = useState("");
  const [newComment, setNewComment]: any = useState("");
  const [vehicle, setVehicle]: any = useState({});
  const [newVehicle, setNewVehicle] = useState({});
  const [listVehicles, setListVehicles] = useState([]);
  const [listCars, setListCars] = useState([]);
  const [listMotorcycles, setListMotorcycles] = useState([]);
  const [newOffer, setNewOffer] = useState(0);
  const [newPhoto, setNewPhoto] = useState("");

  const [status, setStatus] = useState(true);
  const [sale, setSale] = useState(false);
  const [auction, setAuction] = useState(true);
  const [car, setCar] = useState(true);
  const [motorCycle, setMotorcycle] = useState(false);
  const [heading, setHeading] = useState("");
  const [dateAuction, setDateAuction] = useState("");
  const [year, setAge] = useState("");
  const [km, setKm] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImgCape] = useState("");
  const [imgGalery1, setImgGalery1] = useState("");
  const [imgGalery2, setImgGalery2] = useState("");
  const [imgGalery3, setImgGalery3] = useState("");
  const [typeVehicle, setTypeVehicle] = useState("");


  const NewCommentVehicle = () => {
    if (sessionStorage.getItem("user")) {
      const token = JSON.parse(sessionStorage.getItem("user") || "");
      axios
        .post(
          `http://localhost:3000/comment/${id}`,
          { comment: newComment },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((response) => {
          setNewComment("");
          getVehicleId();
          toast.success("Comentário registrado com sucesso!");
        })
        .catch((error) => toast.error(error.response.data.message));
    }
  };

  const NewVehicleFunction = () => {
    if (sessionStorage.getItem("user")) {
      const token = JSON.parse(sessionStorage.getItem("user") || "");

      axios
        .post("http://localhost:3000/vehicles", {
          heading,
          year,
          km,
          price,
          description,
          img,
          imgGalery1,
          imgGalery2,
          published: sale,
          status: true,
          auction: auction,
          dateAuction: dateAuction,
          categorie: typeVehicle,
          gallery:[{ url: imgGalery1 }, { url: imgGalery2 }, { url: imgGalery3 },
          ]
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          toast.success("Veículo registrado com sucesso!");
          hideModalAnnouncement();
          getVehicleId();
        })
        .catch((error) => toast.error(error.response.data.message));
    }
  };

  const VehicleUpdateFunction = () => {
    if (sessionStorage.getItem("user")) {
      const token = JSON.parse(sessionStorage.getItem("user") || "");

      axios
        .patch(`http://localhost:3000/vehicles/${id}`, {
          heading,
          year,
          km,
          price,
          description,
          img,
          imgGalery1,
          imgGalery2,
          published: status,
          status: status,
          auction,
          dateAuction: dateAuction,
          categorie: typeVehicle
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          toast.success("Veículo atualizado com sucesso!");
          hideModalEditAnnouncement();
          getVehicleId();
        })
        .catch((error) => toast.error(error.response.data.message));
    }
  };

  const DeleteVehicleFunction = () => {
    if (sessionStorage.getItem("user")) {
      const token = JSON.parse(sessionStorage.getItem("user") || "");

      axios
        .delete(`http://localhost:3000/vehicles/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          toast.success("Veículo excluído com sucesso!");
          hideModalEditAnnouncement();
          getVehicleId();
        })
        .catch((error) => toast.error(error.response.data.message));
    }
  };


  const NewOfferFunction = () => {
    if (sessionStorage.getItem("user")) {
      const token = JSON.parse(sessionStorage.getItem("user") || "");
      axios
        .post(
          `http://localhost:3000/offers/${id}`,
          { offer: Number(newOffer) },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(() => {
          setNewOffer(0)
          toast.success("Lance registrado com sucesso!");
          getVehicleId();
        })
        .catch((error) => {
          setNewOffer(0)
          toast.error(error.response.data.message);
        });
    }
  }

  const NewPhotoFunction = () => {
    if (sessionStorage.getItem("user")) {
      const token = JSON.parse(sessionStorage.getItem("user") || "");
      axios
        .post(
          `http://localhost:3000/gallery/${id}`,
          { url: newPhoto },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(() => {
          toast.success("Imagem registrada com sucesso!");
          setInOnModalAddPhoto(false);
          setNewPhoto('');
          getVehicleId();
        })
        .catch((error) => toast.error(error.response.data.message));
    }
  }

  const getVehicleId = () => {
    axios
    .get(`http://localhost:3000/vehicles/${id}`)
    .then((res) => setVehicle(res.data[0]));
  }

  useEffect(() => {

    getVehicleId();

    axios
    .get("http://localhost:3000/vehicles")
    .then((response) => {
      const vehiclesActive = response.data.filter((vehicle: any) => vehicle.status === true)
      setListVehicles(vehiclesActive)
    });



    axios
      .get("http://localhost:3000/categorie/car")
      .then((response) => {
        const carsActive = response.data[0].vehicles.filter((motors: any) => motors.status === true)
        setListCars(carsActive)
      })
      
    axios
      .get("http://localhost:3000/categorie/motorcycle")
      .then((response) => {
        const motorCycleActive = response.data[0].vehicles.filter((motors: any) => motors.status === true)
        setListMotorcycles(motorCycleActive)
      });
  }, [id, newComment, newVehicle, newPhoto, setNewOffer]);

  return (
    <VehicleContext.Provider
      value={{
        listVehicles,
        listCars,
        listMotorcycles,
        vehicle,
        setId,
        newVehicle,
        setNewVehicle,
        setNewComment,
        setNewOffer,
        setNewPhoto,
        NewCommentVehicle,
        NewVehicleFunction,
        NewOfferFunction,
        NewPhotoFunction,

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
        setStatus,
        setPrice,
        setDescription,
        setImgCape,
        setImgGalery1,
        setImgGalery2,
        setImgGalery3,
        setTypeVehicle,

        VehicleUpdateFunction,
        DeleteVehicleFunction
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicle = () => useContext(VehicleContext);
