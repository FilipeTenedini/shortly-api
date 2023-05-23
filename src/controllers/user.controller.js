import userRepository from '../repositories/user.repository.js';

async function showUserData(req, res) {
  const { user } = res.locals;
  const teste = await userRepository.showUserData(user.id);
  res.send(teste);
}
export default { showUserData };
