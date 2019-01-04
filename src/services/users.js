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

export const updateUser = (userId, userData) =>
  rootRef
    .child("users")
    .child(userId)
    .update({
      ...userData
    });
