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

async function fetchTwo(sid) {
  const res = await fetch(
    `https://tripadvisor1.p.rapidapi.com/flights/poll?currency=USD&n=15&ns=NON_STOP%252CONE_STOP&so=PRICE&o=0&sid=${sid}`,
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

async function thirdFetch(sid, flight, sh) {
  const res = await fetch(
    `https://tripadvisor1.p.rapidapi.com/flights/get-booking-url?searchHash=${sh}&Dest=${destination}&id=${flight}&Orig=${origin}&searchId=${sid}`,
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

async function getFlightData() {
  try {
    const sessionId = await fetchOne();
    console.log("1st => ", sessionId);
    const sid = sessionId.search_params.sid;
    const getSessionHash = await fetchTwo(sid);
    console.log("2nd =>", getSessionHash);
    const flight = getSessionHash.itineraries[0].l[0].id;
    const sh = getSessionHash.summary.sh;
    const getDeepLink = await thirdFetch(sid, flight, sh);
    console.log("3rd =>", getDeepLink);

    //setState once after everything is finished
  } catch (err) {
    console.log("uh-oh =>>>>", err);
    getFlightData();
  }
}

getFlightData();

// fetchOne().then(flightData => {
//   const sidsy = flightData.search_params.sid;

//   fetchTwo(sidsy).then(moreFlightData => {
//     const flight = moreFlightData.itineraries[0].l[0].id;
//     const sh = moreFlightData.summary.sh;
//     thirdFetch(sidsy, flight, sh);
//   });
// });
