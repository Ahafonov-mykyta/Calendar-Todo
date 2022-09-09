import dayjs from "dayjs";

export function fillMonthArray(month = dayjs().month()) {
    const year = dayjs().year();
    const firstDay = dayjs(new Date(year, month, 1)).day();
    let Count = 0 - firstDay;

    return new Array(6).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            Count += 1;
            return dayjs(new Date(year, month, Count));
        });
    }).flat();
}