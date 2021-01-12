import e from 'express';
import Project from '../models/Project'

export async function getProjects(req, res) {
    try {
        const projects = await Project.findAll();
        console.log('projects', projects)
        res.status(200).json({
            data: projects
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: {}
        })
    }
}
export async function getOneProject(req, res) {
    try {
        const { id } = req.params;
        const project = await Project.findOne({
            where: {
                id: id
            }
        })
        res.status(200).json({
            data: project
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: {}
        })
    }
}
export async function createProject(req, res) {
    console.log(req.body)
    try {
        const { name, priority, description, deliverydate } = req.body;
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
            fields: ['name', 'priority', 'description', 'deliverydate']
        })
        if (newProject) {
            res.status(200).json({
                message: "Project created successfully",
                data: newProject
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: {}
        })
    }

}

export async function deleteProject(req, res) {
    try {
        const { id } = req.params;
        const deleted = await Project.destroy({
            where: {
                id: id
            }
        })
        res.status(200).json({
            message: "Project deleted successfully",
            count: deleted
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: {}
        })
    }
}

export async function updateProject(req, res) {
    try {
        const { id } = req.params;
        const { name, priority, description, deliverydate } = req.body;

        const projects = await Project.findAll({
            attributes: ['id', 'priority', 'description', 'deliverydate'],
            where: {
                id
            }
        })

        if (projects.length > 0) {
            projects.forEach(async project => {
                await project.update({
                    name,
                    priority,
                    description,
                    deliverydate
                })
            })
        }

        return res.status(200).json({
            message: 'Project update successfully',
            data: projects
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: {}
        })
    }

}