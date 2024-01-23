import db from "../Database/db"

import axios from 'axios';

const sendEmail = async () => {
  const apiKey = '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';
  const apiUrl = 'https://api.sendgrid.com/v3/mail/send';

  try {
    const response = await axios.post(apiUrl, {
      personalizations: [
        {
          to: [
            {
              email: 'matevz.nerat@student.um.si',
            },
          ],
          subject: 'You have a new achievement!',
        },
      ],
      from: {
        email: 'vivien.stampfer@student.um.si',
      },
      content: [
        {
          type: 'text/plain',
          value: 'Cpmgratulations! You have earned a new achievement!',
        },
      ],
    }, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Email sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};


export const checkAchievementComplete = () => {
    return new Promise((resolve, reject) => {
        let datum = new Date().toISOString().slice(0, 19).replace("T", " ");
        let tocke;
        let updateQuery;

        

        db.transaction((tx) => {
            tx.executeSql(
                "SELECT stTock FROM profil WHERE id = 1",
                [],
                (_, result) => {
                    tocke = result.rows._array[0].stTock;
                    // Check points for achievement, if under 1000, don't check achievement
                    if (tocke > 1000 && tocke < 5000) {
                        updateQuery = '1000 points';
                    } else if (tocke > 5000 && tocke < 25000) {
                        updateQuery = '5000 points';
                    } else if (tocke > 25000) {
                        updateQuery = '25000 points';
                    } else {
                        // Reject the promise if points are not in the expected range
                        reject('Points not in the expected range');
                        return;
                    }

                    db.transaction((tx) => {
                        tx.executeSql(
                            'SELECT datumOsvojitve FROM dosezek WHERE naziv = ?;',
                            [updateQuery],
                            (_, result) => {
                                const datumOsvojitve = result.rows._array[0].datumOsvojitve;
                                if (datumOsvojitve) {
                                    // Achievement already conquered, resolve with false
                                    resolve(false);
                                } else {
                                    // Achievement not conquered, update the date
                                    db.transaction((tx) => {
                                        tx.executeSql(
                                            'UPDATE dosezek SET datumOsvojitve = ? WHERE naziv = ?;',
                                            [datum, updateQuery],
                                            (_, result) => {
                                                console.log("Updated achievement with new date!");
                                                sendEmail();
                                                resolve(true);
                                            },
                                            (_, error) => {
                                                console.log('Error updating datumOsvojitve:', error);
                                                // Reject the promise in case of an error
                                                reject('Error updating datumOsvojitve');
                                            }
                                        );
                                    });
                                }
                            },
                            (_, error) => {
                                console.log('Error fetching datumOsvojitve:', error);
                                // Reject the promise in case of an error
                                reject('Error fetching datumOsvojitve');
                            }
                        );
                    });

                },
                (_, error) => {
                    // Reject the promise if there's an error fetching stTock
                    console.error('Error fetching stTock:', error);
                    reject('Error fetching stTock');
                }
            );
        });
    });
};