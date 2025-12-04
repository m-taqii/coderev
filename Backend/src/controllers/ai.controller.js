const aiService = require('../services/ai.service');

async function aiResponse(req, res) {
    const prompt = req.body.prompt;
    if (!prompt) {
        res.status(400).json({ message: "Prompt is required" })
    }
    const response = await aiService.generateResponse(prompt);
    res.send(response);
}

module.exports = {aiResponse};