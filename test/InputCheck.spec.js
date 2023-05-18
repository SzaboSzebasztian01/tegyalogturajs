describe('InputCheck 1', () => {

    it('"e"', () => {
        let act = inputCheck("e");
        expect(act).toBe(false);
    });

    it('10', () => {
        let act = inputCheck(11);
        expect(act).toBe(true);
    });

    it('"á20"', () => {
        let act = inputCheck("á20");
        expect(act).toBe(false);
    });

    it('"90"', () => {
        let act = inputCheck("90");
        expect(act).toBe(true);
    });
    
});