const skills =[ 
    {skill: 'HTML', learned: false},
    {skill: 'CSS', learned: false},
    {skill: 'Node', learned: false},
    {skill: 'React', learned: false},
    {skill: 'Python', learned: false}
];


module.exports = {
    getAll, 
    getOne,
    add,
    deleteOne,
    update,
    
}




function update (idx, skils){
skills[idx]=skill

}


function getAll () {
    return skills
}

function getOne (idx) {
    return skills[idx]
}

function add (skill){
    skills.push(skill)
}

function deleteOne(idx) {
    skills.splice(idx, 1);
}