import React from 'react';
import {Table} from 'react-bootstrap';
import UserItem from './UserItem';

function UserList() {
    return ( 
            <div >
                <Table>
                    <thead>
                        <tr>
                        <th>Nume</th>
                        <th>Prenume</th>
                        <th>Meserie</th>
                        <th>Salariu</th>
                        <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UserItem />
                    </tbody>
                </Table>
            </div>            
     

        
    )
}

export default UserList
