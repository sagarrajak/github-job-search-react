import { createSlice } from "redux-starter-kit";
import { IJobDescription } from "../job-card/types";

export interface IAppliedJobState {
  job: null | IJobDescription;
}

const appliedJobSlice = createSlice({
  name: 'appiledJob',
  initialState: {
    job: null,
  } as IAppliedJobState,
  reducers: {
    setAppliedJob: (state, action) => {
     state.job = action.payload;
     console.log({state}); 
     return state;   
    },
  },
});

const { actions, reducer } = appliedJobSlice;
const { setAppliedJob } =  actions;

export {
  reducer as appliedJobReducer,
  setAppliedJob,
};