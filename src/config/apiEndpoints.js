const BASE_URL = window.location.protocol==='https'?
 "https://182.176.166.222:8081/api/":
 "http://182.176.166.222:8081/api/"

export const API_ENDPOINTS = {
    GetBrands: `${BASE_URL}/GetBrands/GetBrands`,
    GetProducts: `${BASE_URL}ProductsInfoAPI/GetProducts`,
    GetCategorys: `${BASE_URL}CategoryInfoAPI/GetCategorys`,
};
