function jsp() {
    console.log("jsp function executed");
    // 여기서 jsp 함수가 실행될 때 실행할 코드 작성
}

// jsp 함수에 hello 메서드 추가
jsp.hello = function() {
    console.log("Hello from jsp.hello");
};

// jsp() 함수를 바로 호출 가능
jsp();          // "jsp function executed"

// jsp.hello() 메서드도 호출 가능
jsp.hello();    // "Hello from jsp.hello"
