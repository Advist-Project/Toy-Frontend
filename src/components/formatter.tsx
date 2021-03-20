export function priceFormat(price: number){
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function dateFormat(dateData: string){ //YYYY-MM-DDTHH:mm:ss.sssZ
  const year = dateData.slice(2, 4);
  const month = dateData.slice(5, 7);
  const date = dateData.slice(8, 10);
  const hours = dateData.slice(11, 13);
  const minutes = dateData.slice(14, 16);
  return `${year}.${month}.${date} ${hours}:${minutes}`; //YY.MM.DD HH:mm
  //return `${dateData.slice(2, 4)}.${dateData.slice(5, 7)}.${dateData.slice(8, 10)} ${dateData.slice(11, 13)}:${dateData.slice(14, 16)}`; //YY.MM.DD HH:mm
}