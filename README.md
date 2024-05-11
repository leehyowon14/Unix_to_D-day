# Unix to D-Day 라이브러리

주어진 Unix 시간을 기반으로 D-Day 카운터를 생성하는 라이브러리입니다.

## 기능
- Unix 시간을 입력받아 원하는 시간 단위로 D-Day 계산을 수행합니다.
    - 지원하지 않는 시간 단위가 입력될 경우 자동으로 적절한 시간 단위로 변경됩니다.
- 한국어와 영어를 지원합니다
    - 지원하지 않는 언어가 입력될 경우 자동으로 영어로 설정됩니다.

## 사용 방법
1. 라이브러리를 설치합니다.
2. `UnixToDday` 함수를 사용하여 Unix 시간, 원하는 시간 단위, 언어를 인자로 제공합니다.
3. 함수는 선택된 언어와 시간 단위에 따라 D-Day 문자열을 반환합니다.

## 지원 단위
시간:
- day
- hour
- minute
- second

언어:
- Korean
- English

## 예제
```javascript
const { UnixToDday } = require('./index');

// 현재 시간보다 3일 후의 Unix 시간
const futureUnixTime = new Date().getTime() + (3 * 86400000); // 3 days in milliseconds
const pastUnixTime = new Date().getTime() - (3 * 86400000); // 3 days in milliseconds

// D-Day 계산
const futureDday = UnixToDday(futureUnixTime, 'day', 'Korean');
const pastDday = UnixToDday(pastUnixTime, 'day', 'Korean');

console.log(futureDday); // 출력 예: "3일 남음."
console.log(pastDday); // 출력 예: "3일 지남."
```