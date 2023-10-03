const tareasFrecuentesList = [
    {description: 'Tarea común 1', done: true, id: 1696309860496},
    {description: 'Tarea común 2', done: true, id: 1696309860497},
    {description: 'Tarea común 3', done: true, id: 1696309860498},
];

exports.tareasFrecuentes = (req, res) => {
    res.json(tareasFrecuentesList);
}