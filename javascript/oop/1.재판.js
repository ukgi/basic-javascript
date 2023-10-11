class 왕 {
  constructor(모자장수) {
    this.모자장수 = 모자장수;
    this.언제 = '어제';
    this.어디서 = '왕궁에서';
  }

  증언을명령하다() {
    this.모자장수.증언하다(this.언제, this.어디서);
  }
}

class 증인 {
  증언하다() {}
}

class 모자장수 extends 증인 {
  증언하다(언제, 어디서) {
    console.log(`저 모자장수! ${언제}, ${어디서}본 기억을 되살려 증언하겠습니다.`);
    this.글을보다();
  }

  글을보다() {
    console.log('모자장수가 글을 봅니다.');
  }
}

class 앨리스 extends 증인 {
  증언하다() {
    console.log('나 엘리스는 이렇게 증언할래~');
  }
}

class 찬욱 extends 증인 {
  증언하다() {
    console.log('안해 증언!');
  }
}

const 하트왕 = new 왕(new 모자장수());
하트왕.증언을명령하다();
