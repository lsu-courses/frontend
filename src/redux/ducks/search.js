import createAPIAction from "utils/redux-api";

// Action Types

export const PERFORM_SEARCH = "PERFORM_SEARCH";
export const PERFORM_SEARCH_SUCCESS = "PERFORM_SEARCH_SUCCESS";

export const REQUEST_DEPARTMENT = "REQUEST_DEPARTMENT";
export const REQUEST_DEPARTMENT_REQUEST = `${REQUEST_DEPARTMENT}_REQUEST`;
export const REQUEST_DEPARTMENT_SUCCESS = `${REQUEST_DEPARTMENT}_SUCCESS`;

export const FILTER_DEPARTMENT = "FILTER_DEPARTMENT";
export const CLEAR_DEPARTMENT = "CLEAR_DEPARTMENT";
export const SET_SEARCH = "SET_SEARCH";

// Default State

const defaultState = {
  results: undefined,
  department_cache: {},
  current_loading: false,
  current_set: [],
  current_department: "",
  current_filter: "",
  has_search: false
};

// Reducer

export default function reducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_SEARCH:
      return { ...state, search_input: payload.input };

    case PERFORM_SEARCH_SUCCESS:
      return {
        results: payload
      };

    case CLEAR_DEPARTMENT:
      return { ...state, has_search: false };

    case REQUEST_DEPARTMENT_REQUEST:
      return { ...state, current_loading: true };

    case REQUEST_DEPARTMENT_SUCCESS:
      let commonState = { ...state, has_search: true };

      if (payload.length === 0) {
        return {
          ...commonState,
          current_loading: false,
          current_department: null
        };
      } else {
        let dept_name = payload[0].abbreviation.toLowerCase();
        let new_dcache = { ...state.department_cache, [dept_name]: payload };

        return {
          ...commonState,
          current_department: dept_name,
          department_cache: new_dcache
        };
      }

    case FILTER_DEPARTMENT:
      if (state.current_department === null) {
        return {
          ...state,
          current_filter: null,
          current_set: []
        };
      } else {
        // If the action has a change attrib, then change the current
        // department being filtered.
        const department = payload.change || state.current_department;
        const selection = state.department_cache[department];
        let set = selection;
        let filter = payload.filter.toLowerCase();

        if (filter !== "") {
          // Being NaN indicates the user is searching for course name
          if (isNaN(filter)) {
            // Return all courses whose titles includes filter

            set = set.filter(s => {
              return s.sections.filter(sec =>
                sec.title.toLowerCase().includes(filter)).length > 0;
            });
          } else {
            // REturn all courses whose number includes filter
            let filtered_set = [];

            for (let i = 0; i < set.length; i++) {
              let item = set[i];
              if (item.number == filter) filtered_set.push(item);
              else if (item.number.includes(filter)) filtered_set.push(item);
            }

            set = filtered_set;
          }
        }

        return {
          ...state,
          current_department: department,
          current_loading: false,
          current_filter: filter,
          current_set: set
        };
      }

    default:
      return state;
  }
}

// Action Creators

export const clearDepartment = () => ({
  type: CLEAR_DEPARTMENT
});

export const filterDepartment = (filter, change) => ({
  type: FILTER_DEPARTMENT,
  payload: { filter, change }
});

export const setGlobalSearch = input => ({
  type: SET_SEARCH,
  payload: { input }
});

let url = process.env.REACT_APP_API_URL || "http://localhost:8080";

export const requestDepartment = dept =>
  createAPIAction({
    name: REQUEST_DEPARTMENT,
    endpoint: url + "/department",
    method: "GET",
    query: { dept }
  });
