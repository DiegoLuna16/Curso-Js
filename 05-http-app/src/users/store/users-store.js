import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
  users: [],
  currentPage: 0,
};

const loadNextPage = async () => {
    await loadUsersByPage(state.currentPage + 1)
};

const loadPreviousPage = async () => {};

const onUserChanged = () => {};

const reloadPage = async () => {};

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,

  getUser: () => [...state.users],
  getCurrentPage: () => state.currentPage,
};
