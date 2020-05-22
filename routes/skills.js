var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skill')

router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.addPage);
router.get('/:idx', skillsCtrl.show);
router.post('/add', skillsCtrl.create);
router.delete('/:idx', skillsCtrl.delete);
router.put('/edit:idx', skillsCtrl.update);
router.get('/edit:idx', skillsCtrl.editPage);





module.exports = router;

