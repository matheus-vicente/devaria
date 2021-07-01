class UpdateLessonController {
  #updateLessonService;

  constructor(updateLessonService) {
    this.#updateLessonService = updateLessonService;
  }

  handle(req, res) {
    try {
      const { id } = req.params;
      const { name, lesson_date } = req.body;

      this.#updateLessonService.execute(id, name, lesson_date);

      return res.status(200).send();
    } catch (error) {
      return res.status(400).json({ error: String(error) });
    }
  }
}

module.exports = { UpdateLessonController };
