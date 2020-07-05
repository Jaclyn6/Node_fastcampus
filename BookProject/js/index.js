function bindLogoutButton() { //로그아웃 버튼 함수
    const btnLogout = document.querySelector('#btn_logout');
    btnLogout.addEventListener('click', logout);
}

async function logout() {
    const token = getToken();
    if (token === null) {
      location.assign('/login');
      return;
    }
    try {
      await axios.delete('https://api.marktube.tv/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log('logout error', error);
    } finally {
      localStorage.clear();
      location.assign('/login');
    }
  }

function getToken() {
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token'); //token이란 이름의 객체를 로컬저장소에서 가져옴
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

async function getBooks(token) { //책 정보 조회하기
    try {
        const res = await axios.get('https://api.marktube.tv/v1/book', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error) {
        console.log('getBooks error', error);
        return null;
    }
}

function render(books) {
    const listElement = document.querySelector('#list');
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        const bookElement = document.createElement('div');
        bookElement.classList.value = 'col-md-4';
        bookElement.innerHTML = `
        <div class="card mb-4 shadow-sm">
      <div class="card-body">
        <p class="card-text">${book.title === '' ? '제목 없음' : book.title}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <a href="/book?id=${book.bookId}">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
            </a>
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary btn-delete"
              data-book-id="${book.bookId}"
            >
              Delete
            </button>
          </div>
          <small class="text-muted">${new Date(
            book.createdAt,
          ).toLocaleString()}</small>
        </div>
      </div>
    </div>
    `;
    listElement.append(bookElement);
    }
    document.querySelectorAll('.btn-delete').forEach(element => {
        element.addEventListener('click', async event => { //클릭시 함수 실행하는 이벤트 리스너를 btn-delete class에 추가
            const bookId = event.target.dataset.bookId;
            try {
                await delete(bookId);
                location.reload();
            } catch(error) {
                console.log(error);
            }
        });
    });
}

async function deleteBook(bookId) { //bookId를 받아 책 삭제
    const token = getToken();
    if (token === null) {
        location.assign('/login');
        return;
    }
    await axios.delete(`https://api.marktube.tv/v1/book/${bookId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return;
}

async function main() {
    //버튼에 이벤트 연결
    bindLogoutButton();

    // 로그인 토큰 체크
    const token = getToken();
    if (token === null) {
        location.assign('/login'); // token이 null이라면 /login 경로로 이동시킴
        return;
    }
    // 토큰을 통해 서버에서 나의 정보 받아오기
    const user = await getUserByToken(token);
    if (user === null) {
        localStorage.clear(); //토큰을 없애서 로그아웃을 시킴
        location.assign('/login');
        return;
    }

    // 나의 책을 서버에서 받아오기
    const books = await getbooks(token);
    if (books === null) {
        return;
    }

    //받아온 책을 그리기
    render(books);
}

document.addEventListener('DOMContentLoaded', main); // DOMContentLoaded : HTML 문서가 모두 로드되길 기다린 후 실행하는 이벤트
