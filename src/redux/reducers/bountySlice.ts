import type { Award } from "@interfaces/IAward";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AwardService from "@services/AwardService";
export const fetchUsers = createAsyncThunk("getUsers", AwardService.GetAwards);
interface BountyState {
  bounties: Award[];
  loading: boolean;
  error: boolean;
  errorMessage: string;
}
const initialState: BountyState = {
  bounties: [],
  loading: false,
  error: false,
  errorMessage: "",
};
const bountySlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.bounties = action.payload;
      state.loading = false;
      state.error = false;
      state.errorMessage = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.error.message || "";
    });
  },
});
export default bountySlice.reducer;
