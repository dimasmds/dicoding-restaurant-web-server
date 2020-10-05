import moment from 'moment';

moment.locale('id');

const getTodayDate = (format = 'LL') => moment().format(format);

export { getTodayDate };
