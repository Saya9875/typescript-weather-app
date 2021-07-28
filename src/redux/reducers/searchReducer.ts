import * as Actions from "../actions/actions";
import { initialState } from "../store/initialState";

export const searchReducer = (state = initialState.search, action: Actions.ActionUnion) => {
    switch (action.type) {
        case Actions.UPDATE_PREFECTURE:
            return {
                ...state,
                ...action.payload
            }
        case Actions.UPDATE_WEATHER:
            return {
                ...action.payload
                }
        case Actions.UPDATE_ERROR:
            return {
                ...action.payload
                }
        default:
            return state
    }
}
