import * as SpotUtil from '../util/spot_api_util';

export const RECEIVE_USER_SPOT = 'RECEIVE_USER_SPOT';

export const receiveUserSpot = spot => ({
  type: RECEIVE_USER_SPOT,
  spot
});

export const fetchSpot = (ownerId) =>  dispatch => {
  return SpotUtil.fetchSpot(ownerId)
    .then(spot => dispatch(receiveUserSpot(spot)));
};
