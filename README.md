# 최윤서 포트폴리오 사이트

빌드 과정이 없는 정적 사이트입니다. 폴더 그대로 Vercel에 올리면 됩니다.

## 파일 구성

| 파일 | 고칠 일 |
|---|---|
| `content.js` | **내용은 거의 전부 여기.** 프로젝트, 상세 팝업, 데모 영상, 아카이브, 이메일 |
| `index.html` | 첫 화면 문구, About 문단, 학력·어학·도구 |
| `styles.css` | 맨 위 `:root`의 색만 바꾸면 전체 분위기가 바뀝니다 |
| `app.js` | 화면 그리기와 움직임. 보통은 건드리지 않아도 됩니다 |
| `assets/` | 이미지. `assets/work/`에 프로젝트 이미지 |

## 빈 자리 채우기

`〔 〕`로 감싼 문구는 아직 자료가 없는 자리입니다. 사이트에서는 점선 박스로 보입니다.
`content.js`와 `index.html`에서 `〔`를 검색해 하나씩 채우면 됩니다.

- 프로필 사진: `assets/profile.jpg`로 넣고 `index.html`의 `〔프로필 사진〕` 부분을 `<img src="assets/profile.jpg" alt="최윤서">`로 바꿉니다.
- 프로젝트 이미지: `assets/work/`에 넣고 `content.js`에서 해당 프로젝트에 `img: 'assets/work/파일이름.jpg'`을 추가합니다.

## 미리보기

폴더에서 터미널을 열고 `python3 -m http.server`를 실행한 뒤 http://localhost:8000 을 엽니다.

## Vercel 배포

1. GitHub에 새 저장소를 만들고 이 폴더의 파일을 올립니다.
2. vercel.com → Add New → Project → 그 저장소를 Import합니다.
3. Framework Preset은 **Other**로 두고 Deploy를 누릅니다.
4. 이후에는 GitHub에 수정본을 올릴 때마다 자동으로 다시 배포됩니다.
