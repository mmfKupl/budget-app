import {createAsyncThunk} from "@reduxjs/toolkit";
import {User} from "../../types/user";
import {getUserInfoByChatId} from "../../Api/budgetApi";

export const fetchUserByChatId = createAsyncThunk<User, number, { rejectValue: string }>(
  'user/fetchUser',
  async (chatId, {rejectWithValue}) => {
    try {
      let userInfo = await getUserInfoByChatId(chatId);
      return userInfo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)