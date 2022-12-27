import { IUser } from "../../interface/propsComponents";
import { UserIconStyle } from "./styled";
import { convertInitialsName } from "../../utils/index"

const UserIcon = ({ name, color }: IUser) => {
  const initialColor = [
    ["A", "#191970"],
    ["B", "#00008B"],
    ["C", "#0000CD"],
    ["D", "#4682B4"],
    ["E", "#00CED1"],
    ["F", "#20B2AA"],
    ["G", "#008B8B"],
    ["H", "#2E8B57"],
    ["I", "#556B2F"],
    ["J", "#006400"],
    ["K", "#2E8B57"],
    ["L", "#3CB371"],
    ["M", "#00FA9A"],
    ["N", "#FFD700"],
    ["O", "#FFA500"],
    ["P", "#FF8C00"],
    ["Q", "#FF4500"],
    ["R", "#FF0000"],
    ["S", "#800000"],
    ["U", "#4B0082"],
    ["V", "#7B68EE"],
    ["W", "#9932CC"],
    ["X", "#A020F0"],
    ["Y", "#DA70D6"],
    ["Z", "#FF1493"],
  ];

  const initialName: string = name?.substr(0, 1).toUpperCase() || "";
  const iconInitial = convertInitialsName(name);
  
 let theme = initialColor.map((colorInitial) => {
    if(colorInitial[0] === initialName){
        return colorInitial[1];    
    }

});

  return (
    <UserIconStyle theme={theme}>
      <label className="icon-user"> {iconInitial}</label>

      {name && <p className="name-user">{name}</p>}
    </UserIconStyle>
  );
};

export { UserIcon };
