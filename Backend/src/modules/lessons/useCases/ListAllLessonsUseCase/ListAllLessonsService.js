class ListAllLessonsService {
  #lessonsRepository;

  constructor(lessonsRepository) {
    this.#lessonsRepository = lessonsRepository;
  }

  execute() {
    const lessons = this.#lessonsRepository.list();

    return lessons;
  }
}

module.exports = { ListAllLessonsService };
