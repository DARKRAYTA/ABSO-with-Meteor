const ranking = new SQL.Collection('ranking', process.env.MP_POSTGRES);

if (Meteor.isClient){
    var taskTable = {
        id: ['$number'],
        text: ['$string', '$notnull'],
        checked: ['$bool'],
        usersid: ['$number']
    };
    tasks.createTable(taskTable);

    var usernamesTable = {
        id: ['$number'],
        name: ['$string', '$notnull']
    };
    usernames.createTable(usernamesTable);
}

if (Meteor.isServer){
    tasks.publish('tasks', function(){
        return tasks.select('tasks.id as id', 'tasks.text', 'tasks.checked', 'tasks.createdat', 'username.id as usernameid', 'username.name')
        //    .join(['INNER JOIN'], ["usernameid"], \[\["username", "d"\]\])
    .order('createdat DESC')
            .limit(100)
    });

    username.publish('username', function(){
        return username.select('id', 'name')
            .limit(100)
    });
}