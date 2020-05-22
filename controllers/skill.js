const skillsdb = require ('../models/skill');




function index(req, res) {
    res.render('skills/index', {
        skills: skillsdb.getAll()
    });
}

function show (req, res) {
    res.render('skills/show', {
    skill: skillsdb.getOne(req.params.idx)
});
}

function addPage(req, res) {
 res.render('skills/new')
}

function create(req, res) {
    skillsdb.add(req.body);
    res.redirect('/skills');
}

function deleteOne(req, res) {
    skillsdb.deleteOne(req.params.idx)
    res.redirect('/skills')
}

function editPage(req, res) {
    res.render('skills/update', {
        skills: skillsdb.getOne(req.params.idx),
        idx: req.params.idx
    })
}

function update(req, res) {
    skillsdb.update(req.params.idx, req.body);
    res.redirect('/skills');
}   

module.exports = {
    index,
    show,
    addPage,
    create,
    delete: deleteOne,
    editPage,
    update,
}