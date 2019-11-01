import { FormStateMap } from "redux-form";
import { IJobCardState } from "./search-results/job-card/jobCardSlice";
import { ISearchState } from "./search/searchSlice";

export interface IRootState {
  search: ISearchState;
  jobCard: IJobCardState,
  form: FormStateMap,
}
