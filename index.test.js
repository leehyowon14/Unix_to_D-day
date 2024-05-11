const { UnixToDday } = require('./index');

describe('UnixToDday function', () => {
    test('지원하지 않는 언어 주어질 시, 자동으로 영어로 변경', () => {
        const result = UnixToDday(new Date().getTime() + 10000, 'second', 'German');
        expect(result).toContain('Second+');
    });

    test('자동으로 접두어 바꾸기', () => {
        const futureTime = new Date().getTime() + 90000000; // 25시간 후
        const result = UnixToDday(futureTime, 'unsupportedType', 'English');
        expect(result).toContain('D+');
    });

    test('과거 시각에 대해 정확한 시간 반환', () => {
        const pastTime = new Date().getTime() - 5000; // 5초 전
        const result = UnixToDday(pastTime, 'second', 'Korean');
        expect(result).toBe('5초 남음.');
    });

    test('미래 시각에 대해 정확한 시간 반환', () => {
        const futureTime = new Date().getTime() + 5000; // 5초 후
        const result = UnixToDday(futureTime, 'second', 'English');
        expect(result).toBe('Second+5');
    });
});