
export const useUserData = () => {
    const serializedAuth = localStorage.getItem('auth');
    let userId = '';
    let firstName = '';
    let lastName = '';
    let profileImage = '';

    if (serializedAuth) {
        const auth = JSON.parse(serializedAuth);
        userId = auth._id;
        firstName = auth.firstName;
        lastName = auth.lastName;
        profileImage = auth.profileImage;
    }

    return {
        userId,
        firstName,
        lastName,
        profileImage
    };
};