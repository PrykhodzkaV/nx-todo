import mongoose from 'mongoose'
import { composeMongoose } from 'graphql-compose-mongoose'
import { schemaComposer } from 'graphql-compose'

export interface IToDo {
  title: string
  status: boolean
}

export interface IToDoDocument extends IToDo, mongoose.Document {}

export const ToDoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
})

export const ToDo = mongoose.model<IToDoDocument>('ToDo', ToDoSchema)

const customizationOptions = {}

export const ToDoTC = composeMongoose(ToDo, customizationOptions)

schemaComposer.Query.addFields({
//   todoOne: ToDoTC.mongooseResolvers.findOne(),
  todoMany: ToDoTC.mongooseResolvers.findMany(),
  todoCount: ToDoTC.mongooseResolvers.count(),
})

schemaComposer.Mutation.addFields({
  todoCreateOne: ToDoTC.mongooseResolvers.createOne(),
  todoUpdateOne: ToDoTC.mongooseResolvers.updateOne(),
//   todoUpdateMany: ToDoTC.mongooseResolvers.updateMany(),
  todoRemoveOne: ToDoTC.mongooseResolvers.removeOne(),
})

export const schema = schemaComposer.buildSchema()