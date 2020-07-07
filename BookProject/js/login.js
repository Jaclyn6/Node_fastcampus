function getToken() {
    return localStorage.getItem('token'); //getItem에 ctrl+마우스를 대보면 리턴 값이 null 혹은 string임을 알 수 있음
}

async function login(event) {
    event.preventDefault(); // submit 이벤트에 대한 로직이 추가 진행되는 것을 막아줌
    event.stopPropagation(); // submit 이벤트가 상위로 전달되지 않도록 막아줌
    
    const emailElement = document.querySelector('#email');
    const passwordElement = document.querySelector('#password');

    const email = emailElement.value;
    const password = passwordElement.value;

    try {
        const res = await axios.post('https://api.marktube.tv/v1/me', {
            email: email,
            password: password,
        });

        const {token} = res.data; // const token = res.data.token; 과 같음
        if ( token === undefined ) {
            return;
        }
        localStorage.setItem('token',token); //token을 저장
        location.assign('/');
    } catch (error) {
        const data = error.response.data;
        if (data) { //에러 메세지가 있는 상태로 내려올 시 실행
            const state = data.error;
            if (state === 'USER_NOT_EXIST') { //유저가 존재하지 않는 에러
                alert('사용자가 존재하지 않습니다.');
            } else if (state === 'PASSWORD_NOT_MATCH') {
                alert('비밀번호가 틀렸습니다.');
            }
        }
    }
}

function bindLoginbutton() {
    const form = document.querySelector('#form-login');
    form.addEventListener('submit', login); //submit에 대한 이벤트를 인자로 넘김 login('submit')
}

function main() {
    // 버튼에 이벤트 연결
    bindLoginbutton();

    // 토큰 체크
    const token = getToken();
    if(token !== null) {
        location.assign('/');
        return;
    }
}


document.addEventListener('DOMContentLoaded', main);