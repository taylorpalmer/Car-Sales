export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = (newFeature) => (dispatch) => {
  dispatch({ type: "ADD_FEATURE", payload: newFeature });
};

export const removeFeature = (removedFeature) => (dispatch) => {
  dispatch({ type: "REMOVE_FEATURE", payload: removedFeature });
};
