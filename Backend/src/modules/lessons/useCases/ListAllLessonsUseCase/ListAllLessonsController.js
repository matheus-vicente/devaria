class ListAllLessonsController {
  #listAllLessonsService;

  constructor(listAllLessonsService) {
    this.#listAllLessonsService = listAllLessonsService;
  }

  handle(req, res) {
    try {
      const lessons = this.#listAllLessonsService.execute();

      return res.status(200).json(lessons);
    } catch (error) {
      return res.status(401).json({ error: String(error) });
    }
  }
}

module.exports = { ListAllLessonsController };
