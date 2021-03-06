import * as APIUtil from '../utils/api_util';

export const RECEIVE_CHAMPION = "RECEIVE_CHAMPION";
export const FILTER_CHAMPIONS = "FILTER_CHAMPIONS";

export const receiveChampion = (champion) => ({
  type: RECEIVE_CHAMPION,
  champion
});

export const fetchChampionData = (championKey) => {
  return (dispatch) => {
    return APIUtil.fetchChampionData(championKey).then(
      (res) => dispatch(receiveChampion(res.data))
    );
  }
}
