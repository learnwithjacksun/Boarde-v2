export const getGreeting = () => {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 12) return "Good Morning";
    if (hours < 18) return "Good Afternoon";
    return "Good Evening";
}
