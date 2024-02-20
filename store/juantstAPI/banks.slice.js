import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_bank_list = createAsyncThunk(
  "banks/api_v1_bank_list",
  async payload => {
    const response = await apiService.api_v1_bank_list(payload)
    return response.data
  }
)
export const api_v1_bank_create = createAsyncThunk(
  "banks/api_v1_bank_create",
  async payload => {
    const response = await apiService.api_v1_bank_create(payload)
    return response.data
  }
)
export const api_v1_bank_retrieve = createAsyncThunk(
  "banks/api_v1_bank_retrieve",
  async payload => {
    const response = await apiService.api_v1_bank_retrieve(payload)
    return response.data
  }
)
export const api_v1_bank_update = createAsyncThunk(
  "banks/api_v1_bank_update",
  async payload => {
    const response = await apiService.api_v1_bank_update(payload)
    return response.data
  }
)
export const api_v1_bank_partial_update = createAsyncThunk(
  "banks/api_v1_bank_partial_update",
  async payload => {
    const response = await apiService.api_v1_bank_partial_update(payload)
    return response.data
  }
)
export const api_v1_bank_destroy = createAsyncThunk(
  "banks/api_v1_bank_destroy",
  async payload => {
    const response = await apiService.api_v1_bank_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const banksSlice = createSlice({
  name: "banks",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_bank_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bank_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bank_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bank_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bank_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bank_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bank_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bank_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bank_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bank_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bank_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bank_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bank_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bank_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bank_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bank_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bank_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bank_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_bank_list,
  api_v1_bank_create,
  api_v1_bank_retrieve,
  api_v1_bank_update,
  api_v1_bank_partial_update,
  api_v1_bank_destroy,
  slice: banksSlice
}
