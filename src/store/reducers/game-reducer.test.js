import {UPDATE_GAME} from './../actions/gameActions';
import gameReducer from './gameReducer';

describe('reducer',()=>{
    const initialState = {name:'Baseball'};

    it('should update game name',()=>{
        expect(
            gameReducer(initialState,{
                type:UPDATE_GAME,
                payload:'Football'
            })
        ).toEqual({name:'Football'})
    })
})
