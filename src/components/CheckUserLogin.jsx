import { useUser } from '@clerk/clerk-react';

function CheckUserLogin() {
    const { isSignedIn, user } = useUser();

    return (
        <div>
            {isSignedIn ? (
                <div className='container mx-auto flex flex-col gap-10 justify-center items-center m-8'>
                    <p className="text-3xl  text-green-800 font-bold ">Welcome, {user.firstName}!</p>
                    <p className="text-3xl  text-green-800 font-bold ">Email: {user.primaryEmailAddress.emailAddress}</p>
                </div>
            ) : (
                <div className='container mx-auto flex justify-center items-center m-8'>
                    <p className="text-3xl text-green-800 font-bold ">Please sign in to continue.</p>
                </div>

            )}
        </div>
    );

}

export default CheckUserLogin