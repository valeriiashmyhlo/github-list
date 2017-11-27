import { combineEpics } from 'redux-observable';
import reposEpic from './features/repos/epic';
import contributorsEpic from './features/contributors/epic';
import authEpic from './features/auth/epic';

export default combineEpics(reposEpic, contributorsEpic, authEpic);
