import axios from 'axios';

/**
 * send form values to netlify
 * @param {object} values
 */
const netlifySubmit = async (values) => {
  const keys = Object.keys(values);
  const formData = new FormData();

  for (let i = 0; i < keys.length; i++) {
    formData.append(keys[i], values[keys[i]]);
  }

  return axios({
    method: 'post',
    url: '/',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: formData,
  });
};

export default netlifySubmit;
