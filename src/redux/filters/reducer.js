import { CHANGETEXT, CHANGEAUTHOR, CHANGECATEGORIES, CLEAR } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGETEXT:
            
            return {
                ...state,
                text : action.payload,
            };

        case CHANGEAUTHOR:
            return {
                ...state,
                author: action.payload,
            };

        case CLEAR:
            return {
                ...state,
                text : '',
                author : '',
                categories : []
            };

        case CHANGECATEGORIES:
            const { category, changeType } = action.payload;

            switch (changeType) {
                case "added":
                    return {
                        ...state,
                        categories : [...state.categories, category],
                    };

                case "removed":
                    return {
                        ...state,
                        categories : state.categories.filter(
                            (existingCategory) => existingCategory !== category
                        ),
                    };

                default:
                    return state;
            }

        default:
            return state;
    }
};

export default reducer;
