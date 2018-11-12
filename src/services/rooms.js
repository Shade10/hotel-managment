import { rootRef } from "../setupFirebase";

export const getRooms = () =>
  rootRef
    .child("Rooms")
    .once("value")
    .then(snapshot => snapshot.val());

export const getRoom = roomId =>
  rootRef
    .child("Rooms")
    .child(roomId)
    .once("value")
    .then(snapshot => snapshot.val());

export const addRoom = (
  roomNumber,
  avatar,
  HowMuchBeds,
  description,
  moreInfo
) =>
  rootRef.child("rooms").push({
    roomNumber,
    avatar,
    HowMuchBeds,
    description,
    moreInfo
  });


  export const setRoomOwnership = (roomId, userId) => 
  rootRef.child('rooms').child(roomId).child('roomIds').update({
      [userId]: true
  })

// unregister user from room ???
export const unsetRoomOwnership = (roomId, userId) =>
    rootRef.child('rooms').child(roomId).child('roomIds').update({
        [userId]: null
    })

  export const updateRoom = (roomId, roomData) => 
  rootRef.child('rooms').child(roomId).update({
      ...roomData
  })