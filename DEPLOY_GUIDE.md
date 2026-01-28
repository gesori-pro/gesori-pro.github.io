# Firebase와 함께 GitHub Pages에 배포하기

네! 이 코드를 GitHub Pages에 올려도 아주 잘 동작합니다. Firebase는 브라우저에서 데이터베이스로 직접 연결되기 때문입니다.

## 1. 보안 관련 질문 (FAQ)

### Q: 제 API Key를 올려도 안전한가요?
**A: 네, 안전합니다.**
Firebase API Key는 원래 프론트엔드 코드(`fire.js`)에 포함되어 공개되도록 설계되었습니다.
-   이 API Key는 구글 서버에 **"이 프로젝트입니다"**라고 식별하는 용도입니다.
-   데이터베이스를 마음대로 삭제할 수 있는 **관리자 권한이 아닙니다.**
-   진정한 보안은 **Firebase Security Rules(보안 규칙)**에서 처리합니다. (현재는 프로토타입이라 "Test Mode"로 열어두었지만요)

### Q: "외부 연동" 설정이 필요한가요?
**A: 대부분 바로 되지만, 하나 설정할 게 있을 수 있습니다.**
Realtime Database는 보통 즉시 작동합니다. 하지만 나중에 "Firebase Authentication(로그인)" 기능을 쓰게 된다면, GitHub 주소를 허용 목록에 넣어야 합니다.
-   **위치**: Firebase 콘솔 -> Authentication -> Settings -> **Authorized Domains (승인된 도메인)**
-   **추가할 것**: `your-username.github.io` (본인의 깃허브 주소)

## 2. 배포 단계

1.  **GitHub 저장소(Repository) 만들기**:
    -   GitHub 접속 -> New Repository -> 이름 짓기 (예: `rps-game`).
    -   **Public (공개)**으로 설정합니다. (무료 GitHub Pages는 보통 공개여야 함)

2.  **파일 업로드**:
    -   `index.html`, `style.css`, `game.js`, `fire.js` 파일을 모두 업로드합니다.
    -   **주의**: `index.html` 파일이 최상위 폴더(Root)에 있어야 합니다.

3.  **GitHub Pages 활성화**:
    -   저장소의 **Settings (설정)** -> 왼쪽 메뉴의 **Pages** 클릭.
    -   **Branch** 항목에서 `main` (또는 `master`) 선택 후 폴더를 `/ (root)`로 그대로 둠.
    -   **Save (저장)** 클릭.

4.  **플레이!**:
    -   1~2분 정도 기다립니다.
    -   게임 주소: `https://<본인아이디>.github.io/<저장소이름>/`
    -   친구에게 링크를 보내서 같이 게임을 해보세요!
