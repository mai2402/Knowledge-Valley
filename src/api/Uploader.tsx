import { useState } from 'react';

import { courses } from '../data/data-courses';
import supabase from '../supabase';





// async function deleteGuests() {
//   const { error } = await supabase.from('guests').delete().gt('id', 0);
//   if (error) console.log(error.message);
// }

// async function deleteCabins() {
//   const { error } = await supabase.from('cabins').delete().gt('id', 0);
//   if (error) console.log(error.message);
// }


// async function createGuests() {
//   const { error } = await supabase.from('guests').insert(guests);
//   if (error) console.log(error.message);
// }

async function createCourses() {
  const { error } = await supabase.from('courses').insert(courses);
  if (error) console.log(error.message);
}


async function deleteCourses() {
    const { error } = await supabase.from('courses').delete().gt('id', 0);
    if (error) console.log(error.message);
  }

// async function createBookings() {
//   // Bookings need a guestId and a cabinId. We can't tell Supabase IDs for each object, it will calculate them on its own. So it might be different for different people, especially after multiple uploads. Therefore, we need to first get all guestIds and cabinIds, and then replace the original IDs in the booking data with the actual ones from the DB
//   const { data: guestsIds } = await supabase
//     .from('guests')
//     .select('id')
//     .order('id');
//   const allGuestIds = guestsIds.map((cabin) => cabin.id);
//   const { data: cabinsIds } = await supabase
//     .from('cabins')
//     .select('id')
//     .order('id');
//   const allCabinIds = cabinsIds.map((cabin) => cabin.id);

//   const finalBookings = bookings.map((booking) => {
//     // Here relying on the order of cabins, as they don't have and ID yet
//     const cabin = cabins.at(booking.cabinId - 1);
//     const numNights = subtractDates(booking.endDate, booking.startDate);
//     const cabinPrice = numNights * (cabin.regularPrice - cabin.discount);
//     const extrasPrice = booking.hasBreakfast
//       ? numNights * 15 * booking.numGuests
//       : 0; // hardcoded breakfast price
//     const totalPrice = cabinPrice + extrasPrice;

//     let status;
//     if (
//       isPast(new Date(booking.endDate)) &&
//       !isToday(new Date(booking.endDate))
//     )
//       status = 'checked-out';
//     if (
//       isFuture(new Date(booking.startDate)) ||
//       isToday(new Date(booking.startDate))
//     )
//       status = 'unconfirmed';
//     if (
//       (isFuture(new Date(booking.endDate)) ||
//         isToday(new Date(booking.endDate))) &&
//       isPast(new Date(booking.startDate)) &&
//       !isToday(new Date(booking.startDate))
//     )
//       status = 'checked-in';

//     return {
//       ...booking,
//       numNights,
//       cabinPrice,
//       extrasPrice,
//       totalPrice,
//       guestId: allGuestIds.at(booking.guestId - 1),
//       cabinId: allCabinIds.at(booking.cabinId - 1),
//       status,
//     };
//   });

//   console.log(finalBookings);

//   const { error } = await supabase.from('bookings').insert(finalBookings);
//   if (error) console.log(error.message);
// }

export function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

//   async function uploadAll() {
//     setIsLoading(true);
//     // Bookings need to be deleted FIRST
//     await deleteBookings();
//     await deleteGuests();
//     await deleteCabins();

//     // Bookings need to be created LAST
//     await createGuests();
//     await createCabins();
//     await createBookings();

//     setIsLoading(false);
//   }

  async function uploadCourses() {
    setIsLoading(true);
    await deleteCourses();
    await createCourses();
    setIsLoading(false);
  }

  return (
    <div>
        <button onClick={uploadCourses} >
        Upload CURRENT courses
      </button>
     
    </div>
  );
}

