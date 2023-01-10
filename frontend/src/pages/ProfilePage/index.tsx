import * as C from "../../components/index";
import ListAuction from "../../components/listAuctionCard";
import ListCard from "../../components/listCard";
import { useVehicle } from "../../providers/vehicles";
import { useState, useEffect } from "react";
import { useUser } from "../../providers/user/index";
import { Redirect, useParams } from "react-router-dom";

const ProfilePage = () => {

  const { user } = useUser();

  const motorCycles = user.vehicles?.filter(
    (vehicle) => vehicle.category === "motorCycle"
  );
  const cars = user.vehicles?.filter((vehicle) => vehicle.category === "car");

  return (
    <>
      <C.Header />
      <C.ProfileWelcome />
      {user?.is_active && <ListAuction listVehicles={user.vehicles} />}
      {cars && <ListCard owner={true} title={"Carros"} listVehicles={cars} />}
      {motorCycles && (
        <ListCard owner={true} title={"Motos"} listVehicles={motorCycles} />
      )}
      <C.Footer />
    </>
  );
};

export default ProfilePage;
