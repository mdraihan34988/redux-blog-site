import { ADDBLOG } from "./actionTypes";
import initialState from "./initialState";

const nextBlogId = (blogs) => {
    const maxId = blogs.reduce((id, blog) => 
         Math.max(blog.Id, id), 0);
         
    return maxId + 1;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDBLOG:
            return [
                ...state,
                {
                    Id: nextBlogId(state),
                    ...action.payload
                },
            ];

        default:
            return state;
    }
};

export default reducer;
