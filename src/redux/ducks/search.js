import createAPIAction from "utils/redux-api";

// Action Types

export const PERFORM_SEARCH = "PERFORM_SEARCH";
export const PERFORM_SEARCH_SUCCESS = "PERFORM_SEARCH_SUCCESS";

export const REQUEST_DEPARTMENT = "REQUEST_DEPARTMENT";
export const REQUEST_DEPARTMENT_SUCCESS = "REQUEST_DEPARTMENT_SUCCESS";

export const FILTER_DEPARTMENT = "FILTER_DEPARTMENT";

export const CLEAR_DEPARTMENT = "CLEAR_DEPARTMENT";

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

  //console.log(action);

  switch (type) {
    case PERFORM_SEARCH_SUCCESS:
      console.log(payload);
      return {
        results: payload
      };

    case CLEAR_DEPARTMENT:
      return { ...state, has_search: false };

    case FILTER_DEPARTMENT:
      // If the action has a change attrib, then change the current
      // department being filtered.
      const department = payload.change || state.current_department;
      const selection = state.department_cache[department];
      let set = selection;
      let filter = payload.filter.toLowerCase();

      console.time("filter_dept");

      console.log("[Reducer] Applying filter to: " + state.current_department);

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
          //set = filter_fast(set, s => s.number.includes(filter));
          set = set.filter(s => s.number.includes(filter));
        }
      }

      console.timeEnd("filter_dept");

      return {
        ...state,
        current_department: department,
        current_loading: false,
        current_filter: filter,
        current_set: set,
        has_search: true
      };

    case REQUEST_DEPARTMENT_SUCCESS:
      let dept_name = payload[0].abbreviation.toLowerCase();
      let new_dcache = { ...state.department_cache };
      new_dcache[dept_name] = payload;

      console.log("[Reducer] Got department: " + dept_name);

      return {
        ...state,
        current_loading: true,
        current_department: dept_name,
        department_cache: new_dcache,
        has_search: true
      };

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

const url = process.env.API_URL || "http://localhost:8080";

export const requestDepartment = dept =>
  createAPIAction({
    name: REQUEST_DEPARTMENT,
    endpoint: url + "/department",
    method: "GET",
    query: { dept }
  });

export const performSearch = input =>
  createAPIAction({
    name: PERFORM_SEARCH,
    endpoint: "http://localhost:8080",
    method: "GET",
    query: {
      test: "test",
      input: input
    }
  });
