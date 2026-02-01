import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state interface
interface ReduxStateData {
  reduxData: any;
  isModalOpen: boolean;
  pagination: any;
  modals: {};
  filterData: {},
  currentActiveTab: string;
}

// Define the initial state
const initialState: ReduxStateData = {
  reduxData: {},
  isModalOpen: false, // New state for modal open/close
  pagination: {pageSize:10,pageIndex:1},
  modals: {},
  filterData: {},
  currentActiveTab: '1',

};

// Create the sign up slice
const reduxDataSlice = createSlice({
  name: 'reduxData',
  initialState,
  reducers: {
    // Action to add sign up data
    reduxSliceData: (
      state,
      action: PayloadAction<{ key: string; data: any; id?: any }>
    ) => {
      state.reduxData[action.payload.key] = action.payload.data;
    },
    setFilterData: (state, action) => {
      state.filterData = action.payload;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    clearAll: () => initialState,
    pagination: (state, action) => {
      state.pagination = action.payload;
    },
    addOpenModal: (state: any, action: PayloadAction<string>) => {
      state.modals[action.payload] = true;
    },
    // Action to close a specific modal
    addCloseModal: (state: any, action: PayloadAction<string>) => {
      state.modals[action.payload] = false;
    },
    currentActiveTab: (state, action) => {
      state.currentActiveTab = action.payload;
    },


  },
});

// Export actions and reducer
export const {
  clearAll,
  reduxSliceData,
  openModal,
  closeModal,
  pagination,
  addOpenModal,
  addCloseModal,
  setFilterData,
  currentActiveTab, 

} = reduxDataSlice.actions;
export default reduxDataSlice.reducer;
