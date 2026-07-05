export function expCalculator(date="2023-07-01"){
    const startDate = new Date(date);
    const currentDate = new Date();
    const diffInMilliseconds = currentDate.getTime() - startDate.getTime();
    const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(diffInYears);
}