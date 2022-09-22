export const
    getMyDate = (date) => {
        let formatter = new Intl.DateTimeFormat("ru", {
            timeZone: "UTC",
            year: "2-digit",
            month: "2-digit",
            day: "2-digit"
        });
        return ` ${formatter.format(new Date(date))} `
    },
    getMyTime = (date) => {
        let formatter = new Intl.DateTimeFormat("ru", {
            timeZone: "UTC",
            hour: "2-digit",
            minute: "2-digit",
        });
        return ` ${formatter.format(new Date(date))}UTC `
    }

