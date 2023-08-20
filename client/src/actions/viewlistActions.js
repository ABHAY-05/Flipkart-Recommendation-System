import axios from "../adapters/axios";

export const addToViewlist = (item) => async (dispatch, getState) => {
  const { isAuthenticate, user } = getState().userReducer;
  if (isAuthenticate) {
    try {
      await axios.post("/viewlist/add-item", {
        userId: user._id,
        productId: item,
      });
    } catch (error) {}
  }
};

export const removeFromViewlist = () => async (dispatch, getState) => {
  const { isAuthenticate, user } = getState().userReducer;
  if (isAuthenticate) {
    try {
      await axios.delete("/viewlist/remove-item", {
        data: {
          userId: user._id,
        },
      });
    } catch (error) {}
  }
};

export const getViewlistItems = () => async (dispatch, getState) => {
  const { isAuthenticate, user } = getState().userReducer;
  if (isAuthenticate) {
    try {
      const { data } = await axios.get(`/viewlist/get-items/${user._id}`);
      const viewlistItems = [];

      data?.map((value) => {
        viewlistItems.push(value);
      });
      return viewlistItems;
    } catch (error) {console.error(error)}
  }
};