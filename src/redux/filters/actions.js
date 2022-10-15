import { CHANGETEXT, CHANGEAUTHOR, CHANGECATEGORIES, CLEAR } from "./actionTypes";

export const categorychange = (category, changeType) => {
    return {
        type: CHANGECATEGORIES,
        payload: {
            category,
            changeType,
        },
    };
};

export const textchange = (text) => {
    return {
        type: CHANGETEXT,
        payload: text,
    };
};

export const authorchange = (author) => {
    return {
        type: CHANGEAUTHOR,
        payload: author,
    };
};

export const clearall = () => {
    return {
        type: CLEAR,
    };
};
