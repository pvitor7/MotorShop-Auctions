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
          toast.success("Comentário registrado com sucesso!");
        })
        .catch((error) => toast.error(error.response.data.message));
    }
  };

  const NewVehicleFunction = () => {
    if (sessionStorage.getItem("user")) {
      const token = JSON.parse(sessionStorage.getItem("user") || "");

      console.log({heading, year, km, price, description, img, published: sale, status: auction, auction: auction, dateAuction: dateAuction, categorie: typeVehicle || "car", gallery:[{ url: imgGalery1 }, { url: imgGalery2 }, { url: imgGalery3 }]})

      axios
        .post("http://localhost:3000/vehicle", {
          heading,
          year,
          km,
          price,
          description,
          img,
          imgGalery1,
          imgGalery2,
          published: sale,
          status: auction,
          auction: auction,
          dateAuction: dateAuction,
          categorie: typeVehicle || "car",
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
          setNewPhoto('')
        })
        .catch((error) => toast.error(error.response.data.message));
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
  }, [id, newComment, newVehicle, newPhoto, setNewOffer, vehicle]);

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
        setPrice,
        setDescription,
        setImgCape,
        setImgGalery1,
        setImgGalery2,
        setImgGalery3,
        setTypeVehicle,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicle = () => useContext(VehicleContext);
