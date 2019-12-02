import { SQLite } from 'expo-sqlite';

export default class DatabaseFactory{

    static databaseConnection = null;

    static getDatabaseConnection(){
        if(DatabaseFactory.databaseConnection)
            return DatabaseFactory.databaseConnection;

        DatabaseFactory.databaseConnection = SQLite.openDatabase('caderno-virtual.db');
        DatabaseFactory.prepareDatabase();

        return DatabaseFactory.databaseConnection;
    }

    static prepareDatabase(){
        DatabaseFactory.databaseConnection.transaction( (tx) => {
            tx.executeSql(
              'create table if not exists disciplines (id integer primary key not null, name text, teacherName text, period integer);'
            );
            tx.executeSql(
              'create table if not exists disciplinesContent (id integer primary key not null, disciplineId integer, contentText text, contentImageURI text, FOREIGN KEY(disciplineId) REFERENCES discipline(id));'
            );
        });
    }


    // componentDidMount() {
    //     db.transaction(tx => {
    //       tx.executeSql(
    //         'create table if not exists items (id integer primary key not null, done int, value text);'
    //       );
    //     });
    // }
}