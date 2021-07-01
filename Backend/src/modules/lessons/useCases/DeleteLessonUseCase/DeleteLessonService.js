class DeleteLessonService {
  #lessonsRepository;

  constructor(lessonsRepository) {
    this.#lessonsRepository = lessonsRepository;
  }

  execute(id) {
    const module = this.#lessonsRepository.findById(id);

    if (!module) {
      throw new Error('Não é possível remover uma aula inexistente!');
    }

    this.#lessonsRepository.delete(id);
  }
}

module.exports = { DeleteLessonService };
