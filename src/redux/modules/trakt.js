import api from '../../api';
// ACTION TYPES
trending
export const TRAKT_TRENDING_FETCH = 'TRAKT_TRENDING_FETCH';
export const TRAKT_TRENDING_SUCCESS = 'TRAKT_TRENDING_SUCCESS';
export const TRAKT_TRENDING_FAILURE = 'TRAKT_TRENDING_FAILURE';

export const TRAKT_SEARCH_FETCH = 'TRAKT_SEARCH_FETCH';
export const TRAKT_SEARCH_SUCCESS = 'TRAKT_SEARCH_SUCCESS';
export const TRAKT_SEARCH_FAILURE = 'TRAKT_SEARCH_FAILURE';

export const TRAKT_RESET = 'TRAKT_RESET';


// REDUCER
const initialState = {
  loading: false,
  data: {
    Title: '',
    Poster: '',
    Plot: '',
    Year: '',
    Awards: '',
    Error: '',
    imdbID: '', 
  },
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TRAKT_TRENDING_FETCH:
      return { ...state, loading: true, error: null };
    case TRAKT_TRENDING_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: null,
      };
    case TRAKT_TRENDING_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    }

    case TRAKT_SEARCH_FETCH:
      return { ...state, loading: true, error: null };
    case TRAKT_SEARCH_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: null,
      };
    case TRAKT_SEARCH_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    }
    case TRAKT_RESET: {
      return initialState;
    }

    default:
      return state;
  }
};

// ACTIONS

export const fetchTrending = () => async (dispatch) => {
  dispatch({
    type: TRAKT_TRENDING_FETCH,
  });

  try {
    const { data } = await api.trending();

    dispatch({
      type: TRAKT_TRENDING_SUCCESS,
      payload: {
        data,
      },
    });
  } catch (err) {
    const { message } = err;

    dispatch({
      type: TRAKT_SEARCH_FAILURE,
      payload: {
        message,
      },
    });

    throw err;
  }
};

export const fetchSearch = (word, type) => async (dispatch) => {
  dispatch({
    type: TRAKT_SEARCH_FETCH,
  });
  
  try {
    const { data } = await api.search(word.toString(), type);
    dispatch({
      type: TRAKT_SEARCH_SUCCESS,
      payload: {
        data,
      },
    });
  } catch (err) {
    const { message } = err;

    dispatch({
      type: TRAKT_SEARCH_FAILURE,
      payload: {
        message,
      },
    });

    throw err;
  }
};

