const fetch = require("node-fetch");

const api_key = process.env.REACT_APP_API_SKYSCANNER_KEY

const outbound = "2020-04-01";
const inbound = "2020-04-10";
const origin = "ORD";
const destination = "LAX";

async function fetchOne(outbound, inbound, origin, destination) {
  const res = await fetch(
    `https://tripadvisor1.p.rapidapi.com/flights/create-session?dd2=${inbound}&currency=USD&o2=${destination}&d2=${origin}&ta=1&c=0&d1=${destination}&o1=${origin}&dd1=${outbound}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": api_key
      }
    }
  );
  return await res.json();
}

async function fetchTwo(sidsy) {
  const res = await fetch(
    `https://tripadvisor1.p.rapidapi.com/flights/poll?currency=USD&n=15&ns=NON_STOP%252CONE_STOP&so=PRICE&o=0&sid=${sidsy}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": api_key
      }
    }
  );
  return await res.json();
}

async function thirdFetch(sidsy, flight, sh) {
  const res = await fetch(
    `https://tripadvisor1.p.rapidapi.com/flights/get-booking-url?searchHash=${sh}&Dest=${destination}&id=${flight}&Orig=${origin}&searchId=${sidsy}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": api_key
      }
    }
  );
  return await res.json();
}

export async function getFlightData() {
  try {
    const flightData = await fetchOne();
    console.log("1st => ", flightData);
    const sidsy = flightData.search_params.sid;
    const moreFlightData = await fetchTwo(sidsy);
    console.log("2nd =>", moreFlightData);
    const flight = moreFlightData.itineraries[0].l[0].id;
    const sh = moreFlightData.summary.sh;
    const evenMoreFlightData = await thirdFetch(sidsy, flight, sh);
    console.log("3rd =>", evenMoreFlightData);

    //return whatever you need for setState
  } catch (err) {
    console.log("uh-oh =>>>>", err);
    getFlightData();
  }
}
