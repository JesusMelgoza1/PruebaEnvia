import axios from "axios";


export const getCredits = (key) => {
    const request = {
    //   host: REACT_APP_LIBER_HOST_URL,
      method: "GET",
      url: 'https://eshop-deve.herokuapp.com/api/v2/orders',
      headers: {
        "content-type": "application/json",
        Authorization: key
      },
    };
  
    return axios(request);
  };
  