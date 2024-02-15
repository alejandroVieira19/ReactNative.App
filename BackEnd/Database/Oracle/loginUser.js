
import axios from 'axios';

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:3000/login', { email, password });

    if (response && response.data !== undefined) {
      return response.data;
    } else {
      throw new Error('Resposta inválida do servidor');
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('Erro de resposta do servidor:', error.response.data);
      throw new Error('Erro de resposta do servidor.');
    } else if (axios.isAxiosError(error) && !error.response) {
      console.error('Erro de rede:', error.message);
      throw new Error('Erro de rede. Verifique sua conexão com a internet.');
    } else {
      console.error('Erro ao fazer login:', error);
      throw new Error('Erro ao fazer login.');
    }
  }
};