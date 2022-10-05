export function danhHieu(hocLuc, hanhKiem) {
    // console.log(hocLuc, hanhKiem)
    // document.write(hocLuc, hanhKiem)

    if (hocLuc > 10 || hocLuc <0) return 'saiDuLieu'
    else if (hanhKiem != 'tot' && hanhKiem != 'kha'&& hanhKiem != 'trungBinh'&& hanhKiem != 'yeu'  ) return 'saiDuLieu'
    else {
        if (hocLuc >= 8.0 && hanhKiem == 'tot') return 'hocSinhGioi'
        else if (hocLuc >= 6.5 && hanhKiem == 'tot') return 'hocSinhTienTien'
        else if (hocLuc >= 6.5 && hanhKiem == 'kha') return 'hocSinhTienTien'
        else return 'khongCoDanhHieu'
    }
    
}
// export const isOddNumber = (number) => number% 2 == 1;