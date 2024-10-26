import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SubredditState {
  subreddits: string[];
}

const initialState: SubredditState = {
  subreddits: [],
};

const subredditSlice = createSlice({
  name: "subreddits",
  initialState,
  reducers: {
    addSubreddit(state, action: PayloadAction<string>) {
      if (!state.subreddits.includes(action.payload)) {
        state.subreddits.push(action.payload);
      }
    },
    removeSubreddit(state, action: PayloadAction<string>) {
      state.subreddits = state.subreddits.filter(
        (sub) => sub !== action.payload
      );
    },
    setSubreddits(state, action: PayloadAction<string[]>) {
      state.subreddits = action.payload;
    },
  },
});

export const { addSubreddit, removeSubreddit, setSubreddits } =
  subredditSlice.actions;
export default subredditSlice.reducer;
