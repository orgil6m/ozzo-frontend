export const datePicker = {
  months: [
    "Нэгдүгээр сар",
    "Хоёрдугаар сар",
    "Гуравдугаар сар",
    "Дөрөвдүгээр сар",
    "Тавдугаар сар",
    "Зургаадугаар сар",
    "Долоодугаар сар",
    "Наймдугаар сар",
    "Есдүгээр сар",
    "Аравдугаар сар",
    "Арван нэгдүгээр сар",
    "Арван хоёрдугаар сар",
  ],
  weekDays: [
    {
      name: "Ням",
      short: "Ня",
      isWeekend: true,
    },
    {
      name: "Даваа",
      short: "Да",
    },
    {
      name: "Мягмар",
      short: "Мя",
    },
    {
      name: "Лхагва",
      short: "Лх",
    },
    {
      name: "Пүрэв",
      short: "Пү",
    },
    {
      name: "Баасан",
      short: "Ба",
    },
    {
      name: "Бямба",
      short: "Бя",
      isWeekend: true,
    },
  ],
  weekStartingIndex: 0,
  getToday(gregorainTodayObject) {
    return gregorainTodayObject;
  },

  toNativeDate(date) {
    return new Date(date.year, date.month - 1, date.day);
  },

  getMonthLength(date) {
    return new Date(date.year, date.month, 0).getDate();
  },
  transformDigit(digit) {
    return digit;
  },

  nextMonth: "Дараа сар",
  previousMonth: "Өнгөрсөн сар",
  openMonthSelector: "Сар сонгох",
  openYearSelector: "Он сонгох",
  closeMonthSelector: "Хаах",
  closeYearSelector: "Хаах",
  defaultPlaceholder: "Сонгоно уу...",
  from: "-с",
  to: "рүү",
  digitSeparator: ",",
  yearLetterSkip: 0,
  isRtl: false,
};
