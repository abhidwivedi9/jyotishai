const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Proxy endpoint — keeps API key server-side
app.post('/api/kundali', async (req, res) => {
  try {
    const { name, dob, tob, place, rashi, career, experience, goals } = req.body;

    if (!name || !dob || !place) {
      return res.status(400).json({ error: 'Name, date of birth, and place are required' });
    }

    const prompt = `You are JyotishAI — an expert in both Vedic astrology (Jyotish) AND modern career counseling.

USER DETAILS:
- Name: ${name}
- Date of Birth: ${dob}
- Time of Birth: ${tob || 'Unknown'}
- Birth Place: ${place}
- Rashi (if selected): ${rashi || 'Calculate based on DOB'}
- Current Career/Field: ${career || 'Not specified'}
- Experience: ${experience || 'Not specified'}
- Career Question/Goals: ${goals || 'General guidance'}

Generate a comprehensive Vedic Kundali + Career Guidance report as JSON with these exact keys:
{
  "rashi": "Moon Sign",
  "lagna": "Ascendant sign",
  "nakshatra": "Birth star",
  "ruling_planet": "Main ruling planet",
  "planets": ["5-6 key planetary positions"],
  "personality": "3-4 sentences about personality based on birth chart",
  "career_analysis": "4-5 sentences deep career analysis",
  "ideal_careers": [
    {"icon": "emoji", "title": "Career", "reason": "1 sentence why"}
  ],
  "yearly_forecast": [
    {"year": "2025", "label": "Theme", "text": "2 sentence forecast"}
  ],
  "lucky_gems": ["Gem1", "Gem2"],
  "avoid_gems": ["Gem to avoid"],
  "lucky_numbers": [3, 7, 9],
  "lucky_colors": ["Color1", "Color2"],
  "mantra": "Sanskrit career mantra",
  "mantra_meaning": "English meaning",
  "action_plan": "4-5 sentences of concrete actionable career advice",
  "special_yoga": "Name and description of special planetary yoga"
}
Respond ONLY with valid JSON.`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2000,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || 'API error');

    let raw = data.content[0].text.trim().replace(/```json|```/g, '').trim();
    const result = JSON.parse(raw);

    res.json({ success: true, data: result });
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));

// Catch-all
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../frontend/index.html')));

app.listen(PORT, () => console.log(`🔯 JyotishAI running on http://localhost:${PORT}`));
