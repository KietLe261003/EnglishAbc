import BackGroundProfile from "./Components/BackgroundProfile";
import ContentProfile from "./Components/Content";

function ProfilePage() {
  return (
    <div className='flex flex-col gap-3'>
      <main className='profile-page'>
        <BackGroundProfile/>
        <ContentProfile/>
      </main>
    </div>
  );
}

export default ProfilePage;
