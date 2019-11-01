import { createSlice } from "redux-starter-kit";
import { IJobDescription } from "../search-results/job-card/types";

export interface ISearchState {
  isApiCallInProgress: boolean;
  fetchedJobs: IJobDescription[];
  isError: boolean;
  keyword: string;
  error?: any | null;
}

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    isApiCallInProgress: false,
    fetchedJobs: [],
    keyword: 'python',
    isError: false,
  } as ISearchState,
  reducers: {
    jobfetchStarted: (state) => ({
        isApiCallInProgress: true,
        fetchedJobs: [],
        isError: false,
        keyword: state.keyword,
    }),
    jobFetchedFinishedSuccess: (state, action) => ({
        isApiCallInProgress: false,
        fetchedJobs: action.payload,
        isError: false,
        keyword: state.keyword,
      }),
    jobFetchedFinishedError: (state, action) => ({
        isApiCallInProgress: false,
        fetchedJobs: action.payload,
        isError: true,
        keyword: state.keyword,
    }),
    setKeyword: (state, action) => ({
      ...state,
      keyword: action.payload,
    }),
  },
});

const { actions, reducer } = searchSlice;
const { jobFetchedFinishedError, jobFetchedFinishedSuccess, jobfetchStarted, setKeyword} = actions;

export {
  reducer as searchReducer,
  jobFetchedFinishedError,
  jobFetchedFinishedSuccess,
  jobfetchStarted,
  setKeyword,
};
