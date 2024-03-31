// DateUtils.js

export function formatDateToTimeAgo(dateString) {
    const currentDate = new Date();
    const givenDate = new Date(dateString);
    const timeDifference = currentDate - givenDate;
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const year = day * 365;
  
    if (timeDifference < minute) {
      const secondsDifference = Math.floor(timeDifference / 1000);
      return `${secondsDifference} second${secondsDifference === 1 ? '' : 's'} ago`;
    } else if (timeDifference < hour) {
      const minutesDifference = Math.floor(timeDifference / minute);
      return `${minutesDifference} minute${minutesDifference === 1 ? '' : 's'} ago`;
    } else if (timeDifference < day) {
      const hoursDifference = Math.floor(timeDifference / hour);
      return `${hoursDifference} hour${hoursDifference === 1 ? '' : 's'} ago`;
    } else if (timeDifference < week) {
      const daysDifference = Math.floor(timeDifference / day);
      return `${daysDifference} day${daysDifference === 1 ? '' : 's'} ago`;
    } else if (timeDifference < year) {
      const weeksDifference = Math.floor(timeDifference / week);
      return `${weeksDifference} week${weeksDifference === 1 ? '' : 's'} ago`;
    } else {
      const yearsDifference = Math.floor(timeDifference / year);
      return `${yearsDifference} year${yearsDifference === 1 ? '' : 's'} ago`;
    }
  }
  