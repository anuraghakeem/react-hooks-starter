
import postReducer from './postReducer';


describe('Posts Reducer', () => {
    it('Should return default state', () => {
        const newState = postReducer(undefined, {});
        expect(newState).toEqual([]);
    })

    it('Should return new state if receiving type', () => {
        const posts = [{userId:'Test 1', id:'Test 1', title: 'Test 1', body:'Test 1'}];
        const newState = postReducer(undefined,{
            type: 'FETCH_POSTS',
            payload: posts
        });
        expect(newState).toEqual(posts)
    })
})
