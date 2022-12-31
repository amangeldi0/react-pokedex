export const getImgPathLink = (fileName: string) : string => {
    return new URL(`../../assets/icon/typeIcon/${fileName}.png`, import.meta.url).href;
};