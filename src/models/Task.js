import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Project from "./Project";

import TaskModel from './Task';

const Task = sequelize.define('task',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
        type:Sequelize.TEXT
    },
    done:{
        type:Sequelize.BOOLEAN
    },
    projectid:{
        type:Sequelize.INTEGER
    },
    
},{
    timestamps:false
})

Project.hasMany(Task,{ foreignKey : 'projectid', sourceKey:'id' })
Task.belongsTo(Project, { foreignKey : 'projectid', sourceKey:'id' })

export default Task;