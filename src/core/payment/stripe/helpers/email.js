import {
  Reservation,
  UserProfile,
  User,
  Listing,
  ListingData,
  ThreadItems,
  SiteSettings
} from '../../../../data/models';
import { sendServerEmail } from '../../../email/sendServerEmail';

export async function emailBroadcast(id) {
  // Get Reservation Data
  const reservation = await Reservation.findOne({
    where: { id }
  });

  let emailLogo, getEmailLogo;
  getEmailLogo = await SiteSettings.findOne({
    where: {
      name: 'emailLogo'
    },
    raw: true
  });

  emailLogo = getEmailLogo && getEmailLogo.value

  if (reservation) {
    // Get Host Data
    const host = await User.findOne({
      where: {
        id: reservation.hostId,
      },
      include: [
        {
          model: UserProfile,
          as: 'profile'
        }
      ]
    });
    // Get Guest Data
    const guest = await User.findOne({
      where: {
        id: reservation.guestId,
      },
      include: [
        {
          model: UserProfile,
          as: 'profile'
        }
      ]
    });
    // Get List Data
    const list = await Listing.findOne({
      where: {
        id: reservation.listId
      },
      include: [
        {
          model: ListingData,
          as: 'listingData'
        }
      ]
    });


    // Get Thread Data
    const threadData = await ThreadItems.findOne({
      where: { reservationId: id }
    });

    let reservationId = reservation.id;
    let confirmationCode = reservation.confirmationCode;
    let hostEmail = host.email;
    let hostName = host.profile.firstName;
    let guestEmail = guest.email;
    let guestName = guest.profile.firstName;
    let guestLastName = guest.profile.lastName;
    let guestLocation = guest.profile.location;
    let guestProfilePic = guest.profile.picture;
    let guestJoinedDate = guest.profile.createdAt;
    let checkIn = reservation.checkIn;
    let checkOut = reservation.checkOut;
    let guests = reservation.guests;
    let listTitle = list.title;
    let listCity = list.city;
    let allowedCheckInTime = list.listingData.checkInStart;
    let allowedCheckOutTime = list.listingData.checkInEnd;
    let basePrice = reservation.basePrice;
    let total = reservation.total;
    let hostServiceFee = reservation.hostServiceFee;
    let currency = reservation.currency;
    let isTour = reservation.isTour;
    let threadId;
    let insurance = reservation.insurance;
    let tax = reservation.tax;
    let guestServiceFee = reservation.guestServiceFee;
    let hostTotal = 0;
    if (threadData) {
      threadId = threadData.threadId;
    }

    // For Booking Request
    if (reservation.reservationState === 'pending') {
      // hostTotal = total - (insurance + tax + guestServiceFee);        
      hostTotal = total;
      // Send email to host
      let contentForHost = {
        reservationId,
        confirmationCode,
        hostName,
        guestName,
        checkIn,
        checkOut,
        listTitle,
        basePrice,
        total: hostTotal,
        hostServiceFee,
        threadId,
        currency,
        logo: emailLogo
      };
      if (!isTour) {
        await sendServerEmail(hostEmail, 'bookingRequest', contentForHost);
      } else {
        await sendServerEmail(hostEmail, 'bookingTourRequest', contentForHost);
      }
      // Send email to guest
      let contentForguest = {
        reservationId,
        confirmationCode,
        hostName,
        guestName,
        checkIn,
        listTitle,
        threadId,
        logo: emailLogo
      };
      if (!isTour) {
        await sendServerEmail(guestEmail, 'bookingRequestGuest', contentForguest);
      } else {
        await sendServerEmail(guestEmail, 'bookingTourRequestGuest', contentForguest);
      }
    }

    if (reservation.reservationState === 'approved') {
      // Send email to host
      let contentForHost = {
        reservationId,
        threadId,
        confirmationCode,
        guestName,
        guestLastName,
        guestLocation,
        guestProfilePic,
        guestJoinedDate,
        checkIn,
        checkOut,
        guests,
        allowedCheckInTime,
        allowedCheckOutTime,
        logo: emailLogo
      };
      await sendServerEmail(hostEmail, 'bookingConfirmedToHost', contentForHost);

      // Send email to guest
      let contentForguest = {
        reservationId,
        hostName,
        guestName,
        listTitle,
        listCity,
        threadId,
        logo: emailLogo
      };
      await sendServerEmail(guestEmail, 'bookingConfirmedToGuest', contentForguest);
    }


    return {
      status: 'email is sent'
    };
  } else {
    return {
      status: 'failed to send email'
    }
  }
}