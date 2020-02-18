export const actionTypes = {
  LOAD_FULL_LIST: "LOAD_FULL_LIST",
  LOAD_FULL_LIST_SUCCESS: "LOAD_FULL_LIST_SUCCESS",
  LOAD_FULL_LIST_ERROR: "LOAD_FULL_LIST_ERROR",
  CLEAR_STATE: "CLEAR_STATE",
};

export function loadFullListError(error) {
  return {
    type: actionTypes.LOAD_FULL_LIST_ERROR,
    error
  };
}

export function loadFullList() {
  return { type: actionTypes.LOAD_FULL_LIST };
}

export function loadFullListSuccess(data) {
  return {
    type: actionTypes.LOAD_FULL_LIST_SUCCESS,
    data
  };
}

export function clearState() {
  return {
    type: actionTypes.CLEAR_STATE
  };
}