import { ProfileWelcomeStyle } from "./style";
import { useUser } from "../../providers/user/index";
import { useState, useEffect } from "react";
import { useModal } from "../../providers/modal/index";
import { UserIcon } from "../"
import * as C from "../index";

export const ProfileWelcome = () => {
  const { user } = useUser();
  const { showModalAnnouncement } = useModal();

  const statusUser = user?.is_active ? "Anunciante" : "Comprador";

  const carNumbers = user.vehicles?.filter((vehicle) => vehicle.category === "car").length;
  const motorcycleNumbers = user.vehicles?.filter(
    (vehicle) => vehicle.category === "motorCycle"
  ).length;
  
  const auctionsNumber = user.vehicles?.filter(
    (vehicle) => vehicle.auction === true
  ).length

  return (
    <ProfileWelcomeStyle>
      <div>
      <UserIcon name={user?.name}/>
        <p className="name-profile">
          {user?.name}
          <C.LabelAgeKm info={statusUser} />
        </p>

        <p className="description">
          Vendedor cadastrado na planaforma desde {user?.created_at?.slice(8, 10)}/{user?.created_at?.slice(5, 7)}/{user?.created_at?.slice(0, 4)}. <br/>
          Possui {user.vehicles?.length} veículos cadastrados sendo {carNumbers} carros e {motorcycleNumbers} motos. No momento {auctionsNumber} estão com leilão ativo.
        </p>

        {user && (
          <C.ButtonUI
            setBoolean={showModalAnnouncement}
            text="Criar anuncio"
            variant="outlined"
            size="large"
          />
        )}
      </div>
    </ProfileWelcomeStyle>
  );
};
