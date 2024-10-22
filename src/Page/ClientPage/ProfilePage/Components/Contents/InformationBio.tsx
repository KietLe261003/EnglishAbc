import { useAuth } from "../../../../../Common/Context/AuthContext";
function InformationBio() {
  const {user}=useAuth();

  return (
    <>
      <p className='mb-4 text-lg leading-relaxed text-blueGray-700'>
        {user && user?.description}
      </p>
      <button className='font-normal text-pink-500 w-full'>Show more</button>
    </>
  );
}

export default InformationBio;
