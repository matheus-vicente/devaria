class ListAllLessonsController {
  listAllLessonsService;

  constructor(listAllLessonsService) {
    this.listAllLessonsService = listAllLessonsService;
  }

  async handle(req, res) {
    try {
      const lessons = await this.listAllLessonsService.execute();

      return res.status(200).json(lessons);
    } catch (error) {
      return res.status(401).json({ error: String(error) });
    }
  }
}

module.exports = { ListAllLessonsController };
