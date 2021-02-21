
import update_game, {UPDATE_GAME} from './gameActions';

describe('actions',()=>{
    it('should return the action for person',()=>{
        const expectedAction = {
            type:UPDATE_GAME,
            payload:'Football'
        }

        expect(update_game).toEqual(expectedAction);
    })
})