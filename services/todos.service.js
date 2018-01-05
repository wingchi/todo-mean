// Getting the newly created mongoose model we just created

const ToDo = require('../models/todo.model')

// Saving the context of this module inside the _this variable
_this = this
// NOTE: this actually isn't necessary with fat arrow function notation

// Async function to get the todo list

exports.getTodos = async (query, page, limit) => {
    // options setup for the mongoose paginate

    var options = {
        page,
        limit
    }

    // try catch the awaited promise to handle the error

    try {
        const todos = await ToDo.paginate(query, options)
        return todos
    } catch (e) {
        throw Error('Error occured while paginating ToDos')
    }
}

exports.createTodo = async (todo) => {
  const newTodo = new ToDo({
    title: todo.title,
    description: todo.description,
    date: new Date(),
    status: todo.status
  })

  try {
    const savedTodo = await newTodo.save()
    return savedTodo
  } catch (e) {
    throw Error("Error occured while creating Todo")
  }
}

exports.updateTodo = async (todo) => {
    const id = todo.id

    let oldTodo
    try {
        oldTodo = await ToDo.findById(id)
    } catch (e) {
        throw Error('Error occured while finding the Todo item')
    }

    if (!oldTodo) { return false }

    // edit the todo object

    oldTodo.title = todo.title
    oldTodo.description = todo.description
    oldTodo.status = todo.status

    try {
        const savedTodo = await oldTodo.save()
        return savedTodo
    } catch (e) {
        throw Error('Error occured while updating the Todo')
    }
}

exports.deleteTodo = async (id) => {
  try {
    const deleted = await ToDo.remove({_id: id})
    if (deleted.result.n === 0) {
      throw Error("ToDo could not be deleted")
    }
    return deleted
  } catch (e) {
    throw Error("Error occured while deleting the Todo")
  }
}
