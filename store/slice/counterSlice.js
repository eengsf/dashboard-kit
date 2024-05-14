import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navbar: "Overview",
  page: 8,
  pageAwal: 1,
  pageAkhir: 1,
  pageLength: 0,
  sort: "Sort",
  filter: "Filter",
  searchCN: "",
  burger: false,
};

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    setNavbar(state, action) {
      state.navbar = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setPageAwal(state, action) {
      state.pageAwal = action.payload;
    },
    setPageAkhir(state, action) {
      state.pageAkhir = action.payload;
    },
    setPageLength(state, action) {
      state.pageLength = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setSearchCN(state, action) {
      state.searchCN = action.payload;
    },
    setBurger(state) {
      state.burger = !state.burger;
    },
  },
});

export const {
  setNavbar,
  setPage,
  setPageAwal,
  setPageAkhir,
  setPageLength,
  setSort,
  setFilter,
  setSearchCN,
  setBurger,
} = counterSlice.actions;
