import {
  CREATE_TICKET,
  FETCH_TICKETS,
  FETCH_TICKET,
  DELETE_TICKET,
  EDIT_TICKET,
} from "./types";

import tickets from "../../apis/tickets";

export const createTicket = (data) => async (dispatch) => {
  const response = await tickets.post("/tickets", data);

  dispatch({ type: CREATE_TICKET, payload: response.data });
};
