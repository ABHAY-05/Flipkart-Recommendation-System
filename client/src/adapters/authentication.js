import axios from "../adapters/axios";

const findToken = (tokenName) => {
  var token = NaN;
  document.cookie.split('; ').forEach(tk => {
    const temp = tk.split('=');
    if(temp[0] === tokenName) token = temp[1]
  }) 
  return token;
};


const authentication = async () => {
  try {
    const { data } = await axios.post("/accounts/authentication", {
      auth_token: findToken('auth_token')
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
