import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase('dailyRhythm_v1.db');

//Table initialisation
const initDatabase = () => {
    db.transaction((tx) => {

        //Table aktivnost
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS aktivnost (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                datum DATETIME,
                uraZacetka TIME,
                uraZakljucka TIME,
                ime VARCHAR(45),
                opis VARCHAR(255),
                stTock INT,
                datumUraOpomnika DATETIME,
                opravljena BOOLEAN
            );`,
            [],
            (_, result) => {
                // Success callback
                console.log('Table aktivnost created successfully');
                // Inserting a sample row
              /*  tx.executeSql(
                    `INSERT INTO aktivnost (datum, uraZacetka, uraZakljucka, ime, opis, stTock, datumUraOpomnika, opravljena) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
                    [
                        '2024-01-21',   // Replace with the desired date
                        '10:00:00',     // Replace with the desired start time
                        '12:00:00',     // Replace with the desired end time
                        'Sample Activity5',
                        'Description of the activity',
                        5,              // Replace with the desired number
                        '2024-01-20 11:00:00', // Replace with the desired date and time for the reminder
                        0               // Replace with 1 if the activity is completed, 0 otherwise
                    ],
                    (_, insertResult) => {
                        // Success callback for the INSERT statement
                        console.log('Row inserted successfully:', insertResult);
                    },
                    (_, error) => {
                        // Error callback for the INSERT statement
                        console.error('Error inserting row:', error);
                    }
                ); */
            },
            (_, error) => {
                // Error callback
                console.error('Error creating table:', error);
            }

        )

        //Table profil
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS profil (
                      id INTEGER PRIMARY KEY AUTOINCREMENT,
                      upIme VARCHAR(45),
                      email VARCHAR(45),
                      stTock INT,
                      level INT
                  );`,
            [],
            (_, result) => {
                // Success callback
                console.log('Table profil created successfully');

                /*tx.executeSql(
                    `ALTER TABLE profil ADD COLUMN slika VARCHAR(150);`,
                    [],
                    (_, alterResult) => {
                        // Success callback for adding the new column
                        console.log('Column newColumn added successfully:', alterResult);
                    },
                    (_, alterError) => {
                        // Error callback for adding the new column
                        console.error('Error adding column newColumn:', alterError);
                    }
                )*/
                /*tx.executeSql(
                    'UPDATE profil SET stTock = ? WHERE id = ?;',
                    [6001, 1],
                    (_, updateResult) => {
                        // Success callback for the UPDATE statement
                        console.log('Row updated successfully:', updateResult);
                    },
                    (_, updateError) => {
                        // Error callback for the UPDATE statement
                        console.error('Error updating row:', updateError);
                    }
                );*/
                // Inserting a sample row into the "profil" table
                /*tx.executeSql(
                    `INSERT INTO profil (upIme, email, stTock, level) VALUES (?, ?, ?, ?);`,
                    [
                        'SampleUsername',
                        'sample@email.com',
                        0,
                        1
                    ],
                    (_, insertResult) => {
                        // Success callback for the INSERT statement
                        console.log('Row inserted successfully:', insertResult);
                    },
                    (_, error) => {
                        // Error callback for the INSERT statement
                        console.error('Error inserting row:', error);
                    }
                );*/
            },
            (_, error) => {
                // Error callback for table creation
                console.error('Error creating table:', error);
            }
        )

        //Table dosezek
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS dosezek (
                      id INTEGER PRIMARY KEY AUTOINCREMENT,
                      naziv VARCHAR(45),
                      opis VARCHAR(45),
                      datumOsvojitve DATETIME
                  );`,
            [],
            (_, result) => {
                // Success callback
                console.log('Table dosezek created successfully');

                // Inserting a sample row into the "dosezek" table
                /*tx.executeSql(
                    `INSERT INTO dosezek (naziv, opis, datumOsvojitve) VALUES (?, ?, ?),(?, ?, ?),(?, ?, ?),(?, ?, ?),(?, ?, ?),(?, ?, ?),(?, ?, ?),(?, ?, ?),(?, ?, ?),(?, ?, ?);`,
                    [
                        'Setup your profile', 'Looking fresh', null,
                        'First task added', 'You added your first task!', null,
                        'Deleted task', 'Deleting is also fine I guess :(', null,
                        'FirstWeeklyPoints', 'You got your first points! Congrats!', null,
                        '1000 points', 'Look at you go!', null,
                        '5000 points', 'A lotta points!', null,
                        '25000 points', 'Damn', null,
                        'Complete 10 tasks', 'LETSGOOO', null,
                        'Complete 30 Tasks', 'NICE', null,
                        'Complete 100 tasks', 'WOOOOOO', null
                    ],
                    (_, insertResult) => {
                        // Success callback for the INSERT statement
                        console.log('Row inserted successfully:', insertResult);
                    },
                    (_, error) => {
                        // Error callback for the INSERT statement
                        console.error('Error inserting row:', error);
                    }
                );*/
            },
            (_, error) => {
                // Error callback for table creation
                console.error('Error creating table:', error);
            }
        );

        //Table leveli
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS level (
                      id INTEGER PRIMARY KEY AUTOINCREMENT,
                      od INTEGER,
                      do INTEGER,
                      level INTEGER,
                      naziv VARCHAR(45)
            );`,
            [],
            (_, result) => {
                // Success callback
                console.log('Table level created successfully');

                // Inserting a sample row into the "dosezek" table
                /*tx.executeSql(
                    `INSERT INTO level (od, do, level, naziv) VALUES (?, ?, ?, ?),(?, ?, ?, ?),(?, ?, ?, ?),(?, ?, ?, ?),(?, ?, ?, ?),(?, ?, ?, ?);`,
                    [
                        0, 1000, 1, "Bronze",
                        1001, 3000, 2, "Silver",
                        3001, 6000, 3, "Gold",
                        6001, 10000, 4, "Platinum",
                        10001, 15000, 5, "Diamond",
                        15001, 25000, 6, "Emerald"
                    ],
                    (_, insertResult) => {
                        // Success callback for the INSERT statement
                        console.log('Row inserted successfully:', insertResult);
                    },
                    (_, error) => {
                        // Error callback for the INSERT statement
                        console.error('Error inserting row:', error);
                    }
                );*/
                /*tx.executeSql(
                    `INSERT INTO level (od, do, level, naziv) VALUES (?, ?, ?, ?);`,
                    [
                        0, 1, 0, "Zero"
                    ],
                    (_, insertResult) => {
                        // Success callback for the INSERT statement
                        console.log('Row inserted successfully:', insertResult);
                    },
                    (_, error) => {
                        // Error callback for the INSERT statement
                        console.error('Error inserting row:', error);
                    }
                ); */
            },
            (_, error) => {
                // Error callback for table creation
                console.error('Error creating table:', error);
            }
        );
    })
}

initDatabase();

export default db;