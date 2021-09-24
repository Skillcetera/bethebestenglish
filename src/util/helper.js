export const getCookie = (name) => {
    const cookieList = document.cookie.split(";");
    cookieList.forEach((element) => {
        const cookieString = element.split("=");
        if (cookieString[0].trim() === name) {
            return cookieString[1];
        }
    });
};
