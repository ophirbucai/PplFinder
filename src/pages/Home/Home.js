import React, { useState, useContext, useEffect } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";
import { UserContext } from "../../AppRouter";

const Home = () => {
  const { nationalities, users, isLoading } = useContext(UserContext);
  const [filteredUsers, setFilteredUsers] = useState(users);
  useEffect(() => {
    setFilteredUsers(users.filter((user) => {
      return nationalities.includes(user.nat);
    }));
  }, [users, nationalities]);

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList users={nationalities.length ? filteredUsers : users} isLoading={isLoading} />
      </S.Content>
    </S.Home>
  );
};

export default Home;
