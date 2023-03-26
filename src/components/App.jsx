import { User } from "./UserCard/User";
import user from './data/user.json';

import { StatisticsBoard } from "./Statistics/StatisticsBoard";
import data from './data/data.json';

import { FriendsList } from "./FriendList/FriendList";
import friend from './data/friends.json';

import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import item from './data/transactions.json';

export const App = () => {
  return (
    <div>
      <User user={user} username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <StatisticsBoard data={data} />
      <FriendsList friends={friend} />
      <TransactionHistory items={item} />
    </div>
  );
};