import jsonPlaceholder from '../../apis/jsonPlaceholder';


export const fetchPosts = () => {
    return async (dispatch) => {
    const reponse = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: reponse })
    
    };
};


