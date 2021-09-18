const BASE_URL = "https://hackathon-app-api.herokuapp.com";

export function SIMPLEGET(url) {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}${url}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}
export function POSTWITHBODY(url, userData) {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}${url}`, {
      method: "POST",
      body: userData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}
export function POSTWITHAUTH(url, userData) {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}${url}`, {
      method: "POST",
      body: userData,
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("operationDashToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}
