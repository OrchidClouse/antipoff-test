import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface LikeState {
  likes: string[] | undefined
}

const initialState: LikeState = {
  likes: []
}

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    likeUser: (state, action: PayloadAction<string>) => {
      state.likes?.push(action.payload);
    },
    unlikeUser: (state, action: PayloadAction<string>) => {
      state.likes = state.likes?.filter(id => id !== action.payload);
    },
  },
});

export const selectLikes = (state: RootState) => state.like.likes
export const {likeUser, unlikeUser} = likeSlice.actions;
export default likeSlice.reducer;
