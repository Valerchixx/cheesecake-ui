import React, {useState, useEffect} from 'react';

import {Layout} from '../../components/Layout/Layout';
import styles from './profile.module.scss';

export const Profile = () => {

        const [user, setUser] = useState(
            {name: '', second_name: '', email: '', address: '', phone_number: '', user_id: 0},
        );

    const updateUser = async () => {
        try {
            console.log(JSON.stringify({
                id: user.user_id,
                name: user.name,
                second_name: user.second_name}));
            const response = await fetch('http://34.116.208.117:30423/api/v1/user', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: user.user_id,
                    name: user.name,
					second_name: user.second_name,
                }),
            })

        } catch (error) {
            console.error('Failed to update user:', error);
        }
    };

        useEffect(() => {
            const fetchUser = async () => {
                try {
                    const response = await fetch('http://34.116.208.117:30423/api/v1/user/info/1');
                    const userData = await response.json();

                    setUser(userData);
                } catch (error) {
                    console.error('Failed to fetch user:', error);
                }
            };

            fetchUser();
        }, []);
        return (


            <div className={styles.menuWrap}>
                <Layout>
                    <h1 className={styles.name}>
                        Profile
                    </h1>
                    <div className={styles.main}>
                        <table>
                            <tr>
                                <td className={styles.table_left}>
                                    Name:
                                </td>
                                <td>
                                    <input value={user.name} onInput={(e) => {
                                        setUser({...user, name: e.target.value})
                                    }}/>
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.table_left}>
                                    Surname:
                                </td>
                                <td>
                                    <input value={user.second_name} onInput={(e) => {
                                        setUser({...user, second_name: e.target.value})
                                    }}/>
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.table_left}>
                                    Phone:
                                </td>
                                <td>
                                    <input value={user.phone_number} onInput={(e) => {
                                        setUser({...user, phone_number: e.target.value})
                                    }}/>
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.table_left}>
                                    Address:
                                </td>
                                <td>
                                    <input value={user.address} onInput={(e) => {
                                        setUser({...user, address: e.target.value})
                                    }}/>
                                </td>
                            </tr>
                        </table>
                        <h1 className={styles.name}>
                            Notifications
                        </h1>
                        <table>
                            <tr>
                                <td className={styles.table_left}>
                                    Email:
                                </td>
                                <td>
                                    <input/>
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.table_left}>
                                    Phone:
                                </td>
                                <td>
                                    <input/>
                                </td>
                            </tr>
                        </table>
                        <button type={'submit'} onClick={updateUser}>Submit</button>
                    </div>

                </Layout>
            </div>);
    }
;
