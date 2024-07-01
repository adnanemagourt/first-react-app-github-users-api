import UserList from './components/UserList';
import UserContextProvider from './contexts/UserContext';

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <UserContextProvider>
            <UserList />
          </UserContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
