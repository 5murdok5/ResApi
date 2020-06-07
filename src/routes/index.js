const {Router} = require('express');

const router = Router();
// routes
router.get('/test', (req, res) => {
    const data = {
        "name": "santiago",
        "website": "santiago.com"
    }
    res.json(data);
});
module.exports = router;