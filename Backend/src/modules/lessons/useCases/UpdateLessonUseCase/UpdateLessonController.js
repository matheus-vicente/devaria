class UpdateLessonController {
  #updateLessonService;

  constructor(updateLessonService) {
    this.#updateLessonService = updateLessonService;
  }

  async handle(req, res) {
    try {
      const { id } = req.params;
      const { name, class_date } = req.body;

      const lesson = await this.#updateLessonService.execute(id, name, class_date);

      return res.status(200).json(lesson);
    } catch (error) {
      return res.status(400).json({ error: String(error) });
    }
  }
}

module.exports = { UpdateLessonController };
