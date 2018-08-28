export const fetchSpot = (ownerId) => {
  return $.ajax({
    method: 'GET',
    url: `api/spots/${ownerId}`,
    data: {owner_id: ownerId}
  });
};
