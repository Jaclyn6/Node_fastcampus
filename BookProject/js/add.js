
function getToken() {
    return localStorage.getItem('token');
}

async function save(event) {
    event.preventDefault(); //submit 실행되었을 때 계속 submit 하는 속성을 제거
    event.stopPropagation(); // 상위 DOM에 이벤트가 전달되지 않도록 함
    console.log('save');

    event.target.classList.add('was-validated'); // Bootstrap 기능 : 문제가 없는 버튼으로 바뀌는 속성을 추가 체크표시 출력됌

    const titleElement = document.querySelector('#title');
    const messageElement = document.querySelector('#message');
    const authorElement = document.querySelector('#author');
    const urlElement = document.querySelector('#url');

    const title = titleElement.value;
    const message = messageElement.value;
    const author = authorElement.value;
    const url = urlElement.value;

    if(title === '' || message === '' || author === '' || url === '' ) {
        return;
    }
    
    const token = getToken();
    if (token === null) {
        location.assign('/login');
        return;
    }

    try {
        const res = await axios.post('https://api.marktube.tv/v1/book', {
            title,
            message,
            author,
            url
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        location.assign('/');
    } catch(error) {
        console.log('save error', error);
        alert('책 추가 실패');
    }
}

function bindSaveButton() {
    const form = document.querySelector('#form-add-book');
    form.addEventListener('submit', save);
}

async function getUserByToken(token) { //내 정보 조회하기
    try {
        const res = await axios.get('https://api.marktube.tv/v1/me', { //api로 요청
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data
    } catch (error) {
        console.log('getUserByToken error', error);
        return null;
    }
}

async function main() {
    // 버튼에 이벤트 연결
    bindSaveButton();

    // 토큰 체크
    const token = getToken();
    if (token === null) {
        location.assign("/login");
        return;
    }

    // 토큰으로 서버에서 나의 정보 받아오기
    const user = await getUserByToken(token);
    if (user === null) {
        localStorage.clear();
        location.assign("/login");
        return;
    }
}



document.addEventListener('DOMContentLoaded', main);