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
                /*tx.executeSql(
                    `INSERT INTO aktivnost (datum, uraZacetka, uraZakljucka, ime, opis, stTock, datumUraOpomnika, opravljena) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
                    [
                        '2024-01-08',   // Replace with the desired date
                        '10:00:00',     // Replace with the desired start time
                        '12:00:00',     // Replace with the desired end time
                        'Sample Activity',
                        'Description of the activity',
                        5,              // Replace with the desired number
                        '2024-01-08 11:00:00', // Replace with the desired date and time for the reminder
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
                );*/
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
                    `INSERT INTO dosezek (naziv, opis, datumOsvojitve) VALUES (?, ?, ?);`,
                    [
                        'SampleDosezek',      // Replace with the desired naziv
                        'Description of Dosezek', // Replace with the desired opis
                        '2024-01-08'               // Replace with the desired level value
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
    })
}

initDatabase();

export default db;