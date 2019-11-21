// 콘웨이 시퀀스 함수
function conwaySequence(R, L) {
   if (!validate(R, L)) {
      const msg = "input error! plz validate value";
      return msg;
   }

   let seq = [R];

   for (let i = 0; i < L - 1; i++) {
      let newArr = [],
         cnt = 1,
         j = 1;

      while (j < seq.length) {
         if (seq[j] !== seq[j - 1]) {
            newArr.push(cnt);
            newArr.push(seq[j - 1]);
            cnt = 1;
         } else {
            cnt++;
         }
         j++;
      }
      newArr.push(cnt);
      newArr.push(seq[j - 1]);
      seq = newArr;
   }

   return arrayToString(seq);
}

// 입력값 검사하는 함수
function validate(R, L) {
   if (0 < R && R < 100 && 0 < L && L <= 25) {
      return true;
   } else {
      return false;
   }
}

// 배열을 문자열로 바꿔주는 함수
function arrayToString(seq) {
   let str = "";
   seq.forEach(el => {
      str += `${el} `;
   });

   return str;
}

// 출력
console.log(conwaySequence(1, 6));
