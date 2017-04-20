/**
 * Created by narendra on 20/4/17.
 */

'use strict';

module.exports = function(app) {
    var todoList = require('../controllers/todoListController');

    // todoList Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);

    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(update_a_task)
        .delete(delete_a_task);

};