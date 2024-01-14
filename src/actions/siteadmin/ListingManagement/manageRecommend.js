import { gql } from 'react-apollo';
// Toaster
import { toastr } from 'react-redux-toastr';
import getAllListingsQuery from './getAllListing.graphql';

import {
  ADD_RECOMMEND_START,
  ADD_RECOMMEND_SUCCESS,
  ADD_RECOMMEND_ERROR,
  REMOVE_RECOMMEND_START,
  REMOVE_RECOMMEND_SUCCESS,
  REMOVE_RECOMMEND_ERROR
} from '../../../constants';


export function addListToRecommended(listId, currentPage, searchList) {

  return async (dispatch, getState, { client }) => {

    dispatch({
      type: ADD_RECOMMEND_START,
    });

    let mutation = gql`
      mutation addRecommend($listId: Int){
        addRecommend(listId: $listId) {
          id
          listId
          status
          errorMessage
        }
      }
    `;

    try {

      const { data } = await client.mutate({
        mutation,
        variables: { listId },
        refetchQueries: [{ query: getAllListingsQuery, variables: { currentPage, searchList } }]
      });

      if (data.addRecommend.status === 200) {
        dispatch({
          type: ADD_RECOMMEND_SUCCESS,
        });
        toastr.success("Success!", "Listing added to Recommended list");
      } else {
        dispatch({
          type: ADD_RECOMMEND_ERROR,
          payload: {
            status
          }
        });
        toastr.error("Error!", data.addRecommend.errorMessage);
      }
    } catch (error) {
      dispatch({
        type: ADD_RECOMMEND_ERROR,
        payload: {
          error
        }
      });
    }
  };
}

export function removeListFromRecommended(listId, currentPage, searchList) {

  return async (dispatch, getState, { client }) => {

    dispatch({
      type: REMOVE_RECOMMEND_START,
    });

    try {

      let mutation = gql`
        mutation removeRecommend($listId: Int){
          removeRecommend(listId: $listId) {
            listId
            status
            errorMessage
          }
        }
      `;

      const { data } = await client.mutate({
        mutation,
        variables: { listId },
        refetchQueries: [{ query: getAllListingsQuery, variables: { currentPage, searchList } }]
      });

      if (data.removeRecommend.status === 200) {

        dispatch({
          type: REMOVE_RECOMMEND_SUCCESS,
        });
        toastr.success("Success!", "Listing removed from Recommended list");
      } else {
        dispatch({
          type: REMOVE_RECOMMEND_ERROR,
          payload: {
            status: 'something went wrong'
          }
        });
        toastr.error("Error!", data.removeRecommend.errorMessage);
      }
    } catch (error) {
      dispatch({
        type: REMOVE_RECOMMEND_ERROR,
        payload: {
          error
        }
      });
    }
  };
}

