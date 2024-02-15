import { auth } from "../FireBase/firebase"

export const normalSignUp = (email,password) => {
    auth.createUserWithEmailAndPassword(email, password).then(
        userCredentials => {
            const user = userCredentials.user;
})
.catch(error => alert(error.message))
}

export const normalLogin = (email, password) => {
    auth.signInWithEmailAndPassword(email,password).then(
        userCredentials => {
            const user = userCredentials.user;
            console.log('logged in with:', user.email);
        })
        .catch(error => alert(error => error.message));
}