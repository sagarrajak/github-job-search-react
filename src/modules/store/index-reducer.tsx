import { createSlice } from "redux-starter-kit";

const indexSlice = createSlice({
  name: "index",
  initialState: [],
  reducers: {},
});

export const IndexReducer = indexSlice.reducer;
