
import {UPDATE_PERSON} from './../actions/personActions';
import personReducer from './personReducer';

describe('reducer',()=>{
    const initialState = {name:'Samip',email:'samip@mail.com'};
    
    it('should update person name only.',()=>{
        expect(
            personReducer(initialState,{
              type:UPDATE_PERSON,
              payload:'Samip Rai'  
            })
        ).toEqual({name:'Samip Rai',email:'samip@mail.com'})
    })
})