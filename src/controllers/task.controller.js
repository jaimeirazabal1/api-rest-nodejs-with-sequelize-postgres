import Task from '../models/Task';

export async function createTask(req, res) {
    try {
        const { name, done, projectid } = req.body;
        const newTask = await Task.create({
            name,
            done,
            projectid
        }, {
            fields: ['name', 'done', 'projectid']
        })
        res.json({ message: "New Task created" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export async function getTasks(req, res) {
    try {

        const tasks = await Task.findAll({
            attributes: ['id', 'name', 'done', 'projectid']
        })
        res.json({ data: tasks })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}
export async function getOneTask(req, res) {
    try {
        const { id } = req.params;
        console.log(req.params)
        const tasks = await Task.findAll({
            attributes: ['id', 'name', 'done', 'projectid'],
            where: {
                id: req.params.id
            }
        })
        res.json({ data: tasks })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export async function updateTask(req, res) {
    try {
        const { id } = req.params;
        const { name, done } = req.body;

        const tasks = await Task.findAll({
            attributes: ['id', 'name', 'done', 'projectid'],
            where: {
                id
            }
        })

        if (tasks.length > 0) {
            tasks.forEach(async project => {
                await Task.update({
                    name,
                    done
                })
            })
        }

        return res.status(200).json({
            message: 'Task update successfully',
            data: tasks
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: {}
        })
    }
}
export async function deleteTask(req, res) {
    try {
        const { id } = req.params;
        const deleted = await Task.destroy({
            where: {
                id: id
            }
        })
        res.status(200).json({
            message: "Task deleted successfully",
            count: deleted
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: {}
        })
    }
}
export async function getTaskByProject(req, res) {
    try {

        const tasks = await Task.findAll({
            attributes: ['id', 'name', 'done', 'projectid'],
            where: {
                projectid: req.params.projectid
            }
        })
        res.json({ data: tasks })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}