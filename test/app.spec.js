describe('test 1; input 10, 10', () => {    
    it('test unSuccessCount', () => {
        let actual = getUnsuccessCount(10, 10);
        expect(actual).toBe(0);

    });

    it('test unSuccessPercent', () => {
        let actual = getUnsuccessPercent(10, 10);
        expect(actual).toBe(100);

    });

});

describe('test 2; input 30, 35', () => {
    it('test unSuccessCount 2', () => {
        let actual = getUnsuccessCount(30, 35);
        expect(actual).toBe(-5);

    });

    it('test unSuccessPercent 2', () => {
        let actual = getUnsuccessPercent(30, 35);
        expect(actual).toBe(116.666666666666667);

    });

});