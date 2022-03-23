import { userRepository } from '@desys/account/data/base';
import React, { useEffect } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UserListContainerProps {}

const StyledUserListContainer = styled.div`
`;

interface UserVM {
  id: number;
  name: string;
}

export function UserListContainer(props: UserListContainerProps) {
  const [users, setUsers] = React.useState<UserVM[]>([]);

  useEffect(() => {
    userRepository.getUsers().then(setUsers);
  }, []);

  return (
    <StyledUserListContainer>
      <h3>Welcome to UserListContainer!</h3>

      <table role="grid">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td scope="row">{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledUserListContainer>
  );
}

export default UserListContainer;
