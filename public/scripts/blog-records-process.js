const monthsStrings = {
  full: {
    0: 'January',
    1: 'February',
    2: 'March',
    12: 'December',
  },
  short: {
    0: 'jan',
    1: 'feb',
    2: 'mar',
    3: 'apr',
    4: 'may',
    5: 'jun',
    6: 'jul',
    7: 'aug',
    8: 'sep',
    9: 'oct',
    10: 'nov',
    11: 'dec',
  },
};

function parseDate(userDate = Date.now) {
  return {
    date: userDate.getDate(),
    month: userDate.getMonth(),
    year: userDate.getFullYear(),
    weekDay: userDate.getDay(),
    hours: userDate.getHours(),
    minutes: userDate.getMinutes(),
    seconds: userDate.getSeconds(),
  };
}

function renderDate(
  parsedUserDate = {},
  template = 'short',
  showTime = true,
  timeFormat = '24'
) {
  const { date, year } = parsedUserDate;
  const month = monthsStrings[template][parsedUserDate.month].toUpperCase();
  const { hours, minutes, seconds } = parsedUserDate;
  const dateTemplate = `${month} ${date}, ${year}`;

  let processedHours = '';
  switch (timeFormat) {
    case '24':
      processedHours = hours >= 10 ? `${hours}` : `0${hours}`;
      break;
    case '12':
      processedHours = hours < 12 ? `AM ${hours}` : ` PM ${hours - 12}`;
      break;
    default:
      throw new Error('time format error');
  }

  const timeTemplate = `${processedHours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;

  return showTime
    ? `Date: ${dateTemplate} Time: ${timeTemplate}`
    : `Date: ${dateTemplate}`;
}

$('.blog-record-date').map(function () {
  const parsedDate = parseDate(new Date(Number(this.innerHTML)));
  this.innerHTML = renderDate(parsedDate, 'short', true, '24');
  return 'date';
});
