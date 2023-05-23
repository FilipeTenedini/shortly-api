import rankingRepository from '../repositories/ranking.repository.js';

async function show(req, res) {
  try {
    const ranking = await rankingRepository.list();
    res.status(200).send(ranking);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
export default { show };
