/* eslint-disable */
/* eslint-disable import/prefer-default-export */

export const parseUTCDate = (apiDate) => {
  const utcDate = apiDate.split('');
  utcDate.splice(4, 0, '-');
  utcDate.splice(7, 0, '-');
  utcDate.splice(13, 0, ':');
  utcDate.splice(16, 0, ':');
  return new Date(utcDate.join(''))
};

export const getFullMinutes = (date) =>{
   if (date.getMinutes() < 10){
    return `0${date.getMinutes()}`
   }
   return date.getMinutes()
}

export const calculateDelay = (baseDeparture, realDeparture) => {
  if(baseDeparture.getTime() !== realDeparture.getTime()){
    //since getTime returns time in milliseconds thus /(1000*60) converts it back to seconds and then minutes
    const minutesDelayed = (realDeparture.getTime() - baseDeparture.getTime())/(1000*60); 
    if(minutesDelayed >= 60){
     // console.log("more "+ `${Math.floor(minutesDelayed / 60)}h${minutesDelayed % 60}`)
      return `Delay: ${Math.floor(minutesDelayed / 60)}h${minutesDelayed % 60}`;
    }
    return `Delay ${minutesDelayed}min`;
  }
  return "on Time";
}