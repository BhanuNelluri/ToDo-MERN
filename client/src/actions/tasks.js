import * as api from '../api';
import { FETCH_ALL,UPDATE,  START_LOADING, END_LOADING, DELETE, CREATE } from '../constants/ActionTypes';
import { success, alerterror } from './alerts';
//Action Creators



export const getTasks = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const {data } = await api.fetchTasks(id);
        console.log(data);
        const action = { type: FETCH_ALL, payload: {data} };
        console.log(action.payload);
        dispatch(action);
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
}

export const createTask = (taskData,history) => async (dispatch) => {
    try {
        // dispatch({ type: START_LOADING });
        const { data } = await api.createTask(taskData);
        const action = { type: CREATE, payload: {data} };
        dispatch(action);
        dispatch(success(`Task Added Succesfully`));
        // dispatch({ type: END_LOADING });

    } catch (error) {
        console.log(error);
        // dispatch(alerterror(`${error.message}`));
    }
}

export const updateTask = (task) => async (dispatch) => {
    try {
        // dispatch({ type: START_LOADING });
         dispatch({ type: UPDATE, payload: task });
         await api.updateTask(task);
        
        // dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
}
// export const updateWork = (id) => async (dispatch) => {
//     try {
//         const { data } = await api.updateTask(id);
//         console.log(data);
//         dispatch({ type: UPDATE, payload: data });
//     } catch (error) {
//         console.log(error);
//     }
// }


export const deleteTask = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE, payload: id })
        await api.deleteTask(id);
    } catch (error) {
        console.log(error);
    }
}

