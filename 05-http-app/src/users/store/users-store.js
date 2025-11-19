const state = {
  users: [],
  currentPage: 0,
};

const loadNextPage = async () => {
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
