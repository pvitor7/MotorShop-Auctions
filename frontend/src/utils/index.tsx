import { Vehicle } from "../interface/vehicle/index";
import axios from "axios";


export const convertInitialsName = (name: any) => {
  if(name){
  const splitName = name?.split(" ");
  return splitName.length > 1
    ? splitName[0][0] + splitName[1][0]
    : splitName[0][0];
  }
};

//Caso o leilão tenha data menor do que a do momento a função retorna expirado - O ternário está invertido para testes
export const timeAuction = (date: string) => {
  const paramsDateAuction = new Date(date);
  const timeNow = new Date();

  const timeUntilAuction = calculateTimeAuction(
    paramsDateAuction.getUTCDate(),
    paramsDateAuction.getUTCHours(),
    paramsDateAuction.getUTCMinutes()
  );
  return timeNow > paramsDateAuction ? "Encerrado" : timeUntilAuction;
};


export const calculateTimeAuction = (
  day: number,
  hour: number,
  minutes: number,
  ) => {
    const timeNow = new Date();
    const seconds = 0;

  let todayDateTime = {
    day: timeNow.getUTCDate(),
    hour: timeNow.getUTCHours(),
    minutes: timeNow.getUTCMinutes(),
    seconds: timeNow.getUTCSeconds(),
  };

  const convertDaysOfHours = 24 * (day - todayDateTime.day);
  const resultTime = { hours: convertDaysOfHours, minutes: 0, seconds: 0 };

  if (seconds - todayDateTime.seconds < 0) {
    resultTime.seconds = seconds + (59 - todayDateTime.seconds);
  } else {
    resultTime.seconds = seconds - todayDateTime.seconds;
  }
  
  if (minutes - todayDateTime.minutes < 0) {
    resultTime.minutes = minutes + (59 - todayDateTime.minutes);
  } else {
    resultTime.minutes = minutes - todayDateTime.minutes;
  }
  
  if (hour - todayDateTime.hour < 0) {
    resultTime.hours += hour + (24 - todayDateTime.hour);
  } else {
    resultTime.hours += hour - todayDateTime.hour;
  }
  
  const resultFormaded = { hours: '', minutes: '', seconds: '' };
  resultTime.hours < 10 ? resultFormaded.hours =`0${resultTime.hours}` : resultFormaded.hours = resultTime.hours.toString();
  resultTime.minutes < 10 ? resultFormaded.minutes =`0${resultTime.minutes}` : resultFormaded.minutes = resultTime.minutes.toString();
  resultTime.seconds < 10 ? resultFormaded.seconds =`0${resultTime.seconds}` : resultFormaded.seconds = resultTime.seconds.toString();

  return `${resultFormaded.hours}:${resultFormaded.minutes}:${resultFormaded.seconds}`
};

