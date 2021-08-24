export const changeThemeBySection = (section) => {
    const themeColor = section.getAttribute("themeColor");
    const textColor = section.getAttribute("textColor");
    document.documentElement.style.setProperty("--textColor", textColor);
    document.documentElement.style.setProperty("--primary", themeColor);
};
export const getIndexByNameOfCourse = (courseList, name) => {
    for (let i = 0; i < courseList.length; i++) {
        const element = courseList[i];
        if (element.name === name) {
            return i;
        }
    }
    return -1;
};
