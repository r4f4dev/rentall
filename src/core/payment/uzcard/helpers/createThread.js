import { Reservation, Threads, ThreadItems, UserProfile } from '../../../../data/models';
import { sendNotifications } from '../../../../helpers/sendNotifications';

export async function createThread(
  reservationId
) {

  // Find Reservation and collect data
  const reservation = await Reservation.findOne({
    where: {
      id: reservationId,
    }
  });

  if (reservation) {
    //Find or create a thread
    const thread = await Threads.findOrCreate({
      where: {
        listId: reservation.listId,
        host: reservation.hostId,
        guest: reservation.guestId
      },
      defaults: {
        //properties you want on create
        listId: reservation.listId,
        host: reservation.hostId,
        guest: reservation.guestId,
        messageUpdatedDate: new Date(),
        isRead: false
      }
    });

    if (thread) {
      let bookType;
      if (reservation.reservationState === 'pending') {
        bookType = 'requestToBook';
      } else {
        bookType = 'intantBooking';
      }
      const threadItems = await ThreadItems.findOrCreate({
        where: {
          threadId: thread[0].dataValues.id,
          reservationId: reservation.id,
          sentBy: reservation.guestId,
          startDate: reservation.checkIn,
          endDate: reservation.checkOut,
          type: bookType,
        },
        defaults: {
          //properties you want on create
          threadId: thread[0].dataValues.id,
          reservationId: reservation.id,
          sentBy: reservation.guestId,
          content: reservation.message,
          type: bookType,
          startDate: reservation.checkIn,
          endDate: reservation.checkOut,
          personCapacity: reservation.guests
        }
      });

      let notifyUserId, notifyUserType, notifyContent, userName;
      notifyUserId = reservation.hostId;
      notifyUserType = 'host';

      const hostProfile = await UserProfile.findOne({
        where: {
          userId: reservation.guestId
        }
      });

      const guestProfile = await UserProfile.findOne({
        where: {
          userId: reservation.guestId
        }
      });

      userName = guestProfile.firstName;

      notifyContent = {
        "screenType": "trips",
        "userType": notifyUserType.toString(),
        "userName": userName,
        "content": reservation.message
      };

      sendNotifications('newBooking', notifyContent, notifyUserId);
      const updateThreads = await Threads.update({
        isRead: false,
        messageUpdatedDate: new Date()
      },
        {
          where: {
            id: thread[0].dataValues.id
          }
        }
      );

    }
  }
}