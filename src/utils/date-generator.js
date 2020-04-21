import moment from "moment";

moment.locale("id");

const getTodayDate = (format = "LL") => {
    return moment().format(format);
};

export {getTodayDate};
