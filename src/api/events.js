import { axios } from 'axios';

export const getTask = async () => {
  try {
    const result = await axios.get('/task');
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const addTask = async event => {
  try {
    const result = await axios.post('/task', event);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const editTask = async event => {
  try {
    const result = await axios.patch(`/task/${event.id}`, event);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTask = async taskId => {
  try {
    const result = await axios.delete(`/task${taskId}`);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
