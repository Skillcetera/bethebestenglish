export const getCookie = (name) => {
    const cookieList = document.cookie.split(";");
    cookieList.forEach((element) => {
        const cookieString = element.split("=");
        if (cookieString[0].trim() === name) {
            console.log(cookieString[1]);
            return cookieString[1];
        }
    });
};
