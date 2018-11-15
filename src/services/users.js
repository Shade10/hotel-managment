import { rootRef } from "../setupFirebase";

export const getUsers = () =>
    rootRef
        .child("users")
        .once("value")
        .then(snapshot => snapshot.val());

export const getUser = userId =>
    rootRef
        .child("users")
        .child(userId)
        .once("value")
        .then(snapshot => snapshot.val());

export const addUser = (
    name,
    surname,
    avatar,
    description,
    moreInfo
) =>
    rootRef.child("users").push({
        name,
        surname,
        avatar,
        description,
        moreInfo
    });


export const updateUser = (userId, userData) =>
    rootRef.child('rooms').child(userId).update({
        ...userData
    })