
import usersReducer from './usersReducer';


describe('Users Reducer', () => {
    it('Should return default state', () => {
        const newState = usersReducer(undefined, {});
        expect(newState).toEqual([]);
    })

    it('Should return new state if receiving type', () => {
        const posts = [{id:'Test 1', name:'Test 1', username: 'Test 1', email:'Test 1', address:{street:'test1',suite:'test1', city:'test1',zipcode:'test1',geo:{lat:'test1',lng:'test1'}}, phone:'Test 1', website:'Test 1', company:{name:'test1',catchPhrase:'test1',bs:'test1'}}];
        const newState = usersReducer(undefined,{
            type: 'FETCH_USER',
            payload: posts
        });
        expect(newState).toEqual(posts)
    })
})