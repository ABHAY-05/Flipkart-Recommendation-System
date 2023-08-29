import axios from "../adapters/axios";

const authentication = async () => {
  try {
    const { data } = await axios.post("/accounts/authentication", {
      auth_token: document.cookie
    });
    return {
      isAuth: data.isAuthenticate,
      user: data.user,
    };
  } catch (error) {
    throw error;
  }
};

export default authentication;
