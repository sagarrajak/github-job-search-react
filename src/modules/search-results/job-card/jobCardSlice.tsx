import { createSlice } from "redux-starter-kit";


export interface IJobCardState {
  selectedId: string;
}

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    selectedId: ''
  },
  reducers: {
    setSelectedCard: (state, action) => {
      state.selectedId = action.payload;
      console.log({action});
      return state;
    }
  },
});

const { actions, reducer } = searchSlice;
const { setSelectedCard } = actions;

export { reducer as jobCardReducer, setSelectedCard };

