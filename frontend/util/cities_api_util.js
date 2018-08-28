export const fetchCities = (searchString) => {
  return $.ajax({
    method: 'GET',
    url: '/api/cities',
    data: {searchString}
  });
};

export const fetchCity = (id) => {
  return $.ajax(`/api/cities/${id}`);
};
