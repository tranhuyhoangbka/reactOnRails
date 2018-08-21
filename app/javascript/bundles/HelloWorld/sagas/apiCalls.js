import TravelServiceApi from '../api/travelServiceApi';

export const loadUser = () => {
  console.log('load user');
  return TravelServiceApi.getUser().then((res) => {
    return res;
  });
}

export const loadDeparture = (user) => {
  console.log('load departure');
  return TravelServiceApi.getDeparture(user).then(res => res);
}

export const loadFlight = (flightID) => {
  console.log('load flight');
  return TravelServiceApi.getFlight(flightID).then(res => res);
}

export const loadForecast = (date) => {
  console.log('load forecast');
  return TravelServiceApi.getForecast(date).then(res => res);
}
