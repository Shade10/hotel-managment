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
  rootRef.child("Rooms").push({
    roomNumber,
    avatar,
    HowMuchBeds,
    description,
    moreInfo
  });


  export const setRoomOwnership = (roomId, userId) => 
  rootRef.child('Rooms').child(roomId).child('RoomIds').update({
      [userId]: true
  })

// unregister user from room ???
export const unsetRoomOwnership = (roomId, userId) =>
    rootRef.child('Rooms').child(roomId).child('RoomIds').update({
        [userId]: null
    })

  export const updateRoom = (roomId, roomData) => 
  rootRef.child('Rooms').child(roomId).update({
      ...roomData
  })