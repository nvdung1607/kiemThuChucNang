import { danhHieu } from './main.js'
const expect = chai.expect;
describe('Kiem thu gia tri bien: function danhHieu()', () => {
    it('1. Test case: 5, kha', () => {
        const result = danhHieu(5, 'kha');
        expect(result).to.equal('khongCoDanhHieu');
    });

    it('2. Test case: 5, yeu', () => {
        const result = danhHieu(5, 'yeu');
        expect(result).to.equal('khongCoDanhHieu');
    });

    it('3. Test case: 5, trungBinh', () => {
        const result = danhHieu(5, 'trungBinh');
        expect(result).to.equal('khongCoDanhHieu');
    });

    it('4. Test case: 5, gioi', () => {
        const result = danhHieu(5, 'tot');
        expect(result).to.equal('khongCoDanhHieu');
    });

    it('5. Test case: 0, kha', () => {
        const result = danhHieu(0, 'kha');
        expect(result).to.equal('khongCoDanhHieu');
    });

    it('6. Test case: 0.01, kha', () => {
        const result = danhHieu(0.01, 'kha');
        expect(result).to.equal('khongCoDanhHieu');
    });

    it('7. Test case: 9.99 , kha', () => {
        const result = danhHieu(9.99, 'kha');
        expect(result).to.equal('hocSinhTienTien');
    });

    it('8. Test case: 10 , kha', () => {
        const result = danhHieu(10, 'kha');
        expect(result).to.equal('hocSinhTienTien');
    });

});


// Kiem thu theo bang quyet dinh
describe('Kiem thu theo bang quyet dinh: function danhHieu()', () => {
    it('1. Test case: -1, yeu', () => {
        const result = danhHieu(-1, 'yeu');
        expect(result).to.equal('saiDuLieu');
    });

    it('2. Test case: -1, trungBinh', () => {
        const result = danhHieu(-1, 'trungBinh');
        expect(result).to.equal('saiDuLieu');
    });

    it('3. Test case: -1, kha', () => {
        const result = danhHieu(-1, 'kha');
        expect(result).to.equal('saiDuLieu');
    });

    it('4. Test case: -1, tot', () => {
        const result = danhHieu(-1, 'tot');
        expect(result).to.equal('saiDuLieu');
    });

    it('5. Test case: -1, rong', () => {
        const result = danhHieu(-1, '');
        expect(result).to.equal('saiDuLieu');
    });

    //

    it('6. Test case: 2, yeu', () => {
        const result = danhHieu(2, 'yeu');
        expect(result).to.equal('khongCoDanhHieu');
    });

    it('7. Test case: 2, trungBinh', () => {
        const result = danhHieu(2, 'trungBinh');
        expect(result).to.equal('khongCoDanhHieu');
    });

    it('8. Test case: 2, kha', () => {
        const result = danhHieu(3, 'kha');
        expect(result).to.equal('khongCoDanhHieu');
    });

    it('9. Test case: 2, tot', () => {
        const result = danhHieu(2, 'tot');
        expect(result).to.equal('khongCoDanhHieu');
    });

    it('10. Test case: 2, rong', () => {
        const result = danhHieu(2, '');
        expect(result).to.equal('saiDuLieu');
    });

    //

    it('11. Test case: 7, yeu', () => {
        const result = danhHieu(7, 'yeu');
        expect(result).to.equal('khongCoDanhHieu');
    });

    it('12. Test case: 7, trungBinh', () => {
        const result = danhHieu(7, 'trungBinh');
        expect(result).to.equal('khongCoDanhHieu');
    });

    it('13. Test case: 7, kha', () => {
        const result = danhHieu(7, 'kha');
        expect(result).to.equal('hocSinhTienTien');
    });

    it('14. Test case: 7, tot', () => {
        const result = danhHieu(7, 'tot');
        expect(result).to.equal('hocSinhTienTien');
    });

    it('15. Test case: 7, rong', () => {
        const result = danhHieu(7, '');
        expect(result).to.equal('saiDuLieu');
    });

    //

    it('16. Test case: 8, yeu', () => {
        const result = danhHieu(8, 'yeu');
        expect(result).to.equal('khongCoDanhHieu');
    });

    it('17. Test case: 8, trungBinh', () => {
        const result = danhHieu(8, 'trungBinh');
        expect(result).to.equal('khongCoDanhHieu');
    });

    it('18. Test case: 8, kha', () => {
        const result = danhHieu(8, 'kha');
        expect(result).to.equal('hocSinhTienTien');
    });

    it('19. Test case: 8, tot', () => {
        const result = danhHieu(8, 'tot');
        expect(result).to.equal('hocSinhGioi');
    });

    it('20. Test case: 8, rong', () => {
        const result = danhHieu(8, '');
        expect(result).to.equal('saiDuLieu');
    });

    //

    it('21. Test case: 11, yeu', () => {
        const result = danhHieu(11, 'yeu');
        expect(result).to.equal('saiDuLieu');
    });

    it('22. Test case: 11, trungBinh', () => {
        const result = danhHieu(11, 'trungBinh');
        expect(result).to.equal('saiDuLieu');
    });

    it('23. Test case: 11, kha', () => {
        const result = danhHieu(11, 'kha');
        expect(result).to.equal('saiDuLieu');
    });

    it('24. Test case: 11, tot', () => {
        const result = danhHieu(11, 'tot');
        expect(result).to.equal('saiDuLieu');
    });

    it('25. Test case: 1, rong', () => {
        const result = danhHieu(11, '');
        expect(result).to.equal('saiDuLieu');
    });
   
});

if (condition) {
    
} else {
    
}


