import { LOGGED_IN } from "./types";

export const loggedIn = (payload) => {
  return {
    type: LOGGED_IN,
    payload,
  };
};