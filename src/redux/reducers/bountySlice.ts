import type { Award } from "@interfaces/IAward";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AwardService from "@services/AwardService";

export const fetchBounties = createAsyncThunk("getUsers", AwardService.GetAwards);
interface BountyState {
  data: Award[];
  loading: boolean;
  error: boolean;
  errorMessage: string;
}
const initialState: BountyState = {
  data: [],
  loading: false,
  error: false,
  errorMessage: "",
};
const bountySlice = createSlice({
  name: "bounties",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBounties.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBounties.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
      state.errorMessage = "";
    });
    builder.addCase(fetchBounties.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.error.message || "";
    });
  },
});

export default bountySlice;
