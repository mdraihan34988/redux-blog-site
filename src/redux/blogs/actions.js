import { ADDBLOG } from "./actionTypes";

export const addblog = (data) => {
    return {
        type: ADDBLOG,
        payload: data
    };
};

