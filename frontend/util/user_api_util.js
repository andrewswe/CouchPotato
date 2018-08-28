export const fetchUser = id => {
  return $.ajax(`/api/users/${id}`);
};
