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
  const { hideModalAnnouncement, setInOnModalAddPhoto } = useModal();

  const [id, setId]: any = useState("");
  const [newComment, setNewComment]: any = useState("");
  const [vehicle, setVehicle]: any = useState({});
  const [newVehicle, setNewVehicle] = useState({});
  const [listVehicles, setListVehicles] = useState([]);
  const [listCars, setListCars] = useState([]);
  const [listMotorcycles, setListMotorcycles] = useState([]);
  const [newOffer, setNewOffer] = useState(0);
  const [newPhoto, setNewPhoto] = useState("");

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
          toast.success("Comentárop registrado com sucesso!");
        })
        .catch(() => toast.error("Ops! Algo deu errado!"));
    }
  };

  const NewVehicleFunction = () => {
    if (sessionStorage.getItem("user")) {
      const token = JSON.parse(sessionStorage.getItem("user") || "");

      axios
        .post("http://localhost:3000/vehicle", newVehicle, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          toast.success("Veículo registrado com sucesso!");
          hideModalAnnouncement();
        })
        .catch(() => toast.error("Ops! Algo deu errado!"));
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
        })
        .catch(() => toast.error("Ops! O lance não foi registrado!"));
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
          setNewPhoto('')
        })
        .catch(() => toast.error("Ops! A imagem não foi registrada!"));
    }
  }


  useEffect(() => {

    axios
      .get(`http://localhost:3000/vehicle/${id}`)
      .then((res) => setVehicle(res.data[0]));

    axios
      .get("http://localhost:3000/vehicle")
      .then((response) => setListVehicles(response.data));

    axios
      .get("http://localhost:3000/categorie/car")
      .then((response) => setListCars(response.data.vehicles));

    axios
      .get("http://localhost:3000/categorie/motorCycle")
      .then((response) => setListMotorcycles(response.data.vehicles));
  }, [id, newComment, newVehicle, newPhoto]);

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
        NewPhotoFunction
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicle = () => useContext(VehicleContext);
