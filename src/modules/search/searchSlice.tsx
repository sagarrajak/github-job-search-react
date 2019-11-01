import { createSlice } from "redux-starter-kit";
import { IJobDescription } from "../search-results/job-card/types";

export interface ISearchState {
  isApiCallInProgress: boolean;
  fetchedJobs: IJobDescription[];
  isError: boolean;
  error?: any | null;
}

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    isApiCallInProgress: false,
    fetchedJobs: [],
    isError: false,
  } as ISearchState,
  reducers: {
    jobfetchStarted: () => {
      return {
        isApiCallInProgress: true,
        fetchedJobs: [],
        isError: false,
      };
    },
    jobFetchedFinishedSuccess: (_, action) => ({
        isApiCallInProgress: false,
        fetchedJobs: action.payload,
        isError: false,
    }),
    jobFetchedFinishedError: (_, action) => ({
      isApiCallInProgress: false,
      fetchedJobs: action.payload,
      isError: true,
    }),
  },
});

const { actions, reducer } = searchSlice;
const { jobFetchedFinishedError, jobFetchedFinishedSuccess, jobfetchStarted } = actions;

export {
  reducer as searchReducer,
  jobFetchedFinishedError,
  jobFetchedFinishedSuccess,
  jobfetchStarted,
};
