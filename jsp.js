function jsp() {
    console.log("jsp function executed");
}

// jsp 함수에 hello 메서드 추가
jsp.hello = function() {
    console.log("Hello from jsp.hello");
};

// jsp() 함수를 바로 호출 가능
jsp();          // "jsp function executed"

// jsp.hello() 메서드도 호출 가능
jsp.hello();    // "Hello from jsp.hello"
