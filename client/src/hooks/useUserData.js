
export const useUserData = () => {
    const serializedAuth = localStorage.getItem('auth');
    let userId = '';
    let authFirstName = '';
    let authLastName = '';
    let authProfileImage = '';

    if (serializedAuth) {
        const auth = JSON.parse(serializedAuth);
        userId = auth._id;
        authFirstName = auth.firstName;
        authLastName = auth.lastName;
        authProfileImage = auth.profileImage;
    }

    return {
        userId,
        authFirstName: authFirstName,
        authLastName: authLastName,
        authProfileImage: authProfileImage
    };
};