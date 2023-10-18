import MainLayout from "../components/MainLayout";
import UserData from "../components/userRegister/UserData";

const UserRegister = () => {
  return (
    <MainLayout>
      <main className="container-login flex justify-center ">
        <UserData />
      </main>
    </MainLayout>
  );
};

export default UserRegister;
